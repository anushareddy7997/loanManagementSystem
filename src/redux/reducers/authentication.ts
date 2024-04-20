import { authConstants } from "../constants";
import { AuthAction, AuthState } from "../../types";

const initState: AuthState = {
  isAuthenticated: false,
  userId: undefined,
  loading: false,
  message: undefined,
  error: undefined,
};

export const authReducer = (
  state: AuthState = initState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    // To verify the token in local storage and authenticate directly without login
    case authConstants.VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };
    case authConstants.VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.payload?.userId,
        message: action.payload?.message,
        isAuthenticated: true,
      };
    case authConstants.VERIFY_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
        isAuthenticated: false,
      };

    // Sign up related
    case authConstants.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        isAuthenticated: true,
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    // Signin related
    case authConstants.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };
    case authConstants.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        isAuthenticated: true,
      };
    case authConstants.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    // Signout related
    case authConstants.SIGNOUT_REQUEST:
      return {
        ...state,
        loading: true,
        message: undefined,
        error: undefined,
      };
    case authConstants.SIGNOUT_SUCCESS:
      return {
        ...initState,
        message: action.payload?.message,
      };
    case authConstants.SIGNOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };
    default:
      return state;
  }
};
