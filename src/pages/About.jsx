import React from "react";
import {
  RiTwitterXFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";
import {motion} from 'framer-motion'
import { NavLink } from "react-router-dom";

const variants={
  hidden:{
    y:100,
    opacity:0
  },

  visible:{
    y:0,
    opacity:1,
    transition:{
      staggerChildren:0.2
    }
    
  }
}

const About = () => {
  return (
    <div name="about" className="w-full h-full">
      <motion.div className="max-w-5xl mx-auto px-5 py-40 flex flex-col-reverse md:flex-row justify-between gap-5  " variants={variants} initial="hidden" animate="visible" >
        <div className="flex flex-col gap-5 w-full max-w-[500px] justify-between ">
          <motion.div variants={variants} className="flex flex-col gap-5 leading-[1.5rem]">
            <motion.h1 variants={variants} className="text-5xl">About Us</motion.h1>
            <motion.p variants={variants}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              autem hic pariatur perferendis totam ipsa, est dolores odio quo
              officiis iure laudantium vitae laboriosam libero vero provident,
              dolorem sunt earum quos rerum nam! Similique, in hic ab maiores
              praesentium odit nihil aut quisquam. In nihil obcaecati assumenda?
              Porro tempora illum atque, quae asperiores eaque, at odit dolor
              provident unde incidunt.
            </motion.p>
          </motion.div>

            <motion.div variants={variants} className="flex justify-between items-center">
              <NavLink to="/contact">
              <motion.button variants={variants}  whileHover={{borderColor:"#e2714f", color:"#e2714f"}}  className="self-start py-2 px-3">Contact Us</motion.button>

              </NavLink>
            

          <motion.div variants={variants} className="flex gap-5">
            <RiFacebookBoxFill className="cursor-pointer" size={30} />
            <RiInstagramFill className="cursor-pointer" size={30} />
            <RiTwitterXFill className="cursor-pointer" size={30} />
          </motion.div>
            </motion.div>
          

        </div>

        <div>
          <img
            className="h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/19314677/pexels-photo-19314677/free-photo-of-coca-cola-truck-near-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about-img"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
