import mapsImage from "../../assets/images/Huge Global.png";

export default function StoreMap() {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr] items-center justify-center pl-5 pr-5 md:pl-5 md:pr-5 lg:pl-20 lg:pr-20 py-5 lg:py-10">
      <div className=" lg:pr-5 grid items-center justify-center gap-3 pb-9">
        <h1 className="text-heading_mobile lg:text-heading_desktop font-medium text-[#8E6447] text-center">
          Visit Our Store{" "}
          <span className="text-[#0B132A]">in the Spot on the Map Below</span>
        </h1>
        <div className="bg-primary w-16 h-2 m-auto"></div>
        <p className="font-normal text-base bg-center text-text text-center">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
      </div>

      <div className=" w-full h-fit">
        <img src={mapsImage} alt="Map" />
      </div>
    </div>
  );
}
