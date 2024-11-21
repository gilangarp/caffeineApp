import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PagePaginationArrows } from "../../components/pagination/PagePaginationArrows";
import { PromoCard } from "../../components/cards/PromoCard";

const promoProducts = [
  {
    image_promo: "https://example.com/image1.jpg",
    discount_price: 25000,
    promo_name: "HAPPY MOTHER’S DAY!",
    promo_description: "Celebrate mom with special gifts!",
    promo_img: "https://example.com/promo1.jpg",
    product_id: "prod_001",
  },
  {
    image_promo: "https://example.com/image2.jpg",
    discount_price: 25000,
    promo_name: "MOM'S SPECIAL DAY!",
    promo_description: "Show her love with a special gift.",
    promo_img: "https://example.com/promo2.jpg",
    product_id: "prod_002",
  },
  {
    image_promo: "https://example.com/image3.jpg",
    discount_price: 25000,
    promo_name: "CELEBRATE MOM!",
    promo_description: "Give her a gift she will cherish.",
    promo_img: "https://example.com/promo3.jpg",
    product_id: "prod_003",
  },
  {
    image_promo: "https://example.com/image4.jpg",
    discount_price: 25000,
    promo_name: "FOR THE QUEEN!",
    promo_description: "Because she deserves the best.",
    promo_img: "https://example.com/promo4.jpg",
    product_id: "prod_004",
  },
  {
    image_promo: "https://example.com/image5.jpg",
    discount_price: 25000,
    promo_name: "LOVE YOU, MOM!",
    promo_description: "A little something to show your appreciation.",
    promo_img: "https://example.com/promo5.jpg",
    product_id: "prod_005",
  },
  {
    image_promo: "https://example.com/image6.jpg",
    discount_price: 25000,
    promo_name: "THANK YOU, MOM!",
    promo_description: "Express your gratitude with a thoughtful gift.",
    promo_img: "https://example.com/promo6.jpg",
    product_id: "prod_006",
  },
  {
    image_promo: "https://example.com/image7.jpg",
    discount_price: 25000,
    promo_name: "MOTHER'S LOVE!",
    promo_description: "Celebrate the bond that lasts forever.",
    promo_img: "https://example.com/promo7.jpg",
    product_id: "prod_007",
  },
];

export const PromoProduct = () => {
  const [isScroll] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleBuyClick = (uuid: string) => {
    navigate(`/detail-product/${uuid}`);
  };

  const totalPages = Math.ceil(promoProducts.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const displayedPromos = promoProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full ">
      <div className="pb-4 px-5 md:px-10 lg:px-20 flex items-center justify-between">
        <h1 className="text-heading_mobile lg:text-heading_desktop text-black text-plus-jakarta ml-0">
          Today's <span className="text-[#8E6447]">Promos</span>
        </h1>
        <div className="hidden md:block">
          <PagePaginationArrows
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pages={totalPages}
          />
        </div>
      </div>
      <div
        style={{ overflowY: "hidden", scrollbarWidth: "none" }}
        className={`flex gap-3 py-2 overflow-x-auto snap-mandatory snap-x ${isScroll ? 'w-full' : 'px-5 md:px-10 lg:px-20'}`}>
        {displayedPromos.map((promo) => (
          <PromoCard
            key={promo.product_id}
            promo={promo}
            onBuyClick={handleBuyClick}
          />
        ))}
      </div>
    </div>
  );
};
