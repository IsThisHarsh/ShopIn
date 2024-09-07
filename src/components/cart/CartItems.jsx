import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product deleted from cart!");
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={cart.images[0]} alt="" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {cart.title}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {cart.category.name}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP:{" "}
            {cart.quantity > 1
              ? `${cart.quantity} x ${cart.price} = ₹${
                  cart.quantity * cart.price
                }`
              : `₹${cart.price}`}
          </div>

          <div className="mt-2">
            <RiDeleteBin6Line
              className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
              onClick={() => handleDelete(cart.id)}
            />
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Golf Shoes
        </div>
      </div>
    </div>
  );
};

export default CartItem;
