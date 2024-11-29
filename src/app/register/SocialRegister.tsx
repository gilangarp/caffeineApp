import googleIcon from "../../assets/images/flat-color-icons_google.png";
import facebookIcon from "../../assets/images/bx_bxl-facebook-circle.png";

export const SocialRegister = () => {
  return (
    <div className="flex w-full gap-1">
      <button className="shadow-md flex items-center justify-center w-full bg-transparent cursor-pointer text-lg font-medium bg-white">
        <img className="w-5 h-5" src={facebookIcon} alt="Facebook" />
        Facebook
      </button>

      <button className="shadow-md flex items-center justify-center w-full bg-transparent cursor-pointer text-lg font-medium bg-white">
        <img className="w-5 h-5" src={googleIcon} alt="Google" />
        Google
      </button>
    </div>
  );
};
