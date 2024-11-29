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
