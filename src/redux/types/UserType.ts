import { IBasicResponse } from "./ResponseType";

export interface IUserBody {
  user_email: string;
  user_pass: string;
}

export interface IRegisterResponse extends IBasicResponse {
  data: IUserBody[];
}
