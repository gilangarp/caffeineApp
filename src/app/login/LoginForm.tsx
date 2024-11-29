import { Input } from "../../components/input/Input";
import { UseLogin } from "./UseLogin";
import MailIcon from "@mui/icons-material/Mail";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const LoginForm = () => {
  const {
    login,
    isLoading,
    form,
    onChangeHandler,
    showPassword,
    togglePasswordVisibility,
  } = UseLogin();
  return (
    <form className="grid gap-6" onSubmit={login}>
      <h1 className="font-semibold text-xl text-[#8E6447]">Login</h1>
      <p className="font-normal text-base text-text">
        Fill out the form correctly
      </p>

      {/* email */}
      <div className="grid gap-3">
        <label className="font-semibold text-base text-[#0B132A]">Email</label>
        <div className="border rounded-lg flex items-center py-2 px-1 gap-2">
          <div className="w-6 h-6 text-text">
            <MailIcon />
          </div>
          <Input
            input={{
              type: "text",
              name: "user_email",
              placeholder: "Enter your email",
              autocomplete: "email",
              value: form.user_email,
              onChange: onChangeHandler,
            }}
          />
        </div>
      </div>

      {/* password */}
      <div className="grid gap-3">
        <label className="font-semibold text-base text-[#0B132A]">
          Password
        </label>
        <div className="border rounded-lg flex justify-between items-center py-2 px-1">
          <div className="flex gap-2">
            <div className="w-6 h-6 text-text">
              <PasswordIcon />
            </div>
            <Input
              input={{
                type: showPassword ? "text" : "password",
                name: "user_pass",
                placeholder: "Enter Your Password",
                autocomplete: "off",
                value: form.user_pass,
                onChange: onChangeHandler,
              }}
            />
          </div>
          <div
            className="w-6 h-6 text-text cursor-pointer"
            onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
      </div>

      {/* button login */}
      <button
        className="bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg"
        type="submit"
        disabled={isLoading}>
        {isLoading ? "loading..." : "Login"}
      </button>
    </form>
  );
};
