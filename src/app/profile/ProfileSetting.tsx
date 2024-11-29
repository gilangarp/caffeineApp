import { Input } from "../../components/input/Input";
import { UseProfileSetting } from "./UseProfileSetting";

export const ProfileSetting = () => {
    const {onSubmitHandler,dataProfile,formData,onChangeHandler,isLoading} = UseProfileSetting();
  return (
    <div className="profile-update-form  basis-4/5 border-2 rounded-lg font-medium">
      <form
        className="flex flex-col gap-4 w-full p-8"
        onSubmit={onSubmitHandler}>
        <div className="item-form gap-2 ">
          <label>Full Name</label>
          <div className="border-2 w-full rounded-lg py-2 pl-3 text-center">
            <Input
              input={{
                type: "text",
                name: "full_name",
                autocomplete: "name",
                placeholder:
                  dataProfile.length > 0
                    ? `${dataProfile[0].full_name || "Enter Your Name"}`
                    : "Enter Your Name",
                value: formData.full_name,
                onChange: onChangeHandler,
              }}
            />
          </div>
        </div>

        <div className="item-form gap-4">
          <label>Email</label>
          <div className="email border-2 w-full rounded-lg py-2 pl-3 text-center">
            <Input
              input={{
                type: "email",
                name: "user_email",
                placeholder:
                  dataProfile.length > 0
                    ? `${dataProfile[0].user_email || "Enter Your Email"}`
                    : "Enter Your Email",
                autocomplete: "email",
                value: formData.user_email,
                onChange: onChangeHandler,
              }}
            />
          </div>
        </div>

        <div className="item-form gap-4">
          <label>Phone</label>
          <div className="email border-2 w-full rounded-lg py-2 pl-3 text-center">
            <Input
              input={{
                type: "text",
                name: "user_phone",
                placeholder:
                  dataProfile.length > 0
                    ? `${dataProfile[0].user_phone || "Enter Your Phone"}`
                    : "Enter Your Phone",
                autocomplete: "phone",
                value: formData.user_phone,
                onChange: onChangeHandler,
              }}
            />
          </div>
        </div>

        {/*  <div className="item-form gap-4">
          <label>Password</label>
          <div className="email border-2 w-full rounded-lg py-2 pl-3 text-center">
            <Input
              input={{
                type: "password",
                name: "user_pass",
                placeholder: "**********",
                autocomplete: "password",
                value: formData.user_pass,
                onChange: onChangeHandler,
              }}
            />
          </div>
        </div> */}

        <div className="item-form gap-4">
          <label>Address</label>
          <div className="email border-2 w-full rounded-lg py-2 pl-3 text-center">
            <Input
              input={{
                type: "text",
                name: "address",
                placeholder:
                  dataProfile.length > 0
                    ? `${dataProfile[0].address || "Enter Your Address"} `
                    : "Enter Your Address",
                autocomplete: "adress",
                value: formData.address,
                onChange: onChangeHandler,
              }}
            />
          </div>
        </div>

        <button
          className="item h-10 w-full rounded-lg bg-primary"
          type="submit"
          disabled={isLoading}>
          {isLoading ? "Submit..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
