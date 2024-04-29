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

const HeroLeft = () => {
  return (
    <div className="w-full lg:order-last md:order-last order-last">
      <h4 className="text-lg font-Poppins font-semibold tracking-wide hover:tracking-wider transition-all duration-300 cursor-pointer">
        WELCOME TO MY WORLD
      </h4>
      <div className="py-5">
        <h1 className="lg:text-6xl md:text-6xl sm:text-3xl text-xl font-bold  font-Poppins">
          Hi, I’m{" "}
          <span className="text-violet-500 font-Poppins">
            Sukar Tongchongya
          </span>
        </h1>
      </div>
      <div>
        <span className="lg:text-6xl md:text-6xl sm:text-3xl text-xl">a</span>
        <TypeAnimation
          sequence={["Developer.", 1000, "Professional Coder.", 1000]}
          speed={50}
          className="lg:text-6xl md:text-6xl sm:text-3xl text-3xl pl-4 font-bold"
          repeat={Infinity}
        />
      </div>
      <p className=" pt-10 text-lg tracking-tight font-medium text-gray-600">
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I’m not adding motion just
        to spruce things up, but doing it in ways that.
      </p>

      <div className="lg:flex md:flex justify-between items-center py-10">
        {/* find with me */}
        <div className=" w-full flex flex-col justify-center items-center lg:items-start md:items-start">
          <h2 className=" text-lg font-semibold tracking-wide py-2">
            FIND WITH ME
          </h2>
          <div className=" flex items-center gap-5">
            <Link
              to="https://www.facebook.com/profile.php?id=100011271842054"
              target="_blank"
            >
              <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                <FaFacebookF
                  size="22px"
                  className=" group-hover:scale-125 scale-100 transition-all duration-300 "
                />
              </div>
            </Link>
            <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
              <FaTwitter
                size="22px"
                className=" group-hover:scale-125 scale-100 transition-all duration-300 "
              />
            </div>
            <Link
              to="https://www.linkedin.com/in/md-sazzad-hossain-b11a31254/"
              target="_blank"
            >
              <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
                <FaLinkedinIn
                  size="22px"
                  className=" group-hover:scale-125 scale-100 transition-all duration-300 "
                />
              </div>
            </Link>
          </div>
        </div>

        {/* best skill */}
        <div className=" w-full flex flex-col justify-center items-center lg:justify-center md:justify-center lg:items-start md:items-start">
          <h2 className=" text-lg font-semibold tracking-wide py-2">
            BEST SKILL ON
          </h2>
          <div className=" flex items-center gap-5">
            <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
              <FaReact
                size="22px"
                className=" group-hover:scale-125 scale-100 transition-all duration-300 "
              />
            </div>
            <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
              <FaNodeJs
                size="22px"
                className=" group-hover:scale-125 scale-100 transition-all duration-300 "
              />
            </div>
            <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
              <IoLogoJavascript
                size="22px"
                className=" group-hover:scale-125 scale-100 transition-all duration-300 "
              />
            </div>
            <div className=" w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55">
              <SiRedux
                size="22px"
                className=" group-hover:scale-125 scale-100 transition-all duration-300 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
