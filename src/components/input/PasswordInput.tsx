import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Input } from "./Input";
import { useState } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const PasswordInput = ({
  value,
  onChange,
  placeholder = "Enter your password",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="grid gap-3">
      <h1 className="font-semibold text-base text-[#0B132A]">Password</h1>
      <div className="border rounded-lg font-jakarta flex items-center justify-center py-1 px-2 gap-2">
        <div className="w-6 h-auto text-text">
          <PasswordIcon />
        </div>
        <Input
          input={{
            type: showPassword ? "text" : "password",
            name: "user_pass",
            placeholder: placeholder,
            autocomplete: "off",
            value: value,
            onChange: onChange,
          }}
        />
        <div
          className="w-6 h-6 text-text cursor-pointer"
          onClick={togglePasswordVisibility}>
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
    </main>
  );
};
