interface DeliverySelectorProps {
  selectedDelivery: number | undefined;
  onDeliveryChange: (deliveryOption: number) => void;
}

export const DeliveryInput = ({
  onDeliveryChange,
  selectedDelivery,
}: DeliverySelectorProps) => {
  return (
    <main className="grid gap-3">
      <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">
        Delivery
      </h1>
      <div className="flex space-x-4">
        {["Dine In", "Door Delivery", "Pick Up"].map((option, index) => (
          <button
            key={index}
            onClick={() => onDeliveryChange(index + 1)}
            className={`text-lg py-2 w-full border border-solid text-lightgray hover:border-primary active:bg-darkgray focus:border-primary focus:text-black ${
              selectedDelivery === index + 1
                ? "bg-transparent border-primary text-black"
                : "bg-transparent border-[#E8E8E8]"
            }`}>
            {option}
          </button>
        ))}
      </div>
    </main>
  );
};
