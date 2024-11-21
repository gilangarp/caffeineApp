import { ChangeEvent } from "react";

interface CategoryInputProps  {
    category: string;
    selectedCategory: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

export const CategoryInput = ({ category,selectedCategory, onChange }: CategoryInputProps) => {

  return (
    <div className="gap-4 flex flex-row">
      <input
        className="w-6 h-6 rounded-lg bg-transparent"
        type="checkbox"
        id={category}
        name={category}
        value={category}
        checked={selectedCategory === category}
        onChange={onChange}
      />
      <label>{category}</label>
    </div>
  );
};
