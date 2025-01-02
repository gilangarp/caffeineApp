import { Link } from "react-router-dom";
import { IHistoryOrderBody } from "../../redux/types/TransactionType";
import { numberToRupiah } from "../../utils/NumberToRupiah";

interface OrderListProps {
  product: IHistoryOrderBody;
}

export const OrderItemCard = ({ product }: OrderListProps) => {
  return (
    <div className="grid w-full grid-cols-[1fr,1fr] md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-5 p-3 items-start border">
      <div className="w-full h-full grid items-center">
        <img
          className="w-full h-full md:w-[100px] md:h-[100px]"
          src={product.img_product}
          alt="Product"
        />
      </div>

      <div className="px-2 grid md:justify-center">
        <div className="text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
          {/* Icon here */}
          <p>No Order</p>
        </div>
        <div>
          <p className="font-bold text-base text-[#0B132A]">
            {product.order_number}
          </p>
          <Link
            to={`/order/${product.id}`}
            className="underline text-oren text-base text-primary"
          >
            View Order
          </Link>
        </div>
      </div>

      {/* Additional information sections for Date, Total, and Status */}
      <div className="grid md:justify-center">
        <div className="text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
          <p>Date</p>
        </div>
        <h1 className="font-bold text-base text-[#0B132A]">
          {product.created_at}
        </h1>
      </div>

      <div className="grid md:justify-center">
        <div className="text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
          <p>Total</p>
        </div>
        <div className="font-bold text-base text-[#0B132A]">
          {numberToRupiah(Number(product.grand_total))}
        </div>
      </div>

      <div className="grid md:justify-center">
        <div className="text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
          <p>Status</p>
        </div>
        <div className="font-semibold text-primary bg-[#FF890633] rounded-3xl text-base px-3 py-1 text-center">
          {product.status}
        </div>
      </div>
    </div>
  );
};
