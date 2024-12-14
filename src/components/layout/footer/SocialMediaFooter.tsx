import Facebook from "../../../assets/images/Facebook.svg";
import Twitter from "../../../assets/images/Twitter.svg";
import Instagram from "../../../assets/images/Instagram.svg";

export const SocialMediaFooter = () => {
  return (
    <main className="py-5 px-5 md:px-10 lg:pl-14 lg:pr-5 ">
      <h1 className="font-jakarta text-base text-[#0B132A] font-medium">Social Media</h1>
      <div className=" flex gap-3">
        <img className="bg-black rounded-full w-8 h-8" src={Facebook} alt="Facebook" />
        <img className="bg-black rounded-full w-8 h-8" src={Twitter} alt="Twitter" />
        <img className="bg-black rounded-full w-8 h-8" src={Instagram} alt="Instagram" />
      </div>
    </main>
  );
};
