import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const fetchWishlistItems = createAsyncThunk(
  "wishlist/fetchWishlistItems",
  async (_, { getState }) => {
    const wishlistItems = getState().wishlist.wishlist;
    return wishlistItems;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const existingItem = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;
export const selectWishList = (state) => state.wishlist.wishlist;
export const selectWishListCount = (state) => state.wishlist.wishlist.length;

export default wishlistSlice.reducer;
