import { IBasicResponse } from "./ResponseType";

export interface ITestimonialBody {
  id:string;
  full_name: string;
  comment: string;
  rating: string;
  user_img: string;
  user_phone: string;
}

export interface ITestimonialResponse extends IBasicResponse {
  data: ITestimonialBody[];
}
