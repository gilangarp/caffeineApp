import { MessageCard } from "../../components/cards/MassageCard";
import { OrderList } from "./OrderList";
import { UseOrderHistory } from "./UseOrderHistory";

export const HistoryOrderPage = () => {
  const { history } = UseOrderHistory();
  return (
    <div className="pt-10 lg:pt-16 grid gap-10 px-5 md:px-10 lg:px-14">
      <section className="grid grid-cols-[auto,1fr] gap-7 items-center ">
        <p className="text-header  text-wrap text-heading_mobile lg:text-heading_desktop font-medium  ">
          History Order
        </p>
        <div>
          <p className="bg-gray-200 px-4 py-2 w-fit">{history.length}</p>
        </div>
      </section>
      <div className="w-full grid grid-cols-1 grid-rows-[1fr,auto] lg:grid-cols-[70%,30%] lg:grid-rows-1 gap-5">
        <OrderList />
        <div>
          <MessageCard />
        </div>
      </div>
    </div>
  );
};
