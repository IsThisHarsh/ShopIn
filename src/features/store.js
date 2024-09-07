import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import wishlistReducer from "./wishlist/wishListSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false, // Disable serializability checks
});

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: customizedMiddleware,
});
