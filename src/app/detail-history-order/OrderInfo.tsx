interface OrderInfoProps {
  label: string;
  value: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export const OrderInfo = ({ label, value }: OrderInfoProps) => {
  return (
    <div className="flex-row flex justify-between border-b-2 py-3">
      <div className="flex flex-row gap-2 items-center">
        {/* {Icon && <Icon />} */}
        <h1 className="font-normal text-base">{label}</h1>
      </div>
      <div className="font-semibold text-base">{value}</div>
    </div>
  );
};
