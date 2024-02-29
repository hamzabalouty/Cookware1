import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  initialState: [],
  name: "favoriteSlice",
  reducers: {
    addCart: (state, action) => {
      // state.push(action.payload);
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    }
  }
});

export const { addCart, deleteCart, clear } = favoriteSlice.actions;

export default favoriteSlice.reducer;
