import { IBasicResponse } from "./ResponseType";

export interface IHistoryOrderBody {
  id: string;
  img_product: string;
  order_number: string;
  created_at: string;
  grand_total: string;
  status: string;
}

export interface IFilterHistoryOrder {
  status: string;
}

export interface IHistoryResponse extends IBasicResponse {
  data: IHistoryOrderBody[];
}

export interface IOrderInfo {
  full_name: string;
  order_number: string;
  created_at:string;
  phone_number: string;
  address: string;
  payment_method: string;
  shipping_method: string;
  status: string;
  grand_total: string;
}

export interface IProduct {
  img_product: string;
  product_name: string;
  product_price: number;
  discount_price: number | null;
  size: string;
  option: string;
  shipping_method: string;
}

export interface IOrderDetail {
  info: IOrderInfo;
  product: IProduct[];
}
