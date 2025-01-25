import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { transactionThunk } from "../../redux/actions/TransactionAction";
import { profileActions } from "../../redux/slice/ProfileSlice";
import { paymentInfoActions } from "../../redux/slice/paymentInfoSlice";
import { useSnap } from "../../hooks/useSnap";
import { useNavigate } from "react-router-dom";
import { checkoutAction } from "../../redux/slice/CheckoutSlice";

export const UseCheckoutTotal = () => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSnapEmbed, setIsSnapEmbed] = useState(false);
  const [isStar, setIsStar] = useState(Number);

  const { snapEmbed } = useSnap();
  const dispatch = useStoreDispatch();
  const { checkout } = useStoreSelector((state) => state.checkout);
  const { dataProfile } = useStoreSelector((state) => state.profile);
  const { id, token } = useStoreSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    selected_delivery,
    selected_payment,
    user_address,
    user_email,
    user_fullname,
  } = useStoreSelector((state) => state.paymentInfo);

  useEffect(() => {
    if (id && token) {
      dispatch(profileActions.profileThunk({ id, token }));
    }
  }, [dispatch, id, token]);

  const handleCheckoutClick = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationModalOpen(false);
    handleConfirmCheckout();
  };

  const handleConfirmCheckout = async () => {
    if (!user_fullname || !user_email || !user_address) {
      setIsWarningModalOpen(true);
      return;
    }

    const statusId = selected_payment === "Cash" ? 3 : 1;

    const payload = {
      user_id: id || "",
      token: token || "",
      full_name: user_fullname,
      address: user_address,
      user_email: user_email,
      shipping_id: selected_delivery,
      payment_type: selected_payment,
      status_id: statusId,
      products: checkout.map((item) => ({
        product_id: item.id || "",
        size_id: item.size_id || "",
        fd_option_id: item.ice_hot || 0,
      })),
    };

    try {
      const action = await dispatch(transactionThunk(payload)).unwrap();
      const transactionToken = action.token;
      if (action.payment_method == "Midtrans") {
        setIsLoading(true);
        setIsSnapEmbed(true);
        snapEmbed(transactionToken, "snap-container", {
          onSuccess: function () {
            setIsLoading(false);
            setIsSnapEmbed(false);
            dispatch(checkoutAction.removeAll());
          },
          onPending: function () {
            setIsLoading(false);
            setIsSnapEmbed(false);
          },
          onClose: function () {
            setIsLoading(false);
            setIsSnapEmbed(false);
          },
        });
      } else {
        setIsLoading(true);
        navigate(`/history-order`);
        dispatch(checkoutAction.removeAll());
      }
    } catch (error) {
      console.error("Transaction error: ", error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    dispatch(paymentInfoActions.setEmail(newEmail));
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFullName = e.target.value;
    dispatch(paymentInfoActions.setFullName(newFullName));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    dispatch(paymentInfoActions.setAddress(newAddress));
  };

  const handlePaymentChange = (paymentOption: string) => {
    dispatch(paymentInfoActions.setPayment(paymentOption));
  };

  const handleDeliveryChange = (deliveryOption: number) => {
    dispatch(paymentInfoActions.setDelivery(deliveryOption));
  };

  return {
    handleConfirmCheckout,
    user_email,
    user_fullname,
    user_address,
    handleEmailChange,
    handleFullNameChange,
    handleAddressChange,
    handleDeliveryChange,
    handlePaymentChange,
    selected_delivery,
    selected_payment,
    dataProfile,
    handleConfirm,
    isWarningModalOpen,
    setIsWarningModalOpen,
    isConfirmationModalOpen,
    setIsConfirmationModalOpen,
    handleCheckoutClick,
    isLoading,
    isSnapEmbed,
    isStar,
    setIsStar,
  };
};
