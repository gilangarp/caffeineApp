import { IBasicResponse } from "./ResponseType";

export interface IProductBody {
  id: string;
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

interface IProduct {
  id?: string;
  count: number;
  product_name?: string;
  product_price: number;
  discount_price: string;
  product_description?: string;
  rating: string;
}

interface IImage {
  img_1?: string;
  img_2?: string;
  img_3?: string;
}

export interface IDetailProduct {
  product: IProduct;
  images: IImage;
}

export interface ITransactionProduct {
  id?: string;
  count: number;
  size_id?: number;
  ice_hot?: number;
  delivery_id?: string;
  payment_id?: string;
}

export interface IProductDetailResponse extends IBasicResponse {
  data: IDetailProduct;
}

export interface IDetailCardProduct {
  img_product: string;
  product_name: string;
  product_price: number;
  discount_price: string;
  id: string;
}

export interface IProductDetailCardResponse extends IBasicResponse {
  data: IDetailCardProduct[];
}
