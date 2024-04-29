import React, { useEffect, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import cv from "../../assets/Md-Sazzad-Hossain-FlowCV-Resume-20240311.pdf";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const location = useLocation();
  console.log(location);
  const [widthSize, setWidthSize] = useState(null);

  //   TODO: text class
  //TODO:

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWidthSize(width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    widthSize > 1024 && setOpen(false);
  }, [widthSize]);

  return (
    <div>
      <div className="z-50 fixed  w-full shadow-md shadow-violet-400/35 ">
        <div className="container mx-auto lg:px-0 md:px-0 sm:px-3 px-3">
          <div className=" bg-inherit flex justify-between items-center py-2  transition-all duration-300 ease-in-out font-Poppins cursor-pointer">
            <a href="/">
              {" "}
              <h2 className="group flex items-center gap-2">
                <div className=" w-[50px] h-[50px]  shadow-lg shadow-violet-500/45  rounded-full ring-2">
                  <img
                    className=" w-full h-full object-cover rounded-full"
                    src={logo}
                    alt=""
                  />
                </div>{" "}
                <span className="group-hover:tracking-wider transition-all duration-300  font-semibold font-Poppins text-2xl text-violet-500  tracking-normal">
                  INBIO
                </span>
              </h2>
            </a>
            {/* laptop and desktop device */}
            <ul
              className={`lg:flex items-center gap-5 capitalize lg:static md:hidden sm:hidden hidden   lg:w-fit w-[50%] lg:h-fit h-screen lg:bg-inherit bg-inherit transition-all duration-500 lg:shadow-none shadow-md shadow-violet-800/80  lg:px-0 px-5  lg:pt-0 pt-3 z-50 group/main`}
            >
              <li
                className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                  location?.hash == "#home"
                    ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#home">HOME</a>
              </li>

              <li
                className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                  location?.hash == "#features"
                    ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#features">FEATURES</a>
              </li>
              <li
                className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                  location?.hash == "#portfolio"
                    ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#portfolio"> PORTFOLIO</a>
              </li>
              <li
                className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                  location?.hash == "#education"
                    ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#education"> EDUCATION</a>
              </li>

              <li
                className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                  location?.hash == "#contact"
                    ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#contact">CONTACT</a>
              </li>

              <div className="lg:block flex justify-center items-center lg:pt-0 pt-5">
                <a href={cv} download="Sazzad_Resume">
                  <button className=" group border-none outline-none text-lg tracking-normal hover:tracking-wider transition-all duration-300  hover:text-white px-5 py-1 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity">
                    Download Resume{" "}
                    <span className="group-hover:translate-x-2 transition-all duration-300    group-hover/arrowOpacity:opacity-100 opacity-0">
                      <svg
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </ul>
            {/* mobile icons */}
            <div
              className={`lg:hidden block ${
                open
                  ? "transition-all duration-300"
                  : "transition-all duration-300"
              }`}
              onClick={() => setOpen((prv) => !prv)}
            >
              <>
                {!open ? (
                  <span>
                    <MdOutlineMenuOpen fontSize="38px" />
                  </span>
                ) : (
                  <span>
                    <MdOutlineRestaurantMenu fontSize="38px" />
                  </span>
                )}
                <Drawer
                  open={open}
                  onClose={toggleDrawer}
                  direction="left"
                  className="bla bla bla"
                  size="50%"
                >
                  <ul
                    className={`lg:flex items-center gap-5 capitalize w-full h-screen   bg-gray-900 transition-all duration-500 lg:shadow-none shadow-md shadow-violet-800/80  lg:px-0 px-5  lg:pt-0 pt-3 z-50 group/main`}
                  >
                    <li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                        location?.hash == "#home"
                          ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#home">HOME</a>
                    </li>

                    <li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                        location?.hash == "#features"
                          ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#features">FEATURES</a>
                    </li>
                    <li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                        location?.hash == "#portfolio"
                          ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                        location?.hash == "#education"
                          ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#education">EDUCATION</a>
                    </li>

                    <li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal hover:tracking-wider transition-all duration-300 ${
                        location?.hash == "#contact"
                          ? "text-gray-200 tracking-wider text-2xl scale-105 duration-300 transition-all"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#contact">CONTACT</a>
                    </li>

                    <div className="lg:block flex justify-center items-center lg:pt-0 pt-5">
                      <a href={cv} download="Sazzad_Resume">
                        <button className=" group border-none outline-none text-lg tracking-normal hover:tracking-wider transition-all duration-300  hover:text-white px-5 py-1 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity">
                          Download Resume{" "}
                          <span className="group-hover:translate-x-2 transition-all duration-300    group-hover/arrowOpacity:opacity-100 opacity-0">
                            <svg
                              className="h-5 w-5 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </button>
                      </a>
                    </div>
                  </ul>
                </Drawer>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
