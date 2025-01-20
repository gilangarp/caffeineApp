import { IBasicResponse } from "./ResponseType";

export interface IProfileBody {
  id: string;
  profile_image?: string;
  username?: string;
  full_name?: string;
  phone_number?: string;
  user_email?: string;
  created_at?: string;
  address?: string;
}

export interface IProfileInputBody {
  id: string;
  token: string;
  profile_image?: File | null;
  username?: string;
  full_name?: string;
  phone_number?: string;
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
