import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect, useRef } from "react";
import { filterActions } from "../../redux/slice/ProductSlice";

export const UseFavorite = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const { product, filter } = useStoreSelector((state) => state.product);
  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  const currentPage = 1;
  const productsPage = 6;

  const hasFetched = useRef(false);
  useEffect(() => {
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

  return {
    product,
    handleBuyClick,
  };
};
