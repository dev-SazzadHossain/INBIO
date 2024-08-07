import React, { useEffect, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/remove_bg.png";
import cv from "../../assets/Md-Sazzad-Hossain-FlowCV-Resume-20240311.pdf";
import { motion } from "framer-motion";

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
    <div className=" relative w-full">
      <div className="z-50 fixed  w-full shadow-md shadow-violet-400 bg-inherit drop-shadow-lg ">
        {/* <motion.div
          // initial={{ boxShadow: "1px 6px 5px  4px blue" }}
          // animate={{
          //   boxShadow: ["1px 6px 5px 4px pink", "1px 6px 5px 10px pink"],
          //   transition: {
          //     duration: 1,
          //     repeat: Infinity,
          //     repeatType: "reverse",
          //   },
          // }}
          className=" w-full h-full blur-lg  bg-black/30 z-[10] absolute left-0 right-0"
        ></motion.div> */}

        <motion.div
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 100,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            duration: 10,
          }}
          className="container mx-auto lg:px-0 md:px-0 sm:px-3 px-3"
        >
          <div className=" bg-inherit flex justify-between items-center py-2   font-Poppins cursor-pointer">
            <motion.a
              href="/"
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 100,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                duration: 10,
              }}
            >
              {" "}
              <h2 className="group flex items-center gap-2">
                <div className=" w-[50px] h-[50px]  shadow-lg shadow-violet-500/45  rounded-full ring-2">
                  <img
                    className=" w-full h-full object-cover rounded-full"
                    src={logo}
                    alt=""
                  />
                </div>{" "}
                <span className="group-  font-semibold font-Poppins text-2xl text-violet-500  tracking-normal">
                  INBIO
                </span>
              </h2>
            </motion.a>
            {/* laptop and desktop device */}
            <ul
              className={`lg:flex items-center gap-5 capitalize lg:static md:hidden sm:hidden hidden   lg:w-fit w-[50%] lg:h-fit h-screen lg:bg-inherit bg-inherit transition-all duration-500 lg:shadow-none shadow-md shadow-violet-800/80  lg:px-0 px-5  lg:pt-0 pt-3 z-50 group/main`}
            >
              <motion.li
                whileHover={{ letterSpacing: "2px" }}
                transition={{ type: "spring", stiffness: 200 }}
                className={` text-lg tracking-normal  ${
                  location?.hash == "#home"
                    ? "text-gray-200"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#home">HOME</a>
              </motion.li>

              <motion.li
                whileHover={{ letterSpacing: "2px" }}
                transition={{ type: "spring", stiffness: 200 }}
                className={` text-lg tracking-normal  ${
                  location?.hash == "#features"
                    ? "text-gray-200"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#features">FEATURES</a>
              </motion.li>
              <motion.li
                whileHover={{ letterSpacing: "2px" }}
                transition={{ type: "spring", stiffness: 200 }}
                className={` text-lg tracking-normal  ${
                  location?.hash == "#portfolio"
                    ? "text-gray-200"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#portfolio"> PORTFOLIO</a>
              </motion.li>
              <motion.li
                whileHover={{ letterSpacing: "2px" }}
                transition={{ type: "spring", stiffness: 200 }}
                className={` text-lg tracking-normal  ${
                  location?.hash == "#education"
                    ? "text-gray-200"
                    : "text-violet-500"
                }  hover:text-violet-600 lg:pb-0 pb-2`}
              >
                <a href="#education"> EDUCATION</a>
              </motion.li>

              <motion.li
                whileHover={{ letterSpacing: "2px" }}
                transition={{ type: "spring", stiffness: 200 }}
                className={` text-lg tracking-normal  ${
                  location?.hash == "#contact"
                    ? "text-gray-200 "
                    : "text-violet-500"
                } lg:pb-0 pb-2`}
              >
                <a href="#contact">CONTACT</a>
              </motion.li>

              <div className="lg:block flex justify-center items-center lg:pt-0 pt-5">
                <a href={cv} download="Sazzad_Resume">
                  <motion.button
                    className=" group border-none outline-none lg:text-lg md:text-lg sm:text-lg text-[14px] tracking-normal   px-5 py-2 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    // whileTap={{ scale: 0.9 }}
                  >
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
                  </motion.button>
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
                    <motion.li
                      onClick={() => setOpen(true)}
                      whileHover={{ letterSpacing: "2px" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={` text-lg tracking-normal  ${
                        location?.hash == "#home"
                          ? "text-gray-200"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#home">HOME</a>
                    </motion.li>

                    <motion.li
                      onClick={() => setOpen(true)}
                      whileHover={{ letterSpacing: "2px" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={` text-lg tracking-normal  ${
                        location?.hash == "#features"
                          ? "text-gray-200"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#features">FEATURES</a>
                    </motion.li>
                    <motion.li
                      onClick={() => setOpen(true)}
                      className={` text-lg tracking-normal  ${
                        location?.hash == "#portfolio"
                          ? "text-gray-200"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#portfolio">PORTFOLIO</a>
                    </motion.li>
                    <motion.li
                      onClick={() => setOpen(true)}
                      whileHover={{ letterSpacing: "2px" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={` text-lg tracking-normal  ${
                        location?.hash == "#education"
                          ? "text-gray-200"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#education">EDUCATION</a>
                    </motion.li>

                    <motion.li
                      onClick={() => setOpen(true)}
                      whileHover={{ letterSpacing: "2px" }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={` text-lg tracking-normal  ${
                        location?.hash == "#contact"
                          ? "text-gray-200"
                          : "text-violet-500"
                      }  hover:text-violet-600 lg:pb-0 pb-2`}
                    >
                      <a href="#contact">CONTACT</a>
                    </motion.li>

                    <div className="lg:block flex justify-center items-center lg:pt-0 pt-5">
                      <a href={cv} download="Sazzad_Resume">
                        <motion.button
                          className=" group border-none outline-none lg:text-lg md:text-lg sm:text-lg text-[14px] tracking-normal   px-5 py-3 bg-gradient-to-r from-violet-500  to-pink-500 text-white rounded-lg flex justify-center items-center group/arrowOpacity"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          // whileTap={{ scale: 0.9 }}
                        >
                          Download Resume{" "}
                          <span className="group-hover:translate-x-2 transition-all duration-300    group-hover/arrowOpacity:opacity-100 opacity-0">
                            <svg
                              className="h-4 w-4 "
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
                        </motion.button>
                      </a>
                    </div>
                  </ul>
                </Drawer>
              </>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
