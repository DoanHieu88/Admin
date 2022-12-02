import * as type from "./actionType";
import {AuthAction, AuthState} from "./type"

const initState: AuthState = {
  loading: false,
  token: "",
  error: null,
};

const reducers = (state:AuthState = initState, action: AuthAction ) => {
  switch (action.type) {
    case type.LOGIN_REQUEST:
    case type.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case type.LOGIN_FAILED:
    case type.SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        error: null,
      };
    case type.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        error: null,
      };

    default:
       state
      break;
  }
};


export default reducers;