import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { authAction } from "../../redux/slice/AuthSlice";

export const UseLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState<{ user_email: string; user_pass: string }>({ user_email: "", user_pass: "",});
  const { token, isLoading, isRejected, errorMessage } = useStoreSelector( (state) => state.auth);

  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { loginThunk ,clearErrorMessage } = authAction;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearErrorMessage()); 
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginThunk(form));
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  useEffect(() => {
    if (isRejected && errorMessage) {
      console.error('Login error:', errorMessage); 
    }
  }, [isRejected, errorMessage]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    errorMessage,
    login,
    form,
    onChangeHandler,
    showPassword,
    togglePasswordVisibility,
    isLoading,
  };
};
