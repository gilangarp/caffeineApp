import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { testimonialThunk } from "../../redux/actions/Testimonial";

export const UseTesimonial = () => {
  const dispatch = useStoreDispatch();
  const { user, pagination } = useStoreSelector((state) => state.testimonial);

  const [currentPage, setCurrentPage] = useState(pagination.currentPage);

  useEffect(() => {
    const testimonialPage = 1;
    dispatch(testimonialThunk({ currentPage, testimonialPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const dummyTestimonial = {
    full_name: "John Doe",
    comment:
      "This is a dummy testimonial to show how it would look in the app.",
    rating: "5",
    user_img: "https://via.placeholder.com/150",
    user_phone: "+1 234 567 890",
  };
  return {
    user,
    currentPage,
    handlePageChange,
    pagination,
    dummyTestimonial,
  };
};
