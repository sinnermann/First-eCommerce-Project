import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
      console.log(action.payload);
      state.products = action.payload.products;
    },
  },
});

export const { STORE_PRODUCTS } = ProductSlice.actions;

export const selectProducts = (state) => state.product.products;

export default ProductSlice.reducer;
