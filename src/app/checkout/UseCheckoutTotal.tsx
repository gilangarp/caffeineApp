import { useState } from "react";
import { testimonialInputThunk } from "../../redux/actions/TestimonialAction";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { UseCheckOutOrder } from "./UseCheckOutOrder";
import { transactionThunk } from "../../redux/actions/TransactionAction";

export const UseCheckoutTotal = () => {
  const dispatch = useStoreDispatch();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isMessageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { checkout } = useStoreSelector((state) => state.checkout);
  const { id } = useStoreSelector((state) => state.auth);
  const { orderTotal, tax, total } = UseCheckOutOrder();

  const handleConfirmCheckout = async () => {
    const formData = {
      user_id: id || "",
      payments_id: 1,
      shipping_id: 1,
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
  };
};
