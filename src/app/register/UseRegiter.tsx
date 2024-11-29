import { useEffect, useState } from "react";
import { UserInputActions } from "../../redux/slice/UserInputSlice";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";

export const UseRegiter = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { dataUser, isLoading ,error} = useStoreSelector((state) => state.register);

  const [form, setForm] = useState({
    username: "",
    user_email: "",
    user_pass: "",
  });

  useEffect(() => {}, [dispatch, dataUser]);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const passwordsMatch = form.user_pass === passwordCheck;
  
  useEffect(() => {
    if (form.user_pass) {
      setIsPasswordFilled(true);
    } else {
      setIsPasswordFilled(false);
    }
  }, [form.user_pass]);

  useEffect(() => {
    if (error) {
      setRegisterError("Registration failed. Please try again.");
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(UserInputActions.userInputThunk(form));
    navigate("/login");
  };

  return {
    handleSubmit,
    form,
    handleChange,
    passwordCheck,
    setPasswordCheck,
    passwordsMatch,
    isLoading,
    isPasswordFilled,
    registerError,
  };
};
