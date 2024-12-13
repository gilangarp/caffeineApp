import PaginationNumbers from "../../components/pagination/PaginationNumbers";
import { ProductCard } from "../../components/cards/ProductCard";
import { UseProductItem } from "./UseProductItem";

export const ProductItem = () => {
  const {handleBuyClick,currentPage,setCurrentPage,isLoading,product,pagination} = UseProductItem();
  return (
    <div className="w-full overflow-hidden">
      <div
        style={{ overflowY: "hidden", scrollbarWidth: "none" }} 
        className="slide-content grid justify-items-center items-center grid-cols-[1fr,1fr,1fr,1fr] md:grid-cols-2 lg:grid-cols-2 gap-9 h-fit bg-white overflow-x-scroll snap-mandatory snap-x md:overflow-x-auto md:snap-none">
        {/* Product */}
        {isLoading ? (
          <p>Loading...</p>
        ) : product.length > 0 ? (
          product.map((productItem) => (
            <ProductCard
              onBuyClick={handleBuyClick}
              product={productItem}
              key={productItem.id}
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
