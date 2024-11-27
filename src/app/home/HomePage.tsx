import { AboutMe } from "./AboutMe";
import { Favorite } from "./Favorite";
import { GetStarted } from "./GetStarted";
import StoreMap from "./StoreMap";
import { Testimonial } from "./Testimonial";

export const HomePage = () => {
  return (
    <div>
      <GetStarted />
      <AboutMe />
      <Favorite />
      <StoreMap />
      <Testimonial />
    </div>
  );
};
/* 
className="h-screen w-full px-5 md:px-10 lg:px-20 pt-14 md:pt-16 lg:pt-20"
 */
