import { useNavigate } from "react-router-dom";
import { useStoreSelector } from "../../hooks/useStore";
import { useCallback } from "react";

export const UseCheckOutOrder = () => {
  const { checkout } = useStoreSelector((state) => state.checkout);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/product");
  }, [navigate]);

  const orderTotal = checkout.reduce((sum, product) => {
    const price: number = product.discount_price || product.product_price || 0;
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
