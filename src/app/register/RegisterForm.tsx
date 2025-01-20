import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInputCheck } from "../../components/input/PasswordInputCheck";
import { UseRegiter } from "./UseRegiter";

export const RegisterForm = () => {
  const { handleSubmit, form, handleChange, isLoading, error } = UseRegiter();
  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <h1 className="font-semibold text-xl text-[#8E6447]">Register</h1>
      <div className="grid gap-3">
        <EmailInput
          name="user_email"
          onChange={handleChange}
          placeholder="Enter Your Email"
          value={form.user_email}
        />
      </div>

      <div className="grid gap-3">
        <PasswordInputCheck
          onChange={handleChange}
          value={form.user_pass}
          error={error || ""}
          placeholder="Enter Your password"
        />
      </div>

      <button
        type="submit"
        className={`bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="loader-spinner"></span> Registering...
          </span>
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};
