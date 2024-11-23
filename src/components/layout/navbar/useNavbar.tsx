import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../../redux/hook";
import { authAction } from "../../../redux/reducers/AuthReducer";

export const UseNavbar = () => {
  const location = useLocation();

  const dispatch = useStoreDispatch();
  const navigate = useNavigate();


  const { token } = useStoreSelector((state) => state.auth);

  const isLoggedIn = !!token;

  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    dispatch(authAction.logout());
    navigate("/");  
  };

  return { location, isLoggedIn, logout , isOpen,setIsOpen };
};
