interface OrderFilterProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
}
export const OrderFilter = ({
  activeStatus,
  onStatusChange,
}: OrderFilterProps) => {
  const statuses = [
    { label: "On Progress", value: "1" },
    { label: "Sending Goods", value: "2" },
    { label: "Finish Order", value: "3" },
  ];

  return (
    <div className="hidden md:flex flex-row bg-gray-100 items-center p-2 bg-[#E8E8E899]">
      {statuses.map(({ label, value }) => (
        <button
          key={value}
          className={`py-2 px-4 ${
            activeStatus === value ? "bg-white" : "hover:bg-white"
          }`}
          onClick={() => onStatusChange(value)}>
          {label}
        </button>
      ))}
    </div>
  );
};
