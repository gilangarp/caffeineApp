import { ChangeEvent } from "react";

interface SortInputProps {
    sortBy: string;
    selectedSort: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

export const SortInput = ({ sortBy,selectedSort, onChange }: SortInputProps) => {
  return (
    <div className="gap-4 flex flex-row">
    <input
      className="w-6 h-6 rounded-lg"
      type="checkbox"
      id={sortBy}
      name={sortBy}
      value={sortBy}
      checked={selectedSort === sortBy}
      onChange={onChange}
    />
    <label>{sortBy}</label>
  </div>
  );
};
