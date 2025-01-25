import { IBasicResponse } from "./ResponseType";

export interface ITestimonialBody {
  full_name: string;
  comment: string;
  rating: string;
  profile_image: string;
  role: string;
}

export interface ITestimonialResponse extends IBasicResponse {
  data: ITestimonialBody[];
}

export interface ITestimonialInputPayload {
  id: string;
  token: string;
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
