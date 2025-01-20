import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { testimonialActions } from "../../redux/slice/TestimonialSlice";

export const UseTesimonial = () => {
  const dispatch = useStoreDispatch();
  const { user, pagination } = useStoreSelector((state) => state.testimonial);

  const [currentPage, setCurrentPage] = useState(pagination.currentPage);

  useEffect(() => {
    const testimonialPage = 1;
    dispatch(
      testimonialActions.testimonialThunk({ currentPage, testimonialPage })
    );
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const dummyTestimonial = {
    full_name: "John Doe",
    comment:
      "This is a dummy testimonial to show how it would look in the app.",
    rating: "5",
    profile_image: "https://via.placeholder.com/150",
    role: "user",
  };
  return {
    user,
    currentPage,
    handlePageChange,
    pagination,
    dummyTestimonial,
  };
};
