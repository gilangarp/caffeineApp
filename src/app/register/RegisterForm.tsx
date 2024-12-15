import { Input } from "../../components/input/Input";
import { UseRegiter } from "./UseRegiter";

export const RegisterForm = () => {
  const {
    handleSubmit,
    form,
    handleChange,
    passwordCheck,
    setPasswordCheck,
    passwordsMatch,
    isLoading,
    isPasswordFilled,
    error,
  } = UseRegiter();
  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <h1 className="font-semibold text-xl text-[#8E6447]">Register</h1>
      <p className="font-normal text-base">Fill out the form correctly</p>

      <div className="grid gap-3">
        <label className="font-semibold text-base text-[#0B132A]">Email</label>
        <div className="border rounded-lg flex items-center py-2 px-1 gap-2">
          <Input
            input={{
              type: "email",
              name: "user_email",
              placeholder: "Enter Your Email",
              autocomplete: "email",
              value: form.user_email,
              onChange: handleChange,
            }}
          />
        </div>
      </div>

      <div className="grid gap-3">
        <label className="font-semibold text-base text-[#0B132A]">
          Password
        </label>
        <div className="border rounded-lg flex justify-between items-center py-2 px-1">
          <Input
            input={{
              type: "password",
              name: "user_pass",
              placeholder: "Enter Your password",
              autocomplete: "password",
              value: form.user_pass,
              onChange: handleChange,
            }}
          />
        </div>
      </div>

      {isPasswordFilled && (
        <div className="grid gap-3">
          <label className="font-semibold text-base text-[#0B132A]">
            Confirm Password
          </label>
          <div className="border rounded-lg flex justify-between items-center py-2 px-1">
            <input
              type="password"
              name="passwordCheck"
              placeholder="Confirm Your password"
              autoComplete="password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              className="border-none outline-none w-full"
            />
          </div>
          {!passwordsMatch && (
            <p className="text-red-500 text-sm">Passwords do not match.</p>
          )}
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg"
        disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};
