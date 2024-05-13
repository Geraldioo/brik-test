import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAuth } = authSlice.actions;

export const register = ({ username, email, password }) => {
  return async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Register Success",
      });
    } catch (error) {
      console.log(error, "<<<");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };
};

export const login = ({ email, password }, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      localStorage.access_token = response.data.token;
      localStorage.username = response.data.user.username;
      
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Success",
      });
    } catch (error) {
      console.log(error, "<< ERR");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };
};

export default authSlice.reducer;
