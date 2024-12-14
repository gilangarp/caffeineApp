import { ChangeEvent, useEffect, useState } from "react";
import { profileActions } from "../../redux/slice/ProfileSlice";
import { profileSettingActions } from "../../redux/slice/ProfileSettingSlice";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";

export const UseProfileSetting = () => {
  const dispatch = useStoreDispatch();
  const dataProfile = useStoreSelector((state) => state.profile.dataProfile);
  const authState = useStoreSelector((state) => state.auth);
  const { isLoading } = useStoreSelector((state) => state.profileSetting);

  const [formData, setFormData] = useState({
    full_name: "",
    user_email: "",
    phone_number: "",
    address: "",
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

    try {
      if (authState.id && authState.token && authState.id) {
        const formDataToSend = {
          ...formData,
          id: authState.id,
        };

        await dispatch(profileSettingActions.profileSettingThunk(formDataToSend));

        setFormData({
          full_name: "",
          user_email: "",
          phone_number: "",
          address: "",
        });

        dispatch(
          profileActions.profileThunk({
            id: authState.id,
            token: authState.token,
          })
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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

  return {onSubmitHandler,dataProfile,formData,onChangeHandler,isLoading} 
};
