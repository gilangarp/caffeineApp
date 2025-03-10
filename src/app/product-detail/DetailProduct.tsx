import { MessageModal } from "../../components/alerts/MessageAlert";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { IceHotInput } from "../../components/input/IceHotInput";
import { QuantityInput } from "../../components/input/QuantityInput";
import { SizeInput } from "../../components/input/SizeInput";
import { ImageDisplay } from "./ImageDisplay";
import { ProductInfo } from "./ProductInfo";
import { useProductDetail } from "./UseDetailProoduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const DetailProduct = () => {
  const {
    count,
    message,
    imagesArray,
    selectedSize,
    currentImage,
    productDetail,
    selectedOption,
    closeMessage,
    handleImageClick,
    handleIncrement,
    handleDecrement,
    handleSizeChange,
    handleOptionChange,
    handleBasketClick,
    handleBuy,
  } = useProductDetail();

  const productPrice =
    productDetail.length > 0
      ? productDetail[0].product.discount_price
        ? productDetail[0].product.discount_price
        : productDetail[0].product.product_price
      : 0;

  const originalPrice =
    productDetail.length > 0 && productDetail[0].product.discount_price
      ? productDetail[0].product.product_price
      : 0;

  return (
    <div className="w-full grid gap-10 lg:grid-cols-2">
      <MessageModal message={message} onClose={closeMessage} />
      <div className="">
        <ImageDisplay
          currentImage={currentImage}
          images={imagesArray}
          onImageClick={handleImageClick}
        />
      </div>
      <div className="grid h-fit gap-5">
        <ProductInfo
          product_name={
            productDetail.length > 0
              ? productDetail[0].product.product_name || ""
              : ""
          }
          product_price={productPrice}
          discount_price={originalPrice}
          product_description={
            productDetail.length > 0
              ? productDetail[0].product.product_description || ""
              : ""
          }
          rating={
            productDetail.length > 0
              ? productDetail[0].product.rating || "5"
              : ""
          }
        />
        <QuantityInput
          count={count}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
        />
        <SizeInput
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />
        <IceHotInput
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
        />
        <div className="grid grid-cols-2 gap-3">
          <PrimaryButton
            onClick={handleBuy}
            text="Buy"
            style="w-full text-sm"
            disabled={
              selectedSize === undefined || selectedOption === undefined
            }
          />
          <button
            onClick={handleBasketClick}
            className="rounded-xl py-2 border-2 w-full border-primary bg-transparent text-sm flex justify-center items-center gap-3 text-primary"
          >
            <div className="w-6 h-auto">
              <AddShoppingCartIcon />
            </div>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
