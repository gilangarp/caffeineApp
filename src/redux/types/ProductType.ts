import { IBasicResponse } from "./ResponseType";

export interface IProductBody {
  uuid: string;
  product_name: string;
  product_price: string;
  product_description: string;
  discount_price: string;
  category_name: string;
  img_product: string;
  rating: string;
}

export interface IFilters {
  category?: string;
  sortBy?: string;
  searchText?: string;
  min_price?: string;
  max_price?: string;
}

export interface IProductResponse extends IBasicResponse {
  data: IProductBody[];
}
