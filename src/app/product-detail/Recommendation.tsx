import { ProductCard } from "../../components/cards/ProductCard";
import PaginationNumbers from "../../components/pagination/PaginationNumbers";
import { UseRecommendation } from "./UseRecommendation";

export const Recommendation = () => {
  const {
    handleBuyClick,
    product,
    currentPage,
    setCurrentPage,
    pagination,
    isLoading,
  } = UseRecommendation();

  return (
    <div className="font-jakarta grid gap-10">
      <div className="">
        <h1 className="text-heading_mobile lg:text-heading_desktop text-black font-jakarta ml-0">
          Recommendation <span className="text-[#8E6447]">For You</span>
        </h1>
      </div>
      <div className="grid">
        <div
          style={{ overflowY: "hidden", scrollbarWidth: "none" }}
          className="slide-content grid justify-items-center items-center grid-cols-[1fr,1fr,1fr,1fr] gap-9 h-fit bg-white overflow-x-scroll snap-mandatory snap-x lg:overflow-x-auto lg:snap-none lg:grid-cols-4">
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
    </div>
  );
};
