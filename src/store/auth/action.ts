import * as type from "../auth/actionType";
import { LoginFailedPayload, LoginPayload, LoginSuccessPayload, SignupFailedPayload, SignupPayload, SignupRequest, SignupSuccessPayload } from "./type";

export const signupRequest =(payload: SignupPayload )=>({
    type:type.SIGNUP_REQUEST,
    payload
})

export const signupSuccess =(payload:SignupSuccessPayload )=>({
    type:type.SIGNUP_SUCCESS,
    payload
})

export const signupFailed =(payload: SignupFailedPayload )=>({
    type:type.SIGNUP_FAILED,
    payload
})

export const loginRequest =(payload: LoginPayload )=>({
    type:type.LOGIN_REQUEST,
    payload
})


export const loginSuccess =(payload: LoginSuccessPayload )=>({
    type:type.LOGIN_SUCCESS,
    payload
})

export const loginFailed =(payload: LoginFailedPayload )=>({
    type:type.LOGIN_FAILED,
    payload
})


