import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

export const useStoreSelector = useSelector.withTypes<RootState>();
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
