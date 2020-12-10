import { authConstants, userConstants } from "./constants";
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
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        console.log("holu");
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const signup = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    const res = await axios.post(`/admin/signup`, {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data.message;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        console.log("holu");
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "failed to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
  };
};
