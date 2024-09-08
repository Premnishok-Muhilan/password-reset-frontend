import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    //new code
    confirmPassword: "",
    passwordResetToken: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setPasswordResetToken: (state, action) => {
      state.passwordResetToken = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setConfirmPassword,
  setPasswordResetToken,
} = loginSlice.actions;

export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;
export const selectConfirmPassword = (state) => state.login.confirmPassword;
export const selectPasswordResetToken = (state) => state.login.passwordResetToken;

export default loginSlice.reducer;
