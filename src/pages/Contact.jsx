import { motion } from "framer-motion";
import React from "react";
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


const Contact = () => {
  return (
    <motion.div
      name="contact"
      className="w-full h-screen flex justify-center items-center overflow-hidden p-4"
    >
      <motion.form
            initial="hidden"
            animate="visible"
            variants={variants}
        action="#"
        method="POST"
        className="flex flex-col max-w-[600px] pt-20 w-full"
      >
        <motion.div variants={variants} className="pb-5">
          <p className="text-5xl  inline  ">Contact Us</p>
        </motion.div>

        <motion.input
        required
          variants={variants}
          className="p-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <motion.input
        required
          variants={variants}
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <motion.textarea
        variants={variants}
          className="bg-[#ccd6f6] text-black p-2"
          placeholder="Message"
          name="message"
          rows="8"
        ></motion.textarea>

        <motion.button whileHover={{borderColor:"#e2714f", color:"#e2714f"}} variants={variants} className="text-white border-2 hover:bg-yellow px-4 py-3 m-8 mx-auto flex items-center font-semibold">
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
