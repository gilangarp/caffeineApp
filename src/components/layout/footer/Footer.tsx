import { BodyFooter } from "./BodyFooter";
import { HeaderFooter } from "./HeaderFooter";
import { SocialMediaFooter } from "./SocialMediaFooter";
import { Since } from "./Since";

export const Footer = () => {
  return (
    <div className=" grid md:grid-cols-3">
      <HeaderFooter />
      <BodyFooter />
      <SocialMediaFooter />
      <Since />
    </div>
  );
};
