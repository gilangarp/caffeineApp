import { AddressInput } from "../../components/input/AddressInput";
import { DeliveryInput } from "../../components/input/DeliveryInput";
import { EmailInput } from "../../components/input/EmailInput";
import { FullNameInput } from "../../components/input/FullNameInput";
import { PaymentInput } from "../../components/input/PaymentInput";
import { UseCheckoutTotal } from "./UseCheckoutTotal";

export const PaymentInfo = () => {
  const {
    user_address,
    user_email,
    user_fullname,
    handleEmailChange,
    handleFullNameChange,
    handleAddressChange,
    handleDeliveryChange,
    handlePaymentChange,
    selected_delivery,
    selected_payment,
  } = UseCheckoutTotal();

  return (
    <div className="grid gap-10 h-fit">
      <div>
        <h1 className="text-xl text-black font-jakarta ml-0">
          Payment Info & Delivery
        </h1>
      </div>
      <div className="w-full lg:w-3/6 grid gap-5">
        <EmailInput
          onChange={handleEmailChange}
          name="user_email"
          value={user_email}
          placeholder="Enter Your Email"
        />
        <FullNameInput
          onChange={handleFullNameChange}
          name="user_fullname"
          value={user_fullname}
          placeholder="Enter Your Full Name"
        />
        <AddressInput
          onChange={handleAddressChange}
          value={user_address}
          placeholder="Enter Your Address"
        />
        <DeliveryInput
          onDeliveryChange={handleDeliveryChange}
          selectedDelivery={selected_delivery}
        />
        <PaymentInput
          onPaymentChange={handlePaymentChange}
          selectedPayment={selected_payment}
        />
      </div>
    </div>
  );
};
