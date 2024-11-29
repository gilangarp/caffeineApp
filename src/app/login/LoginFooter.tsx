import { Link } from "react-router-dom";
import { SocialLogin } from "./SocialLogin";

export const LoginFooter = () => {
  return (
    <div className="grid grid-cols-1 items-center w-full justify-center gap-1 p-4">
      <div className="flex justify-center items-center gap-2">
        <p className="font-medium text-xs text-nowrap">Not Have An Account?</p>
        <Link to="/register">
          <button className="font-medium text-xs text-primary">Register</button>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <p className="">OR</p>
      </div>

      <SocialLogin />
    </div>
  );
};
