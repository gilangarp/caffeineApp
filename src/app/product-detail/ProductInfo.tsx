interface ProductInfoProps {
    product_name: string,
    product_price: number,
    discount_price: string,
    product_description: string,
    rating: string;
  }
  
  export const ProductInfo = ({ product_name,product_price,discount_price,product_description, rating}: ProductInfoProps) => {
    return (
      <div className="gap-3 flex flex-col justify-center">
        <h2 className="text-lg font-bold text-white p-3 bg-[#D00000] w-fit rounded-3xl">
          FLASH SALE!
        </h2>
        <h1 className="font-bold text-heading_mobile lg:text-heading_desktop">
          {product_name}
        </h1>
        <div className="grid grid-cols-[auto,1fr] items-center">
          <p className="text-xs line-through text-red-800 pr-2">
            IDR {discount_price}
          </p>
          <p className="text-2xl text-[#FF8906]">IDR {product_price}</p>
        </div>
        <div className="grid grid-cols-[auto,1fr]">
          <div className="text-[#FF8906]">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="star">
                ★
              </span>
            ))}
          </div>
          <div className="pl-1">{rating}.0</div>
        </div>
        <p className="text-gray-700 text-base">{product_description}</p>
      </div>
    );
  };
  