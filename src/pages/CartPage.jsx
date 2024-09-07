import React from "react";
import Navbar from "../components/Navbar";
import Carts from "../components/cart/Carts";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Carts />
      <Footer />
    </div>
  );
};

export default CartPage;
