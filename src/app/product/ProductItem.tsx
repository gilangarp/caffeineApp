import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaginationNumbers from "../../components/pagination/PaginationNumbers";
import { ProductCard } from "../../components/cards/ProductCard";
import imgDummy from "../../assets/images/ProductImageBg.png";

const dummyProducts = [
  {
    uuid: "1",
    img_product: imgDummy,
    product_name: "Product 1",
    product_description: "Description for product 1",
    product_price: "100",
    rating: "4.5",
  },
  {
    uuid: "2",
    img_product: imgDummy,
    product_name: "Product 2",
    product_description: "Description for product 2",
    product_price: "150",
    rating: "4.0",
  },
  {
    uuid: "3",
    img_product: imgDummy,
    product_name: "Product 3",
    product_description: "Description for product 3",
    product_price: "200",
    rating: "4.2",
  },
  {
    uuid: "4",
    img_product: imgDummy,
    product_name: "Product 4",
    product_description: "Description for product 4",
    product_price: "250",
    rating: "4.8",
  },
  {
    uuid: "5",
    img_product: imgDummy,
    product_name: "Product 5",
    product_description: "Description for product 5",
    product_price: "300",
    rating: "3.9",
  },
  {
    uuid: "6",
    img_product: imgDummy,
    product_name: "Product 6",
    product_description: "Description for product 6",
    product_price: "350",
    rating: "4.7",
  },
  {
    uuid: "7",
    img_product: imgDummy,
    product_name: "Product 7",
    product_description: "Description for product 7",
    product_price: "400",
    rating: "4.1",
  },
  {
    uuid: "8",
    img_product: imgDummy,
    product_name: "Product 8",
    product_description: "Description for product 8",
    product_price: "450",
    rating: "4.3",
  },
  {
    uuid: "9",
    img_product: imgDummy,
    product_name: "Product 9",
    product_description: "Description for product 9",
    product_price: "500",
    rating: "4.6",
  },
  {
    uuid: "10",
    img_product: imgDummy,
    product_name: "Product 10",
    product_description: "Description for product 10",
    product_price: "550",
    rating: "4.9",
  },
];

const dummyPagination = {
  totalPages: 2, // For 10 products with 5 per page
};

export const ProductItem = () => {
  const navigate = useNavigate();

  const handleBuyClick = (uuid: string) => {
    navigate(`/detail-product/${uuid}`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 6;

  const [products, setProducts] = useState(dummyProducts);
  const [pagination, setPagination] = useState(dummyPagination);

  useEffect(() => {
    const fetchProducts = () => {
      const startIndex = (currentPage - 1) * productsPage;
      const endIndex = startIndex + productsPage;
      const pagedProducts = dummyProducts.slice(startIndex, endIndex);
      setProducts(pagedProducts);
      setPagination(dummyPagination);
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <div className="lg:grid lg:justify-end">
      <div
        style={{ overflowY: "hidden", scrollbarWidth: "none" }}
        className="w-full grid justify-items-center items-center grid-cols-1 md:grid-cols-[1fr,1fr] gap-3 lg:gap-20 h-fit p-5 overflow-x-scroll snap-mandatory snap-x">
        {/* Product */}
        {products.length > 0 ? (
          products.map((productItem) => (
            <ProductCard
              onBuyClick={handleBuyClick}
              product={productItem}
              key={productItem.uuid}
              imgError=""
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <PaginationNumbers
        currentPage={currentPage}
        totalPages={pagination.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
