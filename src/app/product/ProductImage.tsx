import bgImg from "../../assets/images/ProductImageBg.png";

export const ProductImage = () => {
  return (
    <div className=" w-full h-[200px] lg:h-[250px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <p className="text-center text-heading_mobile lg:text-heading_desktop w-full font-medium text-white lg:w-[880px]">
        We Provide Good Coffee and Healthy Meals
      </p>
    </div>
  );
};
