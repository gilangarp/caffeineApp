import { PrimaryButton } from "../button/PrimaryButton";
import { Rating } from "../rating/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Product {
  uuid: string;
  img_product?: string;
  product_name: string;
  product_description: string;
  product_price: string;
  rating: string;
}

interface ProductCardProps {
  product: Product;
  onBuyClick: (uuid: string) => void;
  imgError: string;
}

export const ProductCard = ({
  product,
  onBuyClick,
  imgError,
}: ProductCardProps) => {
  return (
    <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center snap-center hover:box-s">
      <div className="w-full h-[268px] overflow-hidden">
        <img
          src={product.img_product || imgError}
          alt={product.product_name}
          className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"
        />
      </div>

      <div className="border -translate-y-1/4 bg-white p-3 box-border w-[220px] h-fit flex flex-col place-items-center shadow-md">
        <h1 className="font-medium text-xl text-[#0B132A] mb-3 truncate w-full max-w-xs">
          {product.product_name}
        </h1>
        <p className="font-normal text-text text-sm mb-3 w-full max-w-xs line-clamp-2">
          {product.product_description}
        </p>
        <Rating textColor="text" rating={Number(product.rating)} />
        <p className="font-medium text-xl mb-3 text-primary">
          IDR. {product.product_price}
        </p>

        <div className="flex w-full gap-3">
          <PrimaryButton
            onClick={() => onBuyClick(product.uuid)}
            text="Buy"
            style="w-full text-sm"
          />

          <button
            onClick={() => onBuyClick(product.uuid)}
            className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center">
            <div className="w-6 h-auto">
              <ShoppingCartIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
