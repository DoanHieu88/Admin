import * as type from "../auth/actionType";

export interface AuthState {
  loading: boolean;
  token: string;
  error: string | null;
  message: string
}

export interface SignupRequest {
  type: typeof type.SIGNUP_REQUEST;
}
export interface SignupSuccess {
  type: typeof type.SIGNUP_SUCCESS;
  payload: SignupSuccessPayload;
}
export interface SignupFailed {
  type: typeof type.SIGNUP_FAILED;
  payload: SignupFailedPayload;
}
export interface LoginRequest {
  type: typeof type.LOGIN_REQUEST;
}
export interface LoginSuccess {
  type: typeof type.LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}
export interface LoginFailed {
  type: typeof type.LOGIN_FAILED;
  payload: LoginFailedPayload;
}

export interface SignupSuccessPayload {
  message: string;
}

export interface LoginSuccessPayload {
  token: string;
}

export interface SignupFailedPayload {
  error: string;
}

export interface LoginFailedPayload {
  error: string;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  company: string;
  password: string;
  comfirmPassword: string
}

export interface LoginPayload{
    email:string,
    password: string
}

export type AuthAction =
  | SignupRequest
  | SignupSuccess
  | SignupFailed
  | LoginRequest
  | LoginSuccess
  | LoginFailed;
