import { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInputHeader = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="">
      <section className="InputSearch text-white flex flex-col gap-2">
        <input
          className="rounded-lg text-neutral-400 focus:outline-none text-sm font-jakarta py-2 px-3"
          id="product_name"
          name="product_name"
          placeholder="Search Your Product"
          autoComplete="off"
          onChange={onChange}
          value={value}
        />
      </section>
    </div>
  );
};
