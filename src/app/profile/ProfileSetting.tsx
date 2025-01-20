import { AddressInput } from "../../components/input/AddressInput";
import { EmailInput } from "../../components/input/EmailInput";
import { FullNameInput } from "../../components/input/FullNameInput";
import { PasswordInputCheck } from "../../components/input/PasswordInputCheck";
import { PhoneNumberInput } from "../../components/input/PhoneNumberInput";
import { UseProfileSetting } from "./UseProfileSetting";

export const ProfileSetting = () => {
  const {
    onSubmitHandler,
    dataProfile,
    formData,
    onChangeHandler,
    isLoading,
    errorMessage,
  } = UseProfileSetting();

  return (
    <div className="profile-update-form basis-4/5 border-2 rounded-lg font-medium">
      <form
        className="flex flex-col gap-4 w-full p-8"
        onSubmit={onSubmitHandler}
      >
        <div className="item-form gap-2">
          <FullNameInput
            onChange={onChangeHandler}
            name="full_name"
            placeholder={
              dataProfile.length > 0
                ? `${dataProfile[0].full_name || "Enter Your Name"}`
                : "Enter Your Name"
            }
            value={formData.full_name}
          />
        </div>

        <div className="item-form gap-4">
          <EmailInput
            onChange={onChangeHandler}
            name="user_email"
            placeholder={
              dataProfile.length > 0
                ? `${dataProfile[0].user_email || "Enter Your Email"}`
                : "Enter Your Email"
            }
            value={formData.user_email}
          />
        </div>

        <div className="item-form gap-4">
          <PhoneNumberInput
            name="phone_number"
            onChange={onChangeHandler}
            placeholder={
              dataProfile.length > 0
                ? `${dataProfile[0].phone_number || "Enter Your Phone"}`
                : "Enter Your Phone"
            }
            value={formData.phone_number}
          />
        </div>

        <div className="item-form gap-4">
          <PasswordInputCheck
            onChange={onChangeHandler}
            value={formData.user_pass}
            error=""
            placeholder="**********"
          />
        </div>

        <div className="item-form gap-4">
          <AddressInput
            onChange={onChangeHandler}
            placeholder={
              dataProfile.length > 0
                ? `${dataProfile[0].address || "Enter Your Address"}`
                : "Enter Your Address"
            }
            value={formData.address}
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          type="submit"
          className={`bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="loader-spinner"></span> Submit...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
