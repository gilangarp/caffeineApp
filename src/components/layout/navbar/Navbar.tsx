import { Link } from "react-router-dom";
import logo from "../../../assets/icon/LogoPrimary.svg";
import { UseNavbar } from "./useNavbar";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputHeader } from "../../input/SearchInputHeader";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
  } = UseNavbar();

  return (
    <div className="bg-[#0B0909] z-50 text-white flex justify-between py-3 px-5 md:px-10 lg:px-20 shadow-md w-full fixed top-0 left-0 lg:flex lg:justify-between lg:items-center">
      <div className=" flex justify-between gap-10">
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

      <div>
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-start top-12 px-5 md:px-10 lg:px-20 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}>
          <div className="flex flex-col items-center gap-4 text-white">
            {isLoggedIn ? (
              <div className="flex flex-col items-center gap-3">
                <button
                  className={`${showSearchInput ? "hidden" : ""} `}
                  onClick={handleSearchClick}>
                  <SearchIcon />
                </button>
                {showSearchInput && (
                  <form onSubmit={handleSearchSubmit}>
                    <SearchInputHeader
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" style={{ display: "none" }} />{" "}
                  </form>
                )}
                <Link to="/checkout">
                  <ShoppingCartOutlinedIcon />
                </Link>
                <button
                  onClick={logout}
                  className="text-sm bg-primary font-jakarta text-black py-2 px-3 rounded-md"
                  aria-label="Logout">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <Link to="/l" className="text-sm">
                  .
                </Link>
                <Link to="/k" className="text-sm">
                  .
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-jakarta text-white border border-white py-2 px-3 rounded-md">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-jakarta bg-primary text-black py-2 px-3 rounded-md">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <button
                className={`${showSearchInput ? "hidden" : ""} `}
                onClick={handleSearchClick}>
                <SearchIcon />
              </button>
              {showSearchInput && (
                <form onSubmit={handleSearchSubmit}>
                  <SearchInputHeader
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" style={{ display: "none" }} />{" "}
                </form>
              )}
              <Link to="/checkout">
                <ShoppingCartOutlinedIcon />
              </Link>
              <button
                onClick={logout}
                className="text-sm bg-primary font-jakarta text-black py-2 px-3 rounded-md"
                aria-label="Logout">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                className={`${showSearchInput ? "hidden" : ""} `}
                onClick={handleSearchClick}>
                <SearchIcon />
              </button>
              {showSearchInput && (
                <form onSubmit={handleSearchSubmit}>
                  <SearchInputHeader
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <button type="submit" style={{ display: "none" }} />{" "}
                </form>
              )}
              <Link to="/checkout">
                <ShoppingCartOutlinedIcon />
              </Link>
              <Link
                to="/login"
                className="text-sm font-jakarta text-white border border-white py-2 px-3 rounded-md">
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-sm font-jakarta bg-primary text-black py-2 px-3 rounded-md">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
