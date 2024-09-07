import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import { fetchProducts, getProducts } from "../features/products/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ categoryId: 1 }));
  }, [dispatch]);

  // Fetch all products from the Redux store
  const allProducts = useSelector(getProducts);

  // Separate products by category ID
  const clothData = allProducts.filter((product) => product.category.id === 1);
  const electronicsData = allProducts.filter(
    (product) => product.category.id === 2
  );
  const furnitureData = allProducts.filter(
    (product) => product.category.id === 3
  );
  const shoesData = allProducts.filter((product) => product.category.id === 4);
  const othersData = allProducts.filter((product) => product.category.id === 5);

  return (
    <div>
      {/* Render products for each category */}
      <Products products={clothData} category="Clothes" />
      <Products products={electronicsData} category="Electronics" />
      <Products products={furnitureData} category="Furniture" />
      <Products products={shoesData} category="Shoes" />
      <Products products={othersData} category="Others" />
    </div>
  );
};

export default ProductList;
