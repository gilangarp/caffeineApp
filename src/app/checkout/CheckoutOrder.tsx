import { CheckoutHeader } from "./CheckoutHeader";
import CheckoutProductCard from "../../components/cards/CheckoutProductCard";
import { CheckoutTotal } from "./CheckoutTotal";
import { UseCheckOutOrder } from "./UseCheckOutOrder";

export const CheckoutOrder = () => {
  const {
    checkout,
    handleClick,
    orderTotal,
    deliveryFee,
    subTotal,
    tax,
    total,
  } = UseCheckOutOrder();
  return (
    <div className="grid gap-10">
      <div className="pt-10 lg:pt-16">
        <p className="text-header text-wrap text-heading_mobile lg:text-heading_desktop font-medium">
          Payment Details
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-[1fr,auto] lg:grid-rows-1 gap-5">
        <div className="flex flex-col gap-4">
          <CheckoutHeader onAddMenuClick={handleClick} />
          {checkout.map((products, index) => (
            <CheckoutProductCard
              key={products.id}
              product={products}
              deliveryOption={products.delivery_id || ""}
              productIndex={index}
            />
          ))}
        </div>
        <div>
          <CheckoutTotal
            order={orderTotal}
            delivery={deliveryFee}
            sub_Total={subTotal}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};
