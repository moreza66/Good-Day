import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(" $$$ data", data);
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
