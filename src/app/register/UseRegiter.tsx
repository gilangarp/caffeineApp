import { useEffect, useState } from "react";
import { UserInputActions } from "../../redux/slice/UserInputSlice";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

export const UseRegiter = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { isLoading, error, success } = useStoreSelector(
    (state) => state.register
  );

  const [form, setForm] = useState({
    user_email: "",
    user_pass: "",
  });

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(UserInputActions.resetState());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(UserInputActions.userInputThunk(form));
  };

  return {
    handleSubmit,
    form,
    handleChange,
    isLoading,
    error,
  };
};
