import { configureStore } from "@reduxjs/toolkit";
import envsReducer from "./env";

export const createStore = () =>
  configureStore({
    reducer: {
      envs: envsReducer,
    },
  });

export const store = createStore();
