import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import favoriteSlice from "./slices/favorite-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice
  }
});
