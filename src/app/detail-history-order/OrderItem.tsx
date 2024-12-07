interface OrderItemProps {
  productImage: string;
  saleText?: string;
  productName: string;
  productDetails: string;
  originalPrice: string;
  discountedPrice: string | undefined;
}

export const OrderItem = ({
  productImage,
  saleText,
  productName,
  productDetails,
  originalPrice,
  discountedPrice,
}: OrderItemProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[auto,1fr] items-center gap-3 p-3 border border-neutral-300">
      <div className="w-auto h-auto grid justify-center items-center">
        <img
          className="w-[178px] h-[170px] object-cover"
          src={productImage}
          alt={productName}
        />
      </div>

      <div className="grid grid-cols-[1fr,auto] md:grid-cols-[1fr,auto] h-full pr-5">
        <div className="grid grid-cols-1">
          {saleText && (
            <h1 className="text-white text-xs h-fit bg-red-700 rounded-3xl px-3 py-1 w-fit">
              {saleText}
            </h1>
          )}
          <h1 className="font-bold text-lg">{productName}</h1>
          <h1 className="text-lg text-text">{productDetails}</h1>

          <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2md:grid-cols-1 h-fit">
            <div className="line-through text-red-800">
              <p>{originalPrice}</p>
            </div>
            <div className="pl-5 text-xl text-[#FF8906]">
              <p>{discountedPrice}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
