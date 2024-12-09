import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useCallback, useEffect } from "react";
import { productDetailCardThunk } from "../../redux/actions/ProductAction";

export const UseCheckOutOrder = () => {
  const dispatch = useStoreDispatch();
  const { checkout, productInfo } = useStoreSelector((state) => state.checkout);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkout.length > 0) {
      checkout.forEach((item) => {
        if (item?.id) {
          dispatch(productDetailCardThunk({ id: item.id }));
        }
      });
    }
  }, [checkout, dispatch]);

  const handleClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const orderTotal = checkout.reduce((sum, product) => {
    const price: string | number =
      productInfo[0]?.discount_price || productInfo[0]?.product_price || 0;
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    return sum + numericPrice * (product.count || 0);
  }, 0);

  const deliveryFee = 0;
  const subTotal = orderTotal + deliveryFee;
  const tax = subTotal * 0.05;
  const total = tax + subTotal;

  return {
    checkout,
    handleClick,
    orderTotal,
    deliveryFee,
    subTotal,
    tax,
    total,
  };
};
