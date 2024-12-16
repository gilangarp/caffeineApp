interface DeliverySelectorProps {
  selectedDelivery: number | undefined;
  onDeliveryChange: (deliveryOption: number) => void;
}

export const DeliveryInput = ({
  onDeliveryChange,
  selectedDelivery,
}: DeliverySelectorProps) => {
  const deliveryOptions = ["Dine In", "Door Delivery", "Pick Up"];

  return (
    <main className="grid gap-3 h-fit">
      <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">
        Delivery
      </h1>
      {/* Dropdown for mobile */}
      <div className="block md:hidden">
        <select
          value={selectedDelivery || ""}
          onChange={(e) => onDeliveryChange(Number(e.target.value))}
          className="text-lg py-2 px-3 w-full border border-solid text-text border-[#E8E8E8] focus:border-primary focus:ring-primary"
        >
          <option value="" disabled>
            Select delivery option
          </option>
          {deliveryOptions.map((option, index) => (
            <option key={index} value={index + 1}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons for desktop */}
      <div className="hidden md:flex space-x-4">
        {deliveryOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onDeliveryChange(index + 1)}
            className={`text-lg h-fit py-2 w-full border border-solid text-lightgray hover:border-primary active:bg-darkgray focus:border-primary focus:text-black ${
              selectedDelivery === index + 1
                ? "bg-transparent border-primary text-black"
                : "bg-transparent border-[#E8E8E8]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </main>
  );
};
