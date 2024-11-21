import { ChangeEvent, useState } from "react";
import { SearchInput } from "../../components/input/SearchInput";
import { CategoryInput } from "../../components/input/CategoryInput";
import { SortInput } from "../../components/input/SortInput";

export const ProductFilter = () => {
  const [filter, setFilter] = useState({
    category: "",
    sortBy: "",
    max_price: "",
    min_price: "",
    searchText: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // New state to handle modal visibility

  const onApply = () => {
    const defaultFilter = {
      category: "",
      sortBy: "",
      max_price: "",
      min_price: "",
      searchText: "",
    };

    const appliedFilters = filter || defaultFilter;

    console.log("Applied Filters: ", appliedFilters);

    // Here you would call your action to fetch data (for dummy data, we just log it)

    // Close the modal after applying the filter
    setIsModalOpen(false);
  };

  const onReset = () => {
    setFilter({
      category: "",
      sortBy: "",
      max_price: "",
      min_price: "",
      searchText: "",
    });

    // Close the modal after resetting the filter
    setIsModalOpen(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, searchText: e.target.value });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setFilter({ ...filter, category: name });
  };

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFilter({ ...filter, sortBy: name });
    }
  };

  const categories = [
    "specialty coffees",
    "gourmet snacks",
    "sweet indulgences",
    "unique beverages",
  ];
  const sortOptions = ["cheap", "priciest", "a-z", "z-a"];

  return (
    <div className="w-full">
      {/* Trigger button for mobile */}
      <button
        className="block lg:hidden bg-[#FF8906] w-full py-2 rounded-lg text-black font-jakarta"
        onClick={() => setIsModalOpen(true)}>
        Open Filters Products
      </button>

      {/* Modal (Pop-up) on mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-8 rounded-lg w-full max-w-lg">
            <div className="filter-menu">
              <section className="filter flex flex-row justify-between text-white w-full">
                <h4 className="text-2xl">Filter</h4>
                <button
                  className="text-lg"
                  onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
              </section>

              <SearchInput
                value={filter?.searchText || ""}
                onChange={handleSearchChange}
              />

              <section className="category text-white grid gap-4">
                <p className="text-xl text-white">Category</p>
                <form className="flex flex-col gap-4">
                  {categories.map((category) => (
                    <CategoryInput
                      key={category}
                      category={category}
                      selectedCategory={filter?.category || ""}
                      onChange={handleCategoryChange}
                    />
                  ))}
                </form>

                <p className="text-xl text-white">Sort By</p>
                <form className="flex flex-col gap-4">
                  {sortOptions.map((sortBy) => (
                    <SortInput
                      key={sortBy}
                      sortBy={sortBy}
                      selectedSort={filter?.sortBy || ""}
                      onChange={handleSortChange}
                    />
                  ))}
                </form>
              </section>

              <div className="flex items-center justify-between gap-5 pt-2 ">
                <button
                  onClick={onApply}
                  className="bg-[#FF8906] w-full h-8 rounded-lg">
                  Apply Filter
                </button>
                <button
                  onClick={onReset}
                  className="w-full h-8 rounded-lg text-black bg-gray-300">
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Non-mobile filter menu */}
      <div className="hidden lg:block">
        <div className="filter-menu bg-black rounded-lg flex flex-col p-8 gap-4 h-max">
          <section className="filter flex flex-row justify-between text-white w-full">
            <h4 className="text-2xl">Filter</h4>
            <button className="text-lg" onClick={onReset}>
              Reset Filter
            </button>
          </section>

          <SearchInput
            value={filter?.searchText || ""}
            onChange={handleSearchChange}
          />

          <section className="category text-white grid gap-4">
            <p className="text-xl text-white">Category</p>
            <form className="flex flex-col gap-4">
              {categories.map((category) => (
                <CategoryInput
                  key={category}
                  category={category}
                  selectedCategory={filter?.category || ""}
                  onChange={handleCategoryChange}
                />
              ))}
            </form>

            <p className="text-xl text-white">Sort By</p>
            <form className="flex flex-col gap-4">
              {sortOptions.map((sortBy) => (
                <SortInput
                  key={sortBy}
                  sortBy={sortBy}
                  selectedSort={filter?.sortBy || ""}
                  onChange={handleSortChange}
                />
              ))}
            </form>
          </section>

          <section>
            <button
              onClick={onApply}
              className="bg-[#FF8906] w-full h-8 rounded-lg">
              Apply Filter
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
