import { AddressInput } from "../../components/input/AddressInput";
import { DeliveryInput } from "../../components/input/DeliveryInput";
import { EmailInput } from "../../components/input/EmailInput";
import { FullNameInput } from "../../components/input/FullNameInput";
import { PaymentInput } from "../../components/input/PaymentInput";
import { UseCheckoutTotal } from "./UseCheckoutTotal";

export const PaymentInfo = () => {
  const {
    email,
    fullName,
    address,
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
          onChange={handleEmailChange} // Pass handler here
          name="user_email"
          value={email} // Bind value to email state
          placeholder="Enter Your Email"
        />
        <FullNameInput
          onChange={handleFullNameChange} // Pass handler here
          name="user_fullname"
          value={fullName} // Bind value to fullName state
          placeholder="Enter Your Full Name"
        />
        <AddressInput
          onChange={handleAddressChange} // Pass handler here
          value={address} // Bind value to address state
          placeholder="Enter Your Address"
        />
        <DeliveryInput
          onDeliveryChange={handleDeliveryChange} // Pass handler here
          selectedDelivery={selected_delivery} // Use selected_delivery from Redux
        />
        <PaymentInput
          onPaymentChange={handlePaymentChange} // Pass handler here
          selectedPayment={selected_payment} // Use selected_payment from Redux
        />
      </div>
    </div>
  );
};
