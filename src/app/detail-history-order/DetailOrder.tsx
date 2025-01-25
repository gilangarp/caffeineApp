import { OrderInfo } from "./OrderInfo";
import { OrderItem } from "./OrderItem";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useEffect } from "react";
import { historyOrderDetailAction } from "../../redux/slice/HistoryOrderDetailSlice";
import { useParams } from "react-router-dom";
import { numberToRupiah } from "../../utils/NumberToRupiah";

export const DetailOrder = () => {
  const dispatch = useStoreDispatch();
  const { data, loading, error } = useStoreSelector(
    (state) => state.detailHistory
  );

  const { id } = useParams<{ id: string }>();
  const { token } = useStoreSelector((state) => state.auth);

  useEffect(() => {
    if (id && token) {
      dispatch(historyOrderDetailAction.historyOrderDetailThunk({ id, token }));
    }
  }, [dispatch, id, token]);

  if (!id) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const order = data[0];

  return (
    <main className="py-2 px-5 md:px-10 lg:px-14 grid gap-5">
      <div className="grid grid-rows-2 gap-2 items-beetwen pt-10 lg:pt-20">
        <div className="gap-2 text-wrap flex flex-row text-heading_mobile lg:text-heading_desktop">
          <p className="font-semibold">Pesanan</p>
          <p className="font-bold">#{order.info.order_number}</p>
        </div>
        <p className="text-xl text-gray-400">{order.info.created_at}</p>
      </div>

      <div className="grid grid-rows-[auto,auto] grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-4">
        <div>
          <p className="text-2xl font-medium">Informasi Pesanan</p>
          <div className="w-full">
            <div className="flex-col flex p-4">
              <OrderInfo label="Full Name" value={order.info.full_name} />
              <OrderInfo label="Address" value={order.info.address} />
              <OrderInfo label="Phone" value={order.info.phone_number} />
              <OrderInfo
                label="Payment Method"
                value={order.info.payment_type}
              />
              <OrderInfo label="Shipping" value={order.info.shipping_method} />
              <div className="flex-row flex justify-between py-3">
                <h1 className="font-normal text-base">Total Transaksi</h1>
                <div className="font-semibold text-base text-primary">
                  {numberToRupiah(Number(order.info.grand_total))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-2xl font-medium">Pesanan Anda</p>
          <div className="grid gap-3">
            {order.product.map((item, index) => (
              <OrderItem
                key={index}
                productImage={item.img_product}
                saleText={item.discount_price ? "Discount!" : ""}
                productName={item.product_name}
                productDetails={`${item.size} | ${item.option} | ${item.shipping_method}`}
                productPrice={item.product_price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
