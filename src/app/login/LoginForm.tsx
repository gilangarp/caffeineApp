import { UseLogin } from "./UseLogin";
import { EmailInput } from "../../components/input/EmailInput";
import { PasswordInput } from "../../components/input/PasswordInput";

export const LoginForm = () => {
  const { login, isLoading, form, onChangeHandler } = UseLogin();
  return (
    <form className="grid gap-6" onSubmit={login}>
      <h1 className="font-semibold text-xl text-[#8E6447]">Login</h1>
      <p className="font-normal text-base text-text">
        Fill out the form correctly
      </p>

      {/* email */}
      <div className="grid gap-3">
        <EmailInput
          onChange={onChangeHandler}
          name="user_email"
          value={form.user_email}
          placeholder="Enter your email"
        />
      </div>

      {/* password */}
      <div className="grid gap-3">
        <PasswordInput
          onChange={onChangeHandler}
          value={form.user_pass}
          placeholder="Enter Your Password"
        />
      </div>

      {/* button login */}
      <button
        type="submit"
        className={`bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="loader-spinner"></span> Login...
          </span>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};
