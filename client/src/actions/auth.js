import { AUTH } from "../constants/actionTypes";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index.js";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(" $$$ data", data);
    dispatch({ type: AUTH, data });

    const navigate = useNavigate();
    navigate("/");
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    const navigate = useNavigate();
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
