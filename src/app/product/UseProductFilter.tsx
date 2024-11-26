import { ChangeEvent, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { filterActions } from "../../redux/slice/ProductSlice";
import { productThunk } from "../../redux/actions/ProductAction";
import { IFilters } from "../../redux/types/ProductType";

export const UseProductFilter = () => {
  const dispatch = useStoreDispatch();
  const { filter } = useStoreSelector((state) => state.product);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onApply = () => {
    const defaultFilter: IFilters = { category: "", sortBy: "", max_price: "", min_price: "", searchText: "" };
    const appliedFilters = filter || defaultFilter; 
    dispatch(productThunk({ filters: appliedFilters, currentPage: 1, productsPage: 6 }));
  };
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterTemp: IFilters = { ...filter, searchText: e.target.value };
    dispatch(filterActions.setFilter(filterTemp));
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const filterTemp: IFilters = { ...filter, category: name };
    dispatch(filterActions.setFilter(filterTemp));
  };

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      const filterTemp: IFilters = {
        ...filter,
        sortBy: name as IFilters["sortBy"],
      };
      dispatch(filterActions.setFilter(filterTemp));
    }
  };

  const onReset = () => {
    dispatch(filterActions.resetFilter());
  };

  const categories = ["Coffee", "Non Coffee", "Foods", "Add-On"];
  const sortOptions = [ "cheapest", "priciest", "a-z", "z-a", "latest", "longest",];
  
  return {
    isModalOpen,
    setIsModalOpen,
    filter,
    onApply,
    onReset,
    handleSearchChange,
    handleCategoryChange,
    handleSortChange,
    categories,
    sortOptions,
  };
};
