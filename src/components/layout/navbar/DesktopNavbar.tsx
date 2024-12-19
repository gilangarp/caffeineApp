import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SearchInputHeader } from "../../input/SearchInputHeader";

interface DesktopNavbarProps {
  isLoggedIn: boolean;
  showSearchInput: boolean;
  handleSearchClick: () => void;
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  logout: () => void;
  cartItemCount: number;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  isLoggedIn,
  showSearchInput,
  handleSearchClick,
  handleSearchSubmit,
  handleSearchChange,
  searchValue,
  logout,
  cartItemCount
}) => {
  return (
    <div className="hidden lg:flex items-center gap-3">
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
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="text-sm bg-primary font-jakarta text-black py-2 px-3 rounded-md"
          aria-label="Logout">
          Logout
        </button>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
