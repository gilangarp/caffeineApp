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
  created_at: string;
  phone_number: string;
  address: string;
  payment_type: string;
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

export interface ITransaction_product {
  product_id: string;
  size_id: number;
  fd_option_id?: string;
}

export interface ITransactionBody {
  user_id: number;
  payments_id: number;
  shipping_id: number;
  status_id: number;
  subtotal: number;
  tax: number;
  grand_total: number;
}

export interface ITransactionWithDetailsBody {
  token: string;
  user_id: string;
  full_name: string;
  user_email: string;
  address: string;
  payment_type: string;
  shipping_id: number;
  status_id: number;
  products: {
    product_id: string;
    size_id: string | number;
    fd_option_id: number;
  }[];
}

export interface IDataTransaction {
  id: string;
  token: string;
  redirect_url: string;
  payment_method: string;
  status: string;
}

export interface ITransactionResponse extends IBasicResponse {
  data: IDataTransaction;
}
