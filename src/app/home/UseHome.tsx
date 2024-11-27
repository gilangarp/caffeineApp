import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useEffect, useRef, useState } from "react";
import { filterActions } from "../../redux/slice/ProductSlice";
import { testimonialThunk } from "../../redux/actions/Testimonial";

export const UseHome = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  /* Favorite */
  const { product, filter } = useStoreSelector((state) => state.product);
  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  const currentPage = 1;
  const productsPage = 6;

  const hasFetched = useRef(false);
  useEffect(() => {
    console.log("useEffect triggered");
    if (!hasFetched.current) {
      dispatch(
        filterActions.productThunk({
          filters: filter,
          currentPage,
          productsPage,
        })
      );
      hasFetched.current = true;
    }
  }, [dispatch, filter, currentPage]);

  /* Testimonial */
  const { user, pagination } = useStoreSelector((state) => state.testimonial);

  const [currentPageTesti, setCurrentPage] = useState(pagination.currentPage);

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
    product,
    handleBuyClick,
    user,
    currentPageTesti,
    handlePageChange,
    pagination,
    dummyTestimonial,
  };
};
