import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../../redux/hook";
import { authAction } from "../../../redux/slice/AuthSlice";

export const UseNavbar = () => {
  const location = useLocation();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const dispatch = useStoreDispatch();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    navigate('/product', { state: { searchQuery: searchValue } });

    setSearchValue('');
    setShowSearchInput(false);
  };

  const { token } = useStoreSelector((state) => state.auth);

  const isLoggedIn = !!token;

  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    dispatch(authAction.logout());
    navigate("/login");  
  };

  return { location,handleSearchClick ,showSearchInput,searchValue,handleSearchSubmit, isLoggedIn,handleSearchChange, logout , isOpen,setIsOpen };
};
