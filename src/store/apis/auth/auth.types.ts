import { ILanguages } from "../../../constants";

export interface Res {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
  code: number;
}

export interface RegisterReq {
  locale: ILanguages;
  username: string;
  science_id: number;
}

export interface LoginReq {
  username: string;
  password: string;
}

export interface ResendReq {
  username: string;
}

export interface ConfirmReq {
  username: string;
  code: number;
}

export interface ResetConfirmReq {
  username: string;
  password: string;
  code: number;
}

export interface StoreTokenReq {
  device_token: string;
}

export interface AdditionalReq {
  science_id: number;
  edu_system_id: number;
  class_id: number;
}

export interface UpdateReq {
  first_name: string;
  last_name: string;
  birth_day: string;
  region: number;
  city: number;
  school: string;
  class_id: number;
  edu_system_id: number;
  science_id: number;
}

export interface PasswordChangeReq {
  password: string;
}
