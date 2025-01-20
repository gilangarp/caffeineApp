import { ChangeEvent, useEffect, useState } from "react";
import { profileActions } from "../../redux/slice/ProfileSlice";
import { profileSettingActions } from "../../redux/slice/ProfileSettingSlice";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";

export const UseProfileSetting = () => {
  const dispatch = useStoreDispatch();
  const dataProfile = useStoreSelector((state) => state.profile.dataProfile);
  const authState = useStoreSelector((state) => state.auth);
  const { isLoading, errorMessage } = useStoreSelector(
    (state) => state.profileSetting
  );

  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    address: "",
    user_email: "",
    user_pass: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authState.id && authState.token) {
      try {
        const { full_name, phone_number, address, user_email, user_pass } =
          formData;

        if (full_name || phone_number || address) {
          const formDataToSend = {
            full_name,
            phone_number,
            address,
            id: authState.id,
            token: authState.token,
          };
          await dispatch(
            profileSettingActions.profileSettingThunk(formDataToSend)
          );
        }

        if (user_email || user_pass) {
          const formDataPasswordToSend = {
            user_email,
            user_pass,
            id: authState.id,
            token: authState.token,
          };
          await dispatch(
            profileSettingActions.userSettingThunk(formDataPasswordToSend)
          );
        }
        setFormData({
          full_name: "",
          phone_number: "",
          address: "",
          user_email: "",
          user_pass: "",
        });

        dispatch(
          profileActions.profileThunk({
            id: authState.id,
            token: authState.token,
          })
        );
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  useEffect(() => {
    if (authState.id && authState.token) {
      dispatch(
        profileActions.profileThunk({
          id: authState.id,
          token: authState.token,
        })
      );
    }
  }, [dispatch, authState.id, authState.token]);

  return {
    onSubmitHandler,
    dataProfile,
    formData,
    onChangeHandler,
    isLoading,
    errorMessage,
  };
};
