import { useStoreSelector } from "../../redux/hook";

export const ProductDetailPage = () => {
  const { product } = useStoreSelector((state) => state.product);
  return (
    <div className="h-screen w-full px-5 md:px-10 lg:px-20 pt-14 md:pt-16 lg:pt-20">
      <h1 className="text-black">cek</h1>
      <h1 className="text-black">{product[0].uuid}</h1>
    </div>
  );
};
