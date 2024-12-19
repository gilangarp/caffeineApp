import React, { useState } from "react";
import { Input } from "./Input";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export const PasswordInputCheck = ({
  onChange,
  value,
  error,
  placeholder,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = e.target.value;
    setPasswordCheck(confirmPassword);
    setPasswordsMatch(value === confirmPassword);
  };

  return (
    <main className="grid gap-3">
      {/* Input Password */}
      <div className="grid gap-3">
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
              onChange: (e) => {
                onChange(e);
                setIsPasswordFilled(e.target.value.length > 0);
              },
            }}
          />
          <div
            className="w-6 h-6 text-text cursor-pointer"
            onClick={togglePasswordVisibility}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
      </div>

      {/* Input Confirm Password */}
      {isPasswordFilled && (
        <div className="grid gap-3">
          <label className="font-semibold font-jakarta text-base text-[#0B132A]">
            Confirm Password
          </label>
          <div className="border rounded-lg flex justify-between items-center py-2 px-1">
            <Input
              input={{
                type: showPassword ? "text" : "password",
                name: "passwordCheck",
                placeholder: "Confirm your password",
                autocomplete: "off",
                value: passwordCheck,
                onChange: handlePasswordCheckChange,
              }}
            />
            <div
              className="w-6 h-6 text-text cursor-pointer"
              onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          {!passwordsMatch && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
};
