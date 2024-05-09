import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const animateScope = (delay) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      repeat: Infinity,
      duration: 1.4,
      repeatType: "reverse",
      else: "Linear",
      delay: delay,
    },
  },
});

const HeroLeft = () => {
  return (
    <div className="w-full lg:order-last md:order-last order-last">
      <motion.h4
        whileHover={{ letterSpacing: "3px" }}
        transition={{ type: "spring", stiffness: 320 }}
        className="text-lg font-Poppins font-semibold inline-block cursor-pointer"
      >
        WELCOME TO MY WORLD
      </motion.h4>
      <div className="py-5">
        <motion.h1
          whileHover={{ letterSpacing: "3px" }}
          transition={{ type: "spring", stiffness: 320 }}
          className="lg:text-6xl md:text-6xl sm:text-3xl text-xl inline-block font-bold  font-Poppins"
        >
          Hi, I’m <span className="text-violet-500 font-Poppins">Sazzad</span>
        </motion.h1>
      </div>
      <motion.div
      // whileHover={{ letterSpacing: "1px" }}
      // transition={{ type: "spring", stiffness: 320 }}
      >
        <span className="lg:text-6xl md:text-6xl sm:text-3xl text-xl">a</span>
        <TypeAnimation
          sequence={["Developer.", 1000, "Professional Coder.", 1000]}
          speed={50}
          className="lg:text-6xl md:text-6xl sm:text-3xl text-3xl pl-4 font-bold"
          repeat={Infinity}
        />
      </motion.div>
      <motion.p
        initial={{
          textShadow: "3px 3px 3px rgba(000, 0, 0, 0.5)",
        }}
        whileHover={{
          textShadow: "0px 0px 3px rgba(000, 0, 0, 0.5)",
        }}
        className=" pt-10 text-lg tracking-tight font-medium text-gray-400"
      >
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I’m not adding motion just
        to spruce things up, but doing it in ways that.
      </motion.p>

      <div className="lg:flex md:flex justify-between items-center py-10">
        {/* find with me */}
        <div className=" w-full flex flex-col justify-center items-center lg:items-start md:items-start">
          <h2 className=" text-lg font-semibold tracking-wide py-2">
            FIND WITH ME
          </h2>
          <div className=" flex items-center gap-5">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100011271842054"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 320 }}
            >
              <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                <FaFacebookF size="22px" className="" />
              </div>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 320 }}
              className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer  shadow-lg shadow-violet-500/55 hover:shadow-red-500/55"
            >
              <FaTwitter size="22px" className=" " />
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 320 }}
              href="https://www.linkedin.com/in/md-sazzad-hossain-b11a31254/"
              target="_blank"
            >
              <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer shadow-violet-500/55 hover:shadow-red-500/55">
                <FaLinkedinIn size="20px" className=" block" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* best skill */}
        <div className=" w-full flex flex-col justify-center items-center lg:justify-center md:justify-center lg:items-start md:items-start">
          <h2 className=" text-lg font-semibold tracking-wide py-2">
            BEST SKILL ON
          </h2>
          <div className=" flex items-center gap-5">
            <motion.div
              variants={animateScope(0.1)}
              initial="initial"
              animate="animate"
              className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer  shadow-lg shadow-violet-500/55 hover:shadow-red-500/55"
            >
              <FaReact size="22px" className="" />
            </motion.div>
            <motion.div
              variants={animateScope(0.3)}
              initial="initial"
              animate="animate"
              className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer  shadow-lg shadow-violet-500/55 hover:shadow-red-500/55"
            >
              <FaNodeJs size="22px" className="" />
            </motion.div>
            <motion.div
              variants={animateScope(0.5)}
              initial="initial"
              animate="animate"
              className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer  shadow-lg shadow-violet-500/55 hover:shadow-red-500/55"
            >
              <IoLogoJavascript size="22px" className="" />
            </motion.div>
            <motion.div
              variants={animateScope(0.7)}
              initial="initial"
              animate="animate"
              className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer  shadow-lg shadow-violet-500/55 hover:shadow-red-500/55"
            >
              <SiRedux size="22px" className="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
