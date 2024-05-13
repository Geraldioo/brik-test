import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlicer";
import { productSlice } from "./productSlicer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productSlice.reducer,
  },
});
