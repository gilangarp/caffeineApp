import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { profileSettingActions } from "../../redux/slice/ProfileSettingSlice";

export const UseProfileDetail = () => {
  const dispatch = useStoreDispatch();
  const { isLoading } = useStoreSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    profile: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const authState = useStoreSelector((state) => state.auth);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData((prevData) => ({
          ...prevData,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authState.id) {
      const formDataToSend = {
        ...formData,
        id: authState.id,
      };
      dispatch(profileSettingActions.profileSettingThunk(formDataToSend));
    }
  };
  

  return {
    imagePreview,
    onSubmitHandler,
    handleButtonClick,
    fileInputRef,
    onSelectImage,
    isLoading,
  };
};
