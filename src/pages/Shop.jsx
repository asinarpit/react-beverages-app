import React, { useState } from "react";
import productsData from "../data/data";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};
const Shop = () => {
  const [toggleAnimation, setToggleAnimation] = useState(false);

  const allData = productsData.featured.concat(
    productsData.newArrivals,
    productsData.topPicks
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeItem, setActiveItem] = useState(0);


  const handleAnimation = () => {
    // Toggle the state to trigger the animation again
    setToggleAnimation(!toggleAnimation);
  };

  // handle item filter item click (filter + active)
  const handleFilter = (category, index) => {
    setSelectedCategory(category);
    setActiveItem(index);
  };
  useEffect(() => {
    // Update filteredProducts based on the selected category
    if (selectedCategory === "all") {
      setFilteredProducts(allData);
    } else {
      setFilteredProducts(productsData[selectedCategory]);
    }

    handleAnimation();
  }, [selectedCategory]);

  return (
    <div className=" w-full py-20">
      <div className="max-w-7xl mx-auto px-5 ">
        {/* filter menu */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex items-center py-10  text-sm gap-5 flex-wrap"
        >
          <motion.button
            variants={variants}
            onClick={() => handleFilter("all", 0)}
            className={`px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap ${
              activeItem === 0 ? "active" : ""
            } `}
          >
            All
          </motion.button>
          <motion.button
            variants={variants}
            onClick={() => handleFilter("featured", 1)}
            className={`px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap ${
              activeItem === 1 ? "active" : ""
            } `}
          >
            Featured
          </motion.button>
          <motion.button
            variants={variants}
            onClick={() => handleFilter("newArrivals", 2)}
            className={`px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap ${
              activeItem === 2 ? "active" : ""
            } `}
          >
            New Arrivals
          </motion.button>
          <motion.button
            variants={variants}
            onClick={() => handleFilter("topPicks", 3)}
            className={`px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap ${
              activeItem === 3 ? "active" : ""
            } `}
          >
            Top Picks
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          key={toggleAnimation ? "on" : "off"}
          className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5"
        >
          {filteredProducts.map((item, index) => (
            <ProductCard index={index} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
