import { RegisterFooter } from "./RegisterFooter";
import { RegisterHeader } from "./RegisterHeader";
import imageRegister from "../../assets/images/8d0f31b42b08e11e97f7bc8c06c07705.jpeg";

export const RegisterPage = () => {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[30%,70%] lg:grid-rows-1">
        <div className="hidden md:block bg-black">
          <img
            className="w-full h-full object-cover"
            src={imageRegister}
            alt=""
          />
        </div>
        <div className="py-2 px-10 md:px-14 lg:px-20 gap-5 grid content-center mt-32 md:mt-0">
          <RegisterHeader />
          <RegisterFooter />
        </div>
      </div>
    </main>
  );
};
