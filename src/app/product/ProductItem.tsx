import PaginationNumbers from "../../components/pagination/PaginationNumbers";
import { ProductCard } from "../../components/cards/ProductCard";
import { UseProductItem } from "./UseProductItem";

export const ProductItem = () => {
  const {handleBuyClick,currentPage,setCurrentPage,isLoading,product,pagination} = UseProductItem();
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
