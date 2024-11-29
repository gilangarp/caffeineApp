import { IBasicResponse } from "./ResponseType";

export interface IProfileBody {
  id: string;
  avatar?: string;
  username?: string;
  full_name?: string;
  user_phone?: string;
  user_email?: string;
  created_at?: string;
  address?: string;
}

export interface IUsersParams {
  id: string;
  token: string;
}

export interface IProfileResponse extends IBasicResponse {
  data: IProfileBody[];
}
