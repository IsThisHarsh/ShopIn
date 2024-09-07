import React from "react";
import ProductCard from "./ProductCard";
import Wrapper from "./../components/Wrapper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = ({ products, category }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full md:py-20 relative pb-25">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight uppercase bold">
            {category}
          </div>
        </div>

        {/* Slider for Products */}
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          ssr={true}
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <div key={product.id} className="p-[20px] ">
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      </Wrapper>
      <hr className="border border-black-700" />
    </div>
  );
};

export default Products;
