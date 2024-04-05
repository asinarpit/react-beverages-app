import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";

const variants = {
  initial: {
    x: "100%",
  },

  open: {
    x: "0%",
  },

  closed: {
    x: "100%",
    transition: {
      delay: 0.2,
    },
  },
};


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [isCartOpen, setCartOpen] = useState(false);


  // function to handle cart
  const toggleCart = () => {
    setCartOpen((prev) => !prev);
    document.body.style.overflow = isCartOpen ? "auto" : "hidden";
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <AnimatePresence>
      <span className="cursor-pointer" onClick={toggleCart}>
        <FaShoppingCart size={15} />
      </span>

      <motion.div
        className=" bg-[#1a1f2b] text-[#e0e0e0] fixed top-0 right-0 h-full min-h-screen w-[300px]  sm:w-[50%] z-20 overflow-y-auto"
        variants={variants}
        initial="initial"
        animate={isCartOpen ? "open" : "closed"}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <span
          onClick={toggleCart}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoCloseOutline size={30} />
        </span>

        <h2 className="text-5xl  p-5">My Cart</h2>

        {cart.length > 0 ? (
          <>
            <motion.ul
              className="flex flex-col"
            >
              {cart.map((item) => (
                <motion.li key={item.id}>
                  <CartItem item={item} />
                </motion.li>
              ))}
            </motion.ul>

            <div className="p-5 flex flex-col text-center gap-5">
              <h2 className="text-sm font-semibold uppercase">Subtotal</h2>
              <p className="text-lg font-bold">MRP ${calculateTotal()}</p>
              <p className="text-xs">
                Incl. of all taxes. Shipping calculated at checkout.
              </p>
            </div>

            <div className="sticky w-full flex justify-center items-center bg-[#1a1f2b] right-0 bottom-0 z-30 p-5 shadow-[0px_-20px_20px_-15px_#00000024]">
              <button className="z-30 py-2 w-full text-sm rounded-md bg-[#ee6c4d] font-semibold">
                Check Out
              </button>
            </div>
          </>
        ) : (
          <div className="p-5 text-lg">Your cart is empty</div>
        )}
      </motion.div>

      {/* Overlay */}
      {isCartOpen && (
        <motion.div
          className="bg-black fixed top-0 left-0 z-10 w-screen h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
