import { ChangeEvent, useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { filterActions } from "../../redux/slice/ProductSlice";
import { productThunk } from "../../redux/actions/ProductAction";
import { IFilters } from "../../redux/types/ProductType";
import { useLocation, useNavigate } from "react-router-dom";

export const UseProductFilter = () => {
  const dispatch = useStoreDispatch();
  const { filter } = useStoreSelector((state) => state.product);
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onApply = () => {
    const defaultFilter: IFilters = {
      category: "",
      sortBy: "",
      max_price: "",
      min_price: "",
      searchText: "",
    };
    const appliedFilters = filter || defaultFilter;

    dispatch(
      productThunk({ filters: appliedFilters, currentPage: 1, productsPage: 6 })
    );

    const params = new URLSearchParams();
    if (appliedFilters.category)
      params.set("category", appliedFilters.category);
    if (appliedFilters.sortBy) params.set("sortBy", appliedFilters.sortBy);
    if (appliedFilters.min_price)
      params.set("min_price", appliedFilters.min_price);
    if (appliedFilters.max_price)
      params.set("max_price", appliedFilters.max_price);
    if (appliedFilters.searchText)
      params.set("searchText", appliedFilters.searchText);

    navigate(`/product?${params.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersFromURL: IFilters = {
      category: searchParams.get("category") || "",
      sortBy: searchParams.get("sortBy") || "",
      max_price: searchParams.get("max_price") || "",
      min_price: searchParams.get("min_price") || "",
      searchText: searchParams.get("searchText") || "",
    };
    dispatch(filterActions.setFilter(filtersFromURL));
  }, [location.search, dispatch]);

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
    navigate("/product");
  };

  const categories = ["Coffee", "Non Coffee", "Foods", "Add-On"];
  const sortOptions = [
    "cheapest",
    "priciest",
    "a-z",
    "z-a",
    "latest",
    "longest",
  ];

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
