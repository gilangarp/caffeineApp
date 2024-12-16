import { useEffect, useState } from "react";
import { testimonialInputThunk } from "../../redux/actions/TestimonialAction";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { UseCheckOutOrder } from "./UseCheckOutOrder";
import { transactionThunk } from "../../redux/actions/TransactionAction";
import { profileActions } from "../../redux/slice/ProfileSlice";

export const UseCheckoutTotal = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isMessageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState<number | 1>(1);
  
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  
  const dispatch = useStoreDispatch();
  const { checkout } = useStoreSelector((state) => state.checkout);
  const {dataProfile} = useStoreSelector((state) => state.profile);
  const { id , token } = useStoreSelector((state) => state.auth);
  const { orderTotal, tax, total } = UseCheckOutOrder();

  useEffect(() => {
      if (id && token) {
        dispatch(
          profileActions.profileThunk({
            id: id,
            token: token,
          })
        );
      }
    }, [dispatch, id, token]);

  const emailValue = dataProfile?.[0]?.user_email === "Enter Your Email" ? "" : dataProfile?.[0]?.user_email;
  const fullNameValue = dataProfile?.[0]?.full_name === "Enter Your Full Name" ? "" : dataProfile?.[0]?.full_name;
  const addressValue = dataProfile?.[0]?.address === "Enter Your Address" ? "" : dataProfile?.[0]?.address;
  
  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleConfirmCheckout();
  };

  const handleConfirmCheckout = async () => {

    if (!emailValue || !fullNameValue || !addressValue) {
      alert("Please fill in all the required fields (Email, Full Name, Address).");
      return;
    }
  
    const formData = {
      user_id: id || "",
      payments_id: 1,
      shipping_id: selectedDelivery,
      status_id: 3,
      subtotal: orderTotal,
      tax: tax,
      grand_total: total,
      products: [
        {
          product_id: checkout[0].id || "", 
          size_id: checkout[0].size_id || "",
          fd_option_id: checkout[0].ice_hot || 0,
        },
      ],
    }; 
    dispatch(transactionThunk(formData));  
    setLoading(true);
    setLoading(false);
    setSuccess(true);
    setModalOpen(false);
    setMessageModalOpen(true);
  };

  const handleCloseMessageModal = () => {
    setMessageModalOpen(false);
    setReviewModalOpen(true);
  };

  const handleReviewSubmit = (review: string, rating: number) => {
    const dataReview = { comment: review, rating, id: id || "" };
    dispatch(testimonialInputThunk(dataReview));
    setMessageModalOpen(false);
    setReviewModalOpen(false);
  };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFullName(event.target.value);
    };
  
    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    };
  
    const handleDeliveryChange = (deliveryOption: number) => {
      setSelectedDelivery(deliveryOption);
    };

  return {
    isModalOpen,
    isLoading,
    isSuccess,
    isMessageModalOpen,
    isReviewModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleConfirmCheckout,
    handleCloseMessageModal,
    handleReviewSubmit,
    email,
    fullName,
    address,
    selectedDelivery,
    handleEmailChange,
    handleFullNameChange,
    handleAddressChange,
    handleDeliveryChange,
    onSubmitHandler,
    dataProfile
  };
};
