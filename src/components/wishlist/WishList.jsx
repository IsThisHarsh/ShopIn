import React, { useEffect } from "react";
import Wrapper from "./../Wrapper";
import WishListItem from "./WishListItem";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "./../../assets/emptyCart.png";
import wishlist from "./../../assets/wishlist.png";
import {
  fetchWishlistItems,
  selectWishList,
} from "../../features/wishlist/wishListSlice";
import { Link } from "react-router-dom";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishList);

  useEffect(() => {
    dispatch(fetchWishlistItems());
  }, [dispatch]);

  if (wishlistItems && wishlistItems.length < 1) {
    return (
      <Wrapper>
        <div className="flex-[2] flex flex-col items-center pb-[50px]">
          <img
            src={wishlist}
            height={300}
            width={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your Wishlist is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your Wishlist.
            <br />
            Go ahead and explore.
          </span>
          <Link
            to="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Add to WishList
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            WishList
          </div>
        </div>
        {/* HEADING AND PARAGRAPH END */}

        {/* CART CONTENT START */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* WISHLIST ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold uppercase">WishList Items</div>
            {wishlistItems.map((item, index) => (
              <WishListItem wishlist={item} key={index} />
            ))}
          </div>
          {/* WISHLIST CONTENT EMD */}
        </div>
        {/* WISHLIST CONTENT END */}
      </Wrapper>
    </div>
  );
};

export default WishList;
