import { authConstants } from "./constants";


// Tenemos una carpeta ACTIONS donde enviamos a traves de DISPATCH la CONSTANTE(ACCION) y le mandamos los
// datos PAYLOAD. 


export const login = (user) => {

    console.log(user)

  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user
      },
    });
  };
};
