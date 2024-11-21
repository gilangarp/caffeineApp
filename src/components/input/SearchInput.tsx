import { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }:SearchInputProps) => (
  <section className="InputSearch text-white flex flex-col gap-2">
    <label className="text-lg">Search</label>
    <input
      className="rounded-lg p-2 text-neutral-400 focus:outline-none"
      id="product_name"
      name="product_name"
      placeholder="Search Your Product"
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  </section>
);