import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../../features/wishlist/wishListSlice";
import { toast } from "react-toastify";
import { addToCart } from "../../features/cart/cartSlice";

const WishListItem = ({ wishlist }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeFromWishList(id));
    toast.success("Product deleted from wishlist!");
  };

  const handleCartClick = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishList(product.id));
    toast.success("Product moved to cart!");
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={wishlist.images[0]} alt="" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {wishlist.title}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {wishlist.category.name}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377; {wishlist.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {wishlist.category.category}
        </div>

        <div>
          <div className="flex items-center justify-between mt-2">
            <RiDeleteBin6Line
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
              onClick={() => handleDelete(wishlist.id)}
            />
            {/* BUTTON START */}
            <button
              className="rounded-lg bg-grey text-black
            border border-black-1000 transition-transform active:scale-95 hover:text-white hover:bg-black flex items-center justify-center p-2 mt-2"
              onClick={() => handleCartClick(wishlist)}
            >
              Add to Cart
            </button>
            {/* BUTTON END */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
