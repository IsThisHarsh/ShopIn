import React from "react";
import Navbar from "../components/Navbar";
import CarouselData from "./../assets/CarouselData.json";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection carouselData={CarouselData} />
      <div id="items">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
