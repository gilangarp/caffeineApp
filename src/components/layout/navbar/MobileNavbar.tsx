import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SearchInputHeader } from "../../input/SearchInputHeader";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
  showSearchInput: boolean;
  handleSearchClick: () => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  logout: () => void;
  cartItemCount: number;
};

export const MobileNavbar = ({
  isOpen,
  isLoggedIn,
  showSearchInput,
  handleSearchClick,
  handleSearchSubmit,
  handleSearchChange,
  searchValue,
  logout,
  cartItemCount,
}: MobileNavbarProps) => {
  return (
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
                <button type="submit" style={{ display: "none" }} />
              </form>
            )}
            <Link to="/checkout" className="relative">
              <ShoppingCartOutlinedIcon />
              {cartItemCount > 0 && (
                <sup className="text-white absolute top-0 left-6 text-[0.7rem]">
                  {cartItemCount}
                </sup>
              )}
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
  );
};
