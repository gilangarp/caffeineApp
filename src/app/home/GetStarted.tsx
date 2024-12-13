import heroImage from "../../assets/images/47fdff79cb40a5f1a62aef1f4cd64c3e.jpeg";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/button/PrimaryButton";

export const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };
  return (
    <section className="min-h-screen grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 font-jakarta">
      <article className="bg-black min-h-full flex flex-col justify-center pt-14 md:pt-16 md:py-5 gap-5 lg:gap-4 text-white px-5 md:px-10 lg:pl-14 lg:pr-5">
        <h1 className="text-2xl font-san lg:text-heading_desktop font-medium">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="text-base">
          We provide high-quality beans, good taste, and healthy meals made with
          love just for you. Start your day with us for a bigger smile!
        </p>
        <div>
          <PrimaryButton text="Get Started" onClick={handleClick} style="px-6 text-sm" />
        </div>
        <div className="flex gap-4 pb-4">
          <div className="gap-3 border-r border-gray-400 pr-3">
            <h2 className="text-2xl lg:text-5xl">90+</h2>
            <p className="text-sm lg:text-base">Staff</p>
          </div>
          <div className="gap-3 border-r border-gray-400 pr-3">
            <h2 className="text-2xl lg:text-5xl">30+</h2>
            <p className="text-sm lg:text-base">Stores</p>
          </div>
          <div className="gap-3 border-r border-gray-400 pr-3">
            <h2 className="text-2xl lg:text-5xl">800+</h2>
            <p className="text-sm lg:text-base">Customers</p>
          </div>
        </div>
      </article>

      <article className="h-full relative">
        <img
          className="w-full h-full object-cover absolute bg-center"
          src={heroImage}
          alt="A beautiful coffee setup with meals"
        />
      </article>
    </section>
  );
};
