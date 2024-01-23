import React, { useRef } from "react";
import ProductCarousel from "./ProductCarousel";
import { motion, transform, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SectionWithCarousel = ({ headline, subtext, data }) => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView && "visible"}
        viewport={{ once: "true" }}
        variants={variants}
        className="max-w-7xl mx-auto px-5 py-10 flex flex-col"
      >
        <div className="flex justify-between">
          <motion.h2
            whileHover={{ color: "#ee6c4d" }}
            variants={variants}
            className="text-3xl md:text-5xl font-bold"
          >
            {headline}
          </motion.h2>

          <div className="flex items-center text-right gap-2 md:gap-5 ">
            <span className="w-[100px] md:w-[200px] text-sm md:text-2xl font-thin ">
              {subtext}
            </span>
            <hr className="border-gray-100 w-[50px] md:w-[200px]" />
          </div>
        </div>

        <ProductCarousel data={data} />
        <motion.button
          whileHover={{ color: "#ee6c4d", borderColor: "#ee6c4d" }}
          className="self-center flex items-center gap-2  px-8 py-3 my-5 font-bold text-lg rounded-full"
        >
          <NavLink to="/shop">Explore More</NavLink>

          <motion.span
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 10, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FaArrowRight />
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SectionWithCarousel;
