import { IBasicResponse } from "./ResponseType";

export interface IErrorResponse {
  error: string;
  status?: number;
}

export interface IAuthResponse extends IBasicResponse {
  data: { token: string; id: string; role: string }[];
}
