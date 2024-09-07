import React from "react";
import Navbar from "../components/Navbar";
import WishList from "./../components/wishlist/WishList";
import Footer from "../components/Footer";

const WishListPage = () => {
  return (
    <div>
      <Navbar />
      <WishList />
      <Footer />
    </div>
  );
};

export default WishListPage;
