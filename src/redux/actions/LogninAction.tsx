import { toast } from "react-hot-toast";
import { authConstants } from "../constants";
import { ThunkAction } from "redux-thunk";
import { AuthAction, AuthState, SigninFormInputs } from "../../types";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import axios from "axios";

export interface UserData extends SigninFormInputs {
  id: string;
}
export const LogninAction = (
  user: SigninFormInputs,
  navigate: NavigateFunction
): ThunkAction<void, AuthState, {}, AuthAction> => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.SIGNIN_REQUEST });
      const userResponse = await axios.get<UserData[]>(
        `http://localhost:4000/users?email=${user.email}`
      );
      if (!userResponse.data || userResponse.data.length !== 1) {
        throw new Error("User doesn't exists with this email");
      }
      const currentUser = userResponse.data[0];
      if (currentUser.password === user.password) {
        localStorage.setItem("USER_ID", currentUser.id);
        dispatch({
          type: authConstants.SIGNIN_SUCCESS,
          payload: {
            message: "Signed in successfully",
          },
        });
        toast.success("Signed in successfully");
        navigate("/");
      } else {
        throw new Error("Invalid password. Please try again");
      }
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      toast.error(errorMessage);
      dispatch({
        type: authConstants.SIGNIN_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
