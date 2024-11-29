import { IBasicResponse } from "./ResponseType";

export interface ITestimonialBody {
  id: string;
  full_name: string;
  comment: string;
  rating: string;
  user_img: string;
  user_phone: string;
}

export interface ITestimonialResponse extends IBasicResponse {
  data: ITestimonialBody[];
}

export interface ITestimonialInputPayload {
  id:string;
  comment: string;
  rating: number;
}

export interface IRejectValue {
  error: string;
  status?: number;
}

export interface ITestimonialInputResponse extends IBasicResponse {
  user_id: string;
  comment: string;
  rating: number;
}
