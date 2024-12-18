import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { profileSettingActions } from "../../redux/slice/ProfileSettingSlice";

export const UseProfileDetail = () => {
  const dispatch = useStoreDispatch();
  const { isLoading } = useStoreSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    profile_image: null as File | null,
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
        const base64Image = reader.result as string;
        setImagePreview(base64Image);

        setFormData((prevData) => ({
          ...prevData,
          profile_image: file,
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
