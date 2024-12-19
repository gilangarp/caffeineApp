import { EmailInput } from "../../components/input/EmailInput";
import { AddressInput } from "../../components/input/AddressInput";
import { DeliveryInput } from "../../components/input/DeliveryInput";
import { FullNameInput } from "../../components/input/FullNameInput";

import { UseCheckoutTotal } from "./UseCheckoutTotal";

export const PaymentInfo = () => {
  const {
    email,
    fullName,
    address,
    selectedDelivery,
    handleEmailChange,
    handleFullNameChange,
    handleAddressChange,
    handleDeliveryChange,
    onSubmitHandler,
    dataProfile,
  } = UseCheckoutTotal();

  return (
    <div className="grid gap-10 h-fit">
      <div>
        <h1 className="text-xl text-black font-jakarta ml-0">
          Payment Info & Delivery
        </h1>
      </div>
      <form className="w-full lg:w-3/6 grid gap-5" onSubmit={onSubmitHandler}>
        <EmailInput
          onChange={handleEmailChange}
          name="user_email"
          value={email}
          placeholder={
            dataProfile.length > 0
              ? `${dataProfile[0].user_email || "Enter Your Email"}`
              : "Enter Your Email"
          }
        />
        <FullNameInput
          onChange={handleFullNameChange}
          name="user_fullname"
          value={fullName}
          placeholder={
            dataProfile.length > 0
              ? `${dataProfile[0].full_name || "Enter Your Full Name"}`
              : "Enter Your Full Name"
          }
        />
        <AddressInput
          onChange={handleAddressChange}
          value={address}
          placeholder={
            dataProfile.length > 0
              ? `${dataProfile[0].address || "Enter Your Address"}`
              : "Enter Your Address"
          }
        />
        <DeliveryInput
          onDeliveryChange={handleDeliveryChange}
          selectedDelivery={selectedDelivery}
        />
      </form>
    </div>
  );
};
