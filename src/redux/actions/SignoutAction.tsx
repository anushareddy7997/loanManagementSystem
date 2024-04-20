import { toast } from "react-hot-toast";
import { authConstants } from "../constants";
import { AuthAction } from "../../types";
import { Dispatch } from "redux";

export const SignoutAction = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: authConstants.SIGNOUT_REQUEST });

      localStorage.removeItem("USER_ID");

      toast.success("Signed out successfully");
      dispatch({ type: authConstants.SIGNOUT_SUCCESS });
    } catch (error) {
      const err = error as Error;
      const errorMessage = err.message;
      toast.error(errorMessage);
      dispatch({
        type: authConstants.SIGNOUT_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};
