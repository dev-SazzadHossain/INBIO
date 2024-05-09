import React from "react";
import logo from "../../assets/banner-01.png";
import { motion } from "framer-motion";

const initialState = {
  skew: {
    skewY: "-20deg",
  },
  hover: {
    skewY: 0,
    origin: 0,
    boxShadow: "0 0 8px rgba(255,255,255)",
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 320,
    },
  },
};

const HeroRight = () => {
  return (
    <div className="w-full lg:order-last md:order-first order-first lg:py-0  py-10">
      <motion.div
        variants={initialState}
        initial="skew"
        whileHover="hover"
        className=" lg:w-[70%] md:w-full w-full h-[400px] bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-lg  relative z-10 shadow-lg  cursor-pointer"
      >
        <img
          className=" absolute z-40 opacity-100 bottom-0 left-0  h-[450px]   object-contain w-full rounded-lg "
          src={logo}
          alt=""
        />
        {/* <div className='absolute left-0 top-0 h-full w-full bg-black z-50 opacity-70'></div> */}
      </motion.div>
    </div>
  );
};

export default HeroRight;
