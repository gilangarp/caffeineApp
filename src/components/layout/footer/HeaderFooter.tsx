import logo from "../../../assets/icon/LogoSecondary.svg";

export const HeaderFooter = () => {
  return (
    <main className="py-5 gap-5 lg:gap-4 px-5 md:px-10 lg:pl-14 lg:pr-5">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="Logo Primary" className="h-8 w-auto" />
        <h1 className="font-sacramento text-xl">Caffeine</h1>
      </div>
      <h1 className="font-jakarta text-base text-[#4F5665">
        Coffee Shop is a store that sells some good meals, and especially
        coffee. We provide high quality beans
      </h1>
    </main>
  );
};
