import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = { products: {} };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      let products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });

      // products.forEach(product=>state.products[products.id] = product)
    },
  },
});

export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;
