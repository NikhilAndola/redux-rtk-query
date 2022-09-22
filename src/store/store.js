import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../services/jsonPostApi";

export const store = configureStore({
  reducer: {
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonplaceholderApi.middleware)
});
