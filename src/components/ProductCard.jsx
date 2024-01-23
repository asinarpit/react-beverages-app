import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};
const ProductCard = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <motion.div
      variants={variants}
      className="w-full h-full flex flex-col overflow-hidden  rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.3),0px_1px_0px_0px_rgba(25,28,33,0.05),0px_0px_0px_1px_rgba(25,28,33,0.1)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]"
    >

      <div className="h-full max-h-[200px] w-full ">
      <img
        className="object-cover w-full h-full"
        src={item.image}
        alt={`${item.name}.jpg`}
      />

      </div>

      <div className=" p-5 flex flex-col h-full justify-between text-center gap-2 ">
        <h2 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis ">{item.name}</h2>
        <p className="text-xs text-gray-400">{item.description}</p>
        <span className=" font-semibold">$ {item.price}</span>

        {cart.some((i) => i.id === item.id) ? (
          <motion.button
            whileHover={{
              borderColor: "#ee6c4d",
              color: "#ee6c4d",
              
            }}
            whileTap={{ scale: 0.9 }}
            onClick={removeFromCart}
            className="py-2 px-4 self-center text-sm font-semibold rounded-full whitespace-nowrap"
          >
            Remove Item
          </motion.button>
        ) : (
          <motion.button
            whileHover={{
              borderColor: "#ee6c4d",
              color: "#ee6c4d",
              
            }}
            whileTap={{ scale: 0.9 }}
            onClick={addToCart}
            className="relative py-2 px-4 self-center text-sm font-semibold rounded-full whitespace-nowrap group flex justify-center items-center group overflow-hidden"
          >
            Add to cart
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
