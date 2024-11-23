import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {/* Form Login */}
        <LoginForm />
      </div>
    </div>
  );
};
