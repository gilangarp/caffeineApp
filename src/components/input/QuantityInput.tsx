interface QuantitySelectorProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const QuantityInput = ({
  count,
  onDecrement,
  onIncrement,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center border w-fit rounded-md">
      <button
        onClick={onDecrement}
        className="text-lg text-black border w-8 h-8 grid place-content-center border-primary rounded-md">
        -
      </button>
      <span className="text-lg text-black px-5">{count}</span>
      <button
        onClick={onIncrement}
        className="text-lg text-black border w-8 h-8 grid place-content-center border-primary rounded-md">
        +
      </button>
    </div>
  );
};
