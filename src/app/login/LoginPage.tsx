import { LoginFooter } from "./LoginFooter";
import { LoginHeader } from "./LoginHeader";
import imageLogin from "../../assets/images/login.png"

export const LoginPage = () => {
  return (
    <main>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[30%,70%] lg:grid-rows-1">
        <div className="hidden md:block bg-black relative">
          <img className="w-full h-full object-cover" src={imageLogin} alt="" />
        </div>
        <div className="py-2 px-10 md:px-14 lg:px-20 gap-5 grid content-center mt-32 md:mt-0">
          <LoginHeader />
          <LoginFooter />
        </div>
      </div>
    </main>
  );
};
