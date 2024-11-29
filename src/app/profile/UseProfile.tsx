import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { profileActions } from "../../redux/slice/ProfileSlice";

export const UseProfile = () => {
  const authState = useStoreSelector((state) => state.auth);
  const dispatch = useStoreDispatch();
  const dataProfile = useStoreSelector((state) => state.profile.dataProfile);

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

  return { dataProfile };
};
