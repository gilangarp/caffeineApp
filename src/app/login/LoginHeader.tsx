import logo from "../../assets/icon/LogoSecondary.svg";
import { LoginForm } from "./LoginForm";

export const LoginHeader = () => {
  return (
    <div className="grid border md:border-none p-4 gap-12">
      <div className="flex items-center gap-2">
        <img className="w-8 h-auto " src={logo} alt="..." />
        <h2 className="font-normal text-xl text-[#8E6447]">Coffee Shop</h2>
      </div>
      <LoginForm />
    </div>
  );
};
