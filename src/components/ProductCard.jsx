import React, { useState, useEffect } from "react";
import { BsCartPlus, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishList } from "../features/wishlist/wishListSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadingCart) {
      setTimeout(() => {
        setIsLoadingCart(false);
        toast.success("Product added to cart!");
      }, 2000);
    }
    if (isLoadingWishlist) {
      setTimeout(() => {
        setIsLoadingWishlist(false);
        toast.success("Product added to wishlist!");
      }, 2000);
    }
  }, [isLoadingCart, isLoadingWishlist]);

  const handleCartClick = (product) => {
    setIsLoadingCart(true);
    dispatch(addToCart(product));
  };

  const handleWishlistClick = (product) => {
    setIsLoadingWishlist(true);
    dispatch(addToWishList(product));
  };

  return (
    <div>
      <div className="aspect-w-1 aspect-h-1">
        <img
          className="object-cover w-full h-[60vh] rounded-lg"
          src={product.images[0]}
          alt="Product Image"
        />
      </div>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{product.title}</h2>
        <div className="flex items-center justify-between text-black/[0.5] text-xl">
          <p className="mr-2 text-lg font-semibold">₹{product.price}</p>
          <div className="mr-2 text-lg font-semibold flex item-center justify-evenly gap-2 text-xl">
            <p className="hover:text-red-500 cursor-pointer">
              <BsSuitHeartFill
                onClick={() => handleWishlistClick(product)}
                disabled={isLoadingWishlist}
              />
            </p>
            <p className="hover:text-red-500 cursor-pointer">
              <BsCartPlus
                onClick={() => handleCartClick(product)}
                disabled={isLoadingCart}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
