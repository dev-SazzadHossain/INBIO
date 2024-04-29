import React from "react";
import projectPic from "../../assets/portfolio-01.jpg";
import { Link } from "react-router-dom";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project3.png";
import project3 from "../../assets/project4.png";

const projectList = [
  {
    image: project1,
    projectName: "Pos Leading Page",
    liveLink: "https://charming-sunburst-a47016.netlify.app/",
    githubLink: "https://github.com/dev-SazzadHossain/landing_page",
  },
  {
    image: project2,
    projectName: "Epd Group",
    liveLink: "https://superlative-puppy-456eec.netlify.app/",
    githubLink: "https://github.com/dev-SazzadHossain/epd-solution-website",
  },
  {
    image: project3,
    projectName: "Doctor Popy",
    liveLink: "https://dev-sazzadhossain.github.io/Doctor_Dev/index.html",
    githubLink: "https://github.com/reovilsayed/doctorPopy",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-20">
      <h4 className=" text-lg text-center font-semibold  tracking-wide text-violet-600">
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </h4>
      <h1 className=" text-6xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 pt-3 pb-10  text-center">
        My Portfolio
      </h1>

      {/* project list */}
      <div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
          {projectList?.map((project, index) => {
            const { image, projectName, liveLink, githubLink } = project;
            return (
              <>
                {" "}
                {/* project 1 */}
                <div
                  key={index}
                  className=" w-full h-[400px]  shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 px-5 hover:bg-gray-900 hover:shadow-gray-600 cursor-pointer"
                >
                  <div className="w-[100%] h-[160px] mx-auto  overflow-hidden my-5 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-400 transition-all duration-300   ">
                    <img
                      className=" w-full  h-full object-cover rounded-lg scale-100 group-hover:scale-125 transition-all duration-300 "
                      src={image}
                      alt={projectName}
                    />
                  </div>

                  <h3 className=" h-[60px] text-lg font-semibold tracking-wide text-justify">
                    {projectName}
                  </h3>

                  <div className=" ">
                    <span className=" text-[14px] font-semibold text-rose-600">
                      Live Link :
                    </span>
                    <Link
                      target="_blank"
                      to={liveLink}
                      className=" text-[12px] font-bold underline hover:text-violet-500 transition-all duration-300"
                    >
                      {" "}
                      {liveLink}
                    </Link>
                  </div>
                  <div className="  py-2">
                    <span className=" text-[14px] font-semibold text-rose-600">
                      Github Link :
                    </span>
                    <Link
                      target="_blank"
                      to={githubLink}
                      className=" text-[12px] underline font-bold hover:text-violet-500 transition-all duration-300"
                    >
                      {" "}
                      {githubLink}
                    </Link>
                  </div>
                </div>
                {/* project 1 */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
