import { Input } from "../../components/input/Input";
import { UseLogin } from "./UseLogin";
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const LoginForm = () => {
  const { login, errorMessage, form, onChangeHandler, showPassword, togglePasswordVisibility} = UseLogin();
  return (
    <div>
      <form onSubmit={login} className="flex flex-col gap-4">
        {/* email */}
        <div className="grid gap-3">
          <label className="font-semibold text-base text-[#0B132A]">
            Email
          </label>
          <div className="border rounded-lg flex items-center py-2 px-1 gap-2">
            <div className="w-6 h-6 text-text">
              <MailIcon/>
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
        <div className="grid gap-3">
          <label className="font-semibold text-base text-[#0B132A]">
            Password
          </label>
          <div className="border rounded-lg flex justify-between items-center py-2 px-1">
            <div className="flex gap-2">
              <div className="w-6 h-6 text-text">
                <PasswordIcon/>
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
              {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
            </div>
          </div>
        </div>
        <button type="submit" className="bg-primary text-white py-2 rounded-md">
          Login
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center mt-2">{errorMessage}</p>
      )}
    </div>
  );
};
