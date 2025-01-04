import { useCallback, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { historyOrderActions } from "../../redux/slice/HistoryOrderSlice";

export const UseOrderHistory = () => {
  const dispatch = useStoreDispatch();
  const { history, isLoading, pagination } = useStoreSelector(
    (state) => state.historyOrder
  );
  const { id } = useStoreSelector((state) => state.auth);
  const [activeStatus, setActiveStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const historyPerPage = 2;

  const fetchOrderHistory = useCallback(
    (status: string) => {
      const params = {
        filters: { status },
        currentPage,
        historyPerPage,
        uuid: id || "",
      };
      dispatch(historyOrderActions.historyOrderThunk(params));
      setActiveStatus(status);
    },
    [dispatch, id, currentPage]
  );

  return {
    history,
    isLoading,
    pagination,
    currentPage,
    activeStatus,
    fetchOrderHistory,
    setCurrentPage,
  };
};
