import { authConstants } from "./constants";
import axios from "../helpers/axios";

// Tenemos una carpeta ACTIONS donde enviamos a traves de DISPATCH la CONSTANTE(ACCION) y le mandamos los
// datos PAYLOAD.

export const login = (user) => {

  console.log(user);

  return async (dispatch) => {

    dispatch({ type: authConstants.LOGIN_REQUEST });

    const res = await axios.post(`/admin/signin`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {

        console.log("holu")
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
