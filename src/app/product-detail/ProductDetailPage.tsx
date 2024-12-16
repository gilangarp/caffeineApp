import { DetailProduct } from "./DetailProduct";
import { Recommendation } from "./Recommendation";

export const ProductDetailPage = () => {
  return (
    <div className="w-full grid gap-5 px-5 md:px-10 lg:px-20 pt-14 md:pt-16 lg:pt-20">
      <DetailProduct />
      <Recommendation />
    </div>
  );
};
