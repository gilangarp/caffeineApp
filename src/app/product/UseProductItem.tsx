import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { filterActions } from "../../redux/slice/ProductSlice";

export const UseProductItem = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const { isLoading, product, filter, pagination } = useStoreSelector((state) => state.product);
  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 6;


  useEffect(() => {
    const fetchProducts = () => {
      dispatch(
        filterActions.productThunk({
          filters: filter || {
            category: "",
            sortBy: "",
            max_price: "",
            min_price: "",
            searchText: "",
          },
          currentPage,
          productsPage,
        })
      );
    };

    fetchProducts();
  }, [dispatch, filter, currentPage]);
  return {handleBuyClick,currentPage,setCurrentPage,isLoading,product,pagination};
};
