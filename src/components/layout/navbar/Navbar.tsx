import { Link } from "react-router-dom";
import logo from "../../../assets/icon/LogoPrimary.svg";
import { UseNavbar } from "./useNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar = () => {
  const {
    isLoggedIn,
    location,
    logout,
    isOpen,
    setIsOpen,
    handleSearchChange,
    handleSearchClick,
    searchValue,
    showSearchInput,
    handleSearchSubmit,
    cartItemCount
  } = UseNavbar();

  return (
    <div className="bg-[#0B0909] z-50 text-white flex justify-between py-3 px-5 md:px-10 lg:px-20 shadow-md w-full fixed top-0 left-0">
      <div className="flex justify-between gap-10">
        <div className="flex gap-3">
          <img src={logo} alt="Logo Primary" className="h-5 w-auto" />
          <h1 className="font-sacramento text-xl">Caffeine</h1>
        </div>

        <div className="items-center gap-3 font-jakarta text-sm hidden lg:flex">
          <Link
            className={`${
              location.pathname === "/" ? "border-b border-primary" : ""
            }`}
            to="/">
            Home
          </Link>
          <Link
            className={`${
              location.pathname === "/product" ? "border-b border-primary" : ""
            }`}
            to="/product">
            Product
          </Link>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-8 top-2 cursor-pointer lg:hidden">
        {isOpen ? (
          <div className="w-6 h-6 text-white">
            <CloseIcon />
          </div>
        ) : (
          <div className="w-6 h-6 text-white">
            <MenuIcon />
          </div>
        )}
      </div>

      <MobileNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLoggedIn={isLoggedIn}
        showSearchInput={showSearchInput}
        handleSearchClick={handleSearchClick}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        logout={logout}
        cartItemCount={cartItemCount}
      />

      <DesktopNavbar
        isLoggedIn={isLoggedIn}
        showSearchInput={showSearchInput}
        handleSearchClick={handleSearchClick}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
        logout={logout}
        cartItemCount={cartItemCount}
      />
    </div>
  );
};
