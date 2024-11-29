import logo from "../../assets/icon/LogoSecondary.svg";
import { RegisterForm } from "./RegisterForm";

export const RegisterHeader = () => {
  return (
    <main className="py-2 px-10 md:px-14 lg:px-20 gap-5 grid content-center mt-32 md:mt-0">
      <div className="grid border md:border-none p-4 gap-12">
        <div className="flex items-center gap-2">
          <img className="w-8 h-auto" src={logo} alt="..." />
          <h2 className="font-normal text-xl text-[#8E6447]">Coffee Shop</h2>
        </div>
      </div>
      <RegisterForm />
    </main>
  );
};
