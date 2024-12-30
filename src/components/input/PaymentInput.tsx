interface PaymentSelectorProps {
  selectedPayment: string | undefined;
  onPaymentChange: (paymentOption: string) => void;
}

export const PaymentInput = ({
  onPaymentChange,
  selectedPayment,
}: PaymentSelectorProps) => {
  const paymentOptions = ["Cash", "Debit", "Credit Card"];

  return (
    <main className="grid gap-3 h-fit">
      <h1 className="font-semibold font-jakarta text-base text-[#0B132A]">
        Payment
      </h1>

      {/* Dropdown for mobile */}
      <div className="block md:hidden">
        <select
          value={selectedPayment || ""}
          onChange={(e) => onPaymentChange(e.target.value)}
          className="text-lg py-2 px-3 w-full border border-solid text-text border-[#E8E8E8] focus:border-primary focus:ring-primary"
        >
          <option value="" disabled>
            Select payment option
          </option>
          {paymentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons for desktop */}
      <div className="hidden md:flex space-x-4">
        {paymentOptions.map((option) => (
          <button
            key={option}
            onClick={() => onPaymentChange(option)}
            className={`text-lg h-fit py-2 w-full border border-solid text-lightgray hover:border-primary active:bg-darkgray focus:border-primary focus:text-black ${
              selectedPayment === option
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
