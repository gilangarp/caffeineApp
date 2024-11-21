import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UseNavbar = () => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    const dummyToken = "dummy_token_value";
    localStorage.setItem("token", dummyToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return { location, isLoggedIn, login, logout , isOpen,setIsOpen };
};
