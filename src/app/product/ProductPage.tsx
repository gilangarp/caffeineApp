import { ProductFilter } from "./ProductFilter";
import { ProductImage } from "./ProductImage";
import { ProductItem } from "./ProductItem";
import { PromoProduct } from "./PromoProduct";

export const ProductPage = () => {
  return (
    <div>
      <ProductImage />
      <PromoProduct />
      <div className="pb-4 px-5 md:px-10 lg:px-20 grid gap-5 md:gap-10 ">
        <h1 className="text-heading_mobile lg:text-heading_desktop text-black font-jakarta ml-0">
          Today's <span className="text-[#8E6447]">Promos</span>
        </h1>
        <div className="grid grid-row-[auto,1fr] lg:grid-cols-[auto,1fr]">
          <ProductFilter />
          <ProductItem/>
        </div>
      </div>
    </div>
  );
};
