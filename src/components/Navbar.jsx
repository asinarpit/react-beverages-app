import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaUser } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import Cart from "./Cart";

const Navbar = () => {
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  

  // animating bg of navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: "rgb(26, 31, 43)" }}
      animate={{
        backgroundColor: isHomePage
          ? isScrolled
            ? "rgb(26, 31, 43,1)"
            : "rgb(26, 31, 43,0)"
          : "",
        color: isScrolled || !isHomePage ? "white" : "black",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed z-10 w-full top-0 shadow-xl bg-[#1a1f2b] text-[#e0e0e0]"
    >
      <nav className="max-w-7xl h-20 mx-auto flex items-center justify-between px-5">
        {/* Mobile menu  */}
        <SideDrawer />

        {/* logo */}
        <img
          src="https://download.logo.wine/logo/Coca-Cola/Coca-Cola-Logo.wine.png"
          className="w-24"
          alt="log"
        />

        {/* Center */}
        <ul className="hidden md:flex gap-5 text-base">
          <li>
            <NavLink to="/" activeclassname="active">
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeclassname="active">
              {" "}
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              {" "}
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex gap-5">
          <span className="cursor-pointer">
            {" "}
            <FaSearch size={15} />
          </span>

          <span className="cursor-pointer">
            <FaUser size={15} />
          </span>

          <span>
            <Cart/>
          </span>
       
        </div>

        
      </nav>
    </motion.div>
  );
};

export default Navbar;
