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

const niveluser=3

const authSlice = createSlice({
  // el slice tendra nombre products, su valor inicial sera el valor inicial y sus reducers estan vacios
  name: "auth",
  initialState,
  reducers: {
    storeUserToken(state, action) {
      state.user.email = action.payload.data.data.email;
      state.user.name = action.payload.data.data.name;
      state.user.level = action.payload.data.data.level;
      state.user.last_completed = action.payload.data.data.last_completed;
      state.user.token = action.payload.data.data.token;
      jsCookie.set("MFM_NAME", action.payload.data.data.name);
      jsCookie.set("MFM_LEVEL", action.payload.data.data.level);
      jsCookie.set("MFM_LASTCOMP", action.payload.data.data.last_completed);
      jsCookie.set("MFM_TOKEN", action.payload.data.data.token);
      window.location = "/level/"+String(jsCookie.get("MFM_LEVEL"));
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
