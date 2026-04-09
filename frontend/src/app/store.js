import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});