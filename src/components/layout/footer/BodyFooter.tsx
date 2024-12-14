import { Link } from "react-router-dom";

export const BodyFooter = () => {
  return (
    <main className="py-5 gap-5 lg:gap-4 px-5 md:px-10 lg:pl-14 lg:pr-5 grid grid-cols-2">
      <div className="grid gap-2">
        <h1 className="font-jakarta text-base text-[#0B132A] font-medium">
          Product
        </h1>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Our Product</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Pricing</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Locations</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Countries</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Blog</Link>
      </div>

      <div className="grid gap-2">
        <h1 className="font-jakarta text-base text-[#0B132A] font-medium">
          Product
        </h1>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Partner</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>FAQ</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>About Us</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Privacy Policy</Link>
        <Link className="text-sm font-jakarta font-normal text-[#4F5665] " to=''>Terms of Service</Link>        
      </div>
    </main>
  );
};
