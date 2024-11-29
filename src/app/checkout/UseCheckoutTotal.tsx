import { useState } from "react";
import { testimonialInputThunk } from "../../redux/actions/Testimonial";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";

export const UseCheckoutTotal = () => {
  const dispatch = useStoreDispatch();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isMessageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleConfirmCheckout = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setModalOpen(false);
      setMessageModalOpen(true);
    }, 200);
  };

  const handleCloseMessageModal = () => {
    setMessageModalOpen(false);
    setReviewModalOpen(true);
  };

  const id  = useStoreSelector((state) => state.auth.id);

  const handleReviewSubmit = (review: string, rating: number) => {
    const dataReview = { comment: review, rating, id: id || '' };
    dispatch(testimonialInputThunk(dataReview));
    console.log("Review submitted:", review, "Rating:", rating, "id :" , id);
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
