interface SizeSelectorProps {
  selectedSize: number | undefined;
  onSizeChange: (size: number) => void;
}

export const SizeInput = ({
  onSizeChange,
  selectedSize,
}: SizeSelectorProps) => {
  return (
    <main className="grid gap-3">
      <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">
        Choose Size
      </h1>
      <div className="flex space-x-4">
        {["Regular", "Medium", "Large"].map((size, index) => (
          <button
            key={index}
            onClick={() => onSizeChange(index + 1)}
            className={`text-lg py-2 w-full border border-solid text-lightgray hover:border-primary active:bg-darkgray focus:border-primary focus:text-black ${
              selectedSize === index + 1
                ? "bg-transparent border-primary text-black"
                : "bg-transparent border-[#E8E8E8]"
            }`}>
            {size}
          </button>
        ))}
      </div>
    </main>
  );
};
