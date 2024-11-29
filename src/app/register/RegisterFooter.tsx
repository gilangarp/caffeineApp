import { Link } from "react-router-dom";
import { SocialRegister } from "./SocialRegister";

export const RegisterFooter = () => {
  return (
    <div className="grid grid-cols-1 items-center w-full justify-center gap-1 p-4">
      <div className="flex justify-center items-center gap-2">
        <p className="font-medium text-xs text-nowrap">
          Already have an account?
        </p>
        <Link to="/login" className="font-medium text-xs text-primary">
          Login
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <p className="">OR</p>
      </div>

      <SocialRegister />
    </div>
  );
};
