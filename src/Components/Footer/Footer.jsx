import React from "react";
import logo from "../../assets/banner-01.png";

const Footer = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto lg:px-0 md:px-0 px-3">
        <div className=" w-[60px] h-[60px] rounded-full shadow-xl shadow-gray-700/55 mx-auto bg-gradient-to-r from-violet-500 to-pink-500">
          <img
            className="w-full h-full object-contain rounded-full"
            src={logo}
            alt=""
          />
        </div>
        <h4 className="text-center pt-5 font-bold tracking-tight text-gray-500">
          © 2022. All rights, Made by <i>Sazzad</i>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
