import { useNavigate, useLocation } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { filterActions } from "../../redux/slice/ProductSlice";

export const UseProductItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useStoreDispatch();

  const { isLoading, product, filter, pagination } = useStoreSelector((state) => state.product);
  
  const [productsPage, setProductsPage] = useState(4);

  useEffect(() => {
    const updateProductsPage = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setProductsPage(6); 
      } else {
        setProductsPage(4); 
      }
    };
    updateProductsPage(); 
    window.addEventListener("resize", updateProductsPage); 

    return () => {
      window.removeEventListener("resize", updateProductsPage); 
    };
  }, []);

  const queryParams = new URLSearchParams(location.search);
  const currentPageFromUrl = parseInt(queryParams.get("page") || "1"); 
  const [currentPage, setCurrentPage] = useState(currentPageFromUrl);

  useEffect(() => {
    if (currentPage !== currentPageFromUrl) {
      navigate(`?page=${currentPage}`, { replace: true });
    }
  }, [currentPage, navigate, currentPageFromUrl]);

  useEffect(() => {
    dispatch(
      filterActions.productThunk({
        filters: filter,
        currentPage,
        productsPage,
      })
    );
  }, [dispatch, filter, currentPage, productsPage]);

  const handleBuyClick = (id: string) => {
    navigate(`/detail-product/${id}`);
  };

  return { handleBuyClick, currentPage, setCurrentPage, isLoading, product, pagination };
};
