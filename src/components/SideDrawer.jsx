import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";

const SideDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // function to handle sidedrawer
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    document.body.style.overflow = isDrawerOpen ? "auto" : "hidden";
  };

  const variants = {
    initial: {
      x: "-100%",
    },

    open: {
      x: "0%",
    },

    closed: {
      x: "-100%",
      transition: {
        delay: 0.4,
      },
    },
  };

  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },

    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },

    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = ["Home", "Shop", "About", "Contact"];

  return (
    <AnimatePresence>
      <span onClick={toggleDrawer} className="flex md:hidden cursor-pointer">
        <FaBars />
      </span>

      <>
        {/* Sidedrawer  */}
        <motion.div
          className="bg-[#1a1f2b] text-[#e0e0e0] fixed top-0 left-0 h-screen w-[300px] z-20 "
          variants={variants}
          initial="initial"
          animate={isDrawerOpen ? "open" : "closed"}
          transition={{ duration: 0.2, type: "tween" }}
        >
          <div className="p-5">
          <img
            src="/pop-planet-logo.png"
            className="w-[180px] mx-auto"
            alt="pop planet logo"
          />
          </div>
      

          <motion.ul
            initial="closed"
            variants={listVariants}
            animate={isDrawerOpen ? "open" : "closed"}
            className="flex flex-col justify-center items-center py-20 gap-10 text-3xl"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ color: "#ee6c4d", scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDrawer}
              >
                <NavLink to={index === 0 ? "/" : `/${item}`}>{item}</NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <span
            onClick={toggleDrawer}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <IoCloseOutline size={30} />
          </span>
        </motion.div>

        {/* Overlay */}
        {isDrawerOpen && (
          <motion.div
            className="bg-black fixed top-0 left-0 z-10 w-screen h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </>
    </AnimatePresence>
  );
};

export default SideDrawer;
