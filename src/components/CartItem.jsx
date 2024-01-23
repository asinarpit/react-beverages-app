import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  remove,
} from "../redux/slices/CartSlice";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemoveItem = () => {
    dispatch(remove(item.id));
  };
  return (
    <div className="w-full py-5 border-b-2 ">
      <div className="flex flex-col justify-between items-center md:flex-row text-center gap-5 p-5">
        <img
          loading="lazy"
          className="w-[200px] h-full object-cover"
          src={item.image}
          alt={`${item.name}.png`}
        />

        <div className="leading-10">
          <h2 className="font-bold">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.description}</p>
          <p className="font-bold">${item.price}</p>
        </div>

        {/* quantity inc dec + remove buttons */}
        <div className="flex flex-row self-center items-center gap-5">
          <div className="flex">
            <button
              className="h-5 w-5 flex justify-center items-center"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <p className="h-5 w-10 flex justify-center items-center">
              {item.quantity}
            </p>
            <button
              className="h-5 w-5 flex justify-center items-center"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>

          {/* remove item button */}
          <FaTrash
            onClick={handleRemoveItem}
            className="text-[#ee6c4d]"
            size={15}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
