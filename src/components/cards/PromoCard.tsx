import { ButtonText } from "../button/ButtonText";

interface IPromoBody {
  image_promo: string;
  discount_price: number;
  promo_name: string;
  promo_description: string;
  promo_img: string;
  product_id: string;
}

interface PromoCardProps {
  promo: IPromoBody;
  onBuyClick: (uuid: string) => void;
}

export const PromoCard = ({ promo, onBuyClick }: PromoCardProps) => {
  return (
    <div className="min-w-[335px] bg-[#88B788] overflow-hidden rounded-3xl grid grid-cols-[auto,1fr] snap-center grid-rows-1">
      <div className="w-24 h-[80px] pl-[1%] rounded-3xl">
        <img src={promo.image_promo} alt="" className="object-cover" />
      </div>

      <div className="w-full grid grid-rows-[1fr,auto] h-fit pl-2">
        <div className="grid gap-1">
          <h1 className="text-sm font-bold">{promo.promo_name}</h1>
          <div className="pb-1 pr-7 grid grid-cols-[auto,1fr]">
            <h2 className="text-sm font-medium text-black line-clamp-1 hover:line-clamp-none transition-all duration-300">
              {promo.promo_description}
            </h2>
          </div>
        </div>
        <div>
          <ButtonText style="text-white text-sm" text="Buy Product" onClick={() => onBuyClick(promo.product_id)}/>
        </div>
      </div>
    </div>
  );
};
