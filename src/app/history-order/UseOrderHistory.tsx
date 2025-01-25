import { useCallback, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { historyOrderActions } from "../../redux/slice/HistoryOrderSlice";
import { testimonialInputThunk } from "../../redux/actions/TestimonialAction";

export const UseOrderHistory = () => {
  const dispatch = useStoreDispatch();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { id, token } = useStoreSelector((state) => state.auth);

  const handleSubmit = () => {
    const input = {
      id: id || "",
      token: token || "",
      comment: review,
      rating: rating,
    };
    dispatch(testimonialInputThunk(input)).unwrap();
    setIsModalOpen(false);
    setReview("");
    setRating(0);
    setErrorMessage("");
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const { history, isLoading, pagination } = useStoreSelector(
    (state) => state.historyOrder
  );
  const [activeStatus, setActiveStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const historyPerPage = 2;

  const fetchOrderHistory = useCallback(
    (status: string) => {
      const params = {
        filters: { status },
        currentPage,
        historyPerPage,
        uuid: id || "",
      };
      dispatch(historyOrderActions.historyOrderThunk(params));
      setActiveStatus(status);
    },
    [dispatch, id, currentPage]
  );

  return {
    history,
    isLoading,
    pagination,
    currentPage,
    activeStatus,
    fetchOrderHistory,
    setCurrentPage,
    handleSubmit,
    review,
    setReview,
    rating,
    setRating,
    handleClose,
    isModalOpen,
    errorMessage,
    setErrorMessage,
  };
};
