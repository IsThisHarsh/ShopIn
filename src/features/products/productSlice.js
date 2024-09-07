import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ categoriesId, title, price, price_min, price_max }) => {
    let apiUrl = "https://api.escuelajs.co/api/v1/products";

    const queryParams = [];

    if (title) {
      queryParams.push(`title=${title}`);
    }
    if (price_min && price_max) {
      queryParams.push(`price_min=${price_min}&price_max=${price_max}`);
    }
    if (categoriesId) {
      queryParams.push(`categoryId=${categoriesId}`);
    }
    if (price) {
      queryParams.push(`price=${price}`);
    }

    if (queryParams.length > 0) {
      apiUrl += `/?${queryParams.join("&")}`;
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  "products/fetchProductDetail",
  async ({ id }) => {
    let apiUrl = `https://api.escuelajs.co/api/v1/products/${id}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  products: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {})
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        console.log("Fetching Failed...!");
      })
      .addCase(fetchProductDetail.pending, (state) => {})
      .addCase(fetchProductDetail.fulfilled, (state, { payload }) => {
        console.log("Data Fetched...!");
        state.selectedProduct = payload;
      })
      .addCase(fetchProductDetail.rejected, (state) => {
        console.log("Fetching Failed...!");
      });
  },
});

export const getProducts = (state) => state.products.products;
export const getProductDetail = (state) => state.products.selectedProduct;
export default productSlice.reducer;
