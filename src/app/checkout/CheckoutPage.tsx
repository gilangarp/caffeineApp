import { CheckoutOrder } from "./CheckoutOrder";
import { PaymentInfo } from "./PaymentInfo";

export const CheckoutPage = () => {
  return (
    <div className="px-5 pt-3 md:px-10 lg:px-14 grid gap-5">
      <CheckoutOrder />
      <PaymentInfo />
      <div id="snap-container"></div>
    </div>
  );
};
