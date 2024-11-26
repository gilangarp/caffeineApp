import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaginationNumbers from "../../components/pagination/PaginationNumbers";
import { ProductCard } from "../../components/cards/ProductCard";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { filterActions } from "../../redux/slice/ProductSlice";

export const ProductItem = () => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleBuyClick = (uuid: string) => {
    navigate(`/detail-product/${uuid}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 6;

  const { isLoading, product, filter, pagination } = useStoreSelector(
    (state) => state.product
  );

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

  return (
    <div className="lg:grid lg:justify-end">
      <div
        style={{ overflowY: "hidden", scrollbarWidth: "none" }}
        className="w-full grid justify-items-center items-center grid-cols-1 md:grid-cols-[1fr,1fr] gap-3 lg:gap-20 h-fit p-5 overflow-x-scroll snap-mandatory snap-x">
        {/* Product */}
        {isLoading ? (
          <p>Loading...</p>
        ) : product.length > 0 ? (
          product.map((productItem) => (
            <ProductCard
              onBuyClick={handleBuyClick}
              product={productItem}
              key={productItem.uuid}
              imgError=""
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <PaginationNumbers
        currentPage={currentPage}
        totalPages={pagination.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
