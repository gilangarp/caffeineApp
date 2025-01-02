import { CheckoutOrder } from "./CheckoutOrder";
import { PaymentInfo } from "./PaymentInfo";
import { UseCheckoutTotal } from "./UseCheckoutTotal";

export const CheckoutPage = () => {
  const { isSnapEmbed } = UseCheckoutTotal();
  return (
    <div className="px-5 pt-3 md:px-10 lg:px-14 grid gap-5">
      {!isSnapEmbed && (
        <>
          <CheckoutOrder />
          <PaymentInfo />
        </>
      )}

      <div id="snap-container"></div>
    </div>
  );
};
