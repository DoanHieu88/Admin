import api from "../../until/api";
import { LoginPayload, SignupPayload } from "./type";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginFailed, loginSuccess, signupFailed, signupSuccess } from "./action";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionType";

const loginAdmin = async (payload: LoginPayload) => {
  const { data } = await api.post("auth/login-admin", { ...payload });

  return data;
};

const signupAdmin = async (payload: SignupPayload) => {
  const { data } = await api.post("auth/register-admin", { ...payload });
  return data;
};

function* loginAdminSaga(action: any) {
  try {
    const respone: { token: string } = yield call(loginAdmin, {
      email: action.payload.email,
      password: action.payload.password,
    });

    yield put(loginSuccess({ ...respone }));
  } catch (error: any) {
    yield put(loginFailed({ error: error.message }));
  }
}

function* signupAdminSaga(action: any) {
  try {
    const respone: { message: string } = yield call(signupAdmin, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      email: action.payload.email,
      address: action.payload.address,
      phone: action.payload.phone,
      company: action.payload.company,
      password: action.payload.password,
      comfirmPassword: action.payload.comfirmPassword,
    });
    yield put(signupSuccess({
      ...respone,
    }))
  } catch (error:any) {
    yield put(signupFailed({error: error.message}))
  }
}

function* authSaga(){
    yield all([takeLatest(LOGIN_REQUEST,loginAdminSaga)])
    yield all([takeLatest(SIGNUP_REQUEST,signupAdminSaga)])
}

export default authSaga;