import { useNavigate, useParams } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { selectProductActions } from "../../redux/slice/SelectProductSlice";
import { producDetailtAction } from "../../redux/slice/ProducDetailtSlice";
import { ITransactionProduct } from "../../redux/types/ProductType";
import { checkoutAction } from "../../redux/slice/CheckoutSlice";

export const useProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const dispatch = useStoreDispatch();
    const { currentImage, count, selectedSize, selectedOption } = useStoreSelector((state) => state.selectProduct);
    const { productDetail } = useStoreSelector((state) => state.detailProduct);
  
    const [message, setMessage] = useState<{ type: "success" | "error"; header: string; body: string;} | null>(null);
  
    useEffect(() => {
      if (id) {
        dispatch(producDetailtAction.productDetailThunk({ id }));
      }
    }, [dispatch, id]);
  
    useEffect(() => {
      if (
        productDetail.length > 0 &&
        productDetail[0].images &&
        productDetail[0].images.img_1
      ) {
        dispatch(
          selectProductActions.setCurrentImage(productDetail[0].images.img_1)
        );
      }
    }, [productDetail, dispatch]);
  
    const imagesArray =
      productDetail.length > 0
        ? [
            productDetail[0].images?.img_1,
            productDetail[0].images?.img_2,
            productDetail[0].images?.img_3,
          ].filter((img): img is string => img !== undefined)
        : [];
  
    const handleImageClick = (img: string) => {
      dispatch(selectProductActions.setCurrentImage(img));
    };
  
    const handleIncrement = () => {
      dispatch(selectProductActions.incrementCount());
    };
  
    const handleDecrement = () => {
      dispatch(selectProductActions.decrementCount());
    };
  
    const handleSizeChange = (size: number) => {
      dispatch(selectProductActions.setSize(size));
    };
  
    const handleOptionChange = (option: number) => {
      dispatch(selectProductActions.setOption(option));
    };
  
    const handleBasketClick = () => {
      if (selectedSize === undefined || selectedOption === undefined) {
        setMessage({
          type: "error",
          header: "Error",
          body: "Please select both size and hot/ice option before adding to the basket.",
        });
      } else {
        const defaultProduct = {
          id: productDetail[0].product.id,
          img_product: productDetail[0].images.img_1,
          product_name: productDetail[0].product.product_name,
          discount_price: productDetail[0].product.product_price,
          product_price: productDetail[0].product.product_price,
          count,
          size_id: selectedSize,
          ice_hot: selectedOption,
          delivery_id: undefined,
          payment_id: undefined,
        };
        dispatch(checkoutAction.checkoutProduct(defaultProduct));
        setMessage({
          type: "success",
          header: "Success",
          body: `Successfully added ${productDetail[0].product.product_name} to the basket.`,
        });
      }
    };
    
    const closeMessage = () => {
      setMessage(null);
    };
    
  
    const handleBuy = () => {
      if (selectedSize !== undefined && selectedOption !== undefined) {
        const defaultProduct: ITransactionProduct = {
          id: productDetail[0].product.id,
          img_product: productDetail[0].images.img_1,
          product_name: productDetail[0].product.product_name,
          discount_price: productDetail[0].product.product_price,
          product_price: productDetail[0].product.product_price,
          count,
          size_id: selectedSize,
          ice_hot: selectedOption,
          delivery_id: undefined,
          payment_id: undefined,
        };
        dispatch(checkoutAction.checkoutProduct(defaultProduct));
      }
      navigate("/checkout");
    };
  
    return {
      imagesArray,
      currentImage,
      count,
      message,
      productDetail,
      selectedSize,
      selectedOption,
      setMessage,
      closeMessage,
      handleImageClick,
      handleIncrement,
      handleDecrement,
      handleSizeChange,
      handleOptionChange,
      handleBasketClick,
      handleBuy,
    };
  };