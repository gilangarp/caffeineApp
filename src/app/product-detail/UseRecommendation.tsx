import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect, useState } from "react";
import { filterActions } from "../../redux/slice/ProductSlice";

export const UseRecommendation = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const { product, filter, pagination, isLoading } = useStoreSelector(
    (state) => state.product
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  const productsPage = 4;

  useEffect(() => {
    dispatch(
      filterActions.productThunk({
        filters: filter,
        currentPage,
        productsPage,
      })
    );
  }, [dispatch, filter, currentPage, productsPage]);

  return {
    product,
    handleBuyClick,
    currentPage,
    setCurrentPage,
    pagination,
    isLoading,
  };
};
