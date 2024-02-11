/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";

const initialState = {
  user: {
    email: "",
    name: "",
    progress: "",
    last_completed: "",
  },
};

const authSlice = createSlice({
  // el slice tendra nombre products, su valor inicial sera el valor inicial y sus reducers estan vacios
  name: "auth",
  initialState,
  reducers: {
    storeUserToken(state, action) {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.progress = action.payload.progress;
      state.user.last_completed = action.payload.last_completed;
      state.user.token = action.payload.token;
      jsCookie.set("MFM_EMAIL", action.payload.email);
      jsCookie.set("MFM_NAME", action.payload.name);
      jsCookie.set("MFM_PROGRESS", action.payload.progress);
      jsCookie.set("MFM_LASTCOMP", action.payload.last_completed);
      jsCookie.set("MFM_TOKEN", action.payload.token);
      window.location = "/levels";
    },
    removeUserToken(state) {
      state.user = initialState.user;
      jsCookie.remove("MFM_EMAIL");
      jsCookie.remove("MFM_NAME");
      jsCookie.remove("MFM_PROGRESS");
      window.location = "/login";
    },
  },
});

export const { storeUserToken, removeUserToken } = authSlice.actions; // exportamos de todas las el recevivedproducts para que pueda recibir los productos
export default authSlice.reducer; // exportamos el reducer.

export const getProgress = (state) =>
  state?.persistedReducer?.auth?.user?.progress || "";
