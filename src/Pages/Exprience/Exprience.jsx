import React from "react";

const Exprience = () => {
  return (
    <div className="py-20">
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className="group cursor-pointer">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 group-hover:text-red-600 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 w-full  py-5 bg-gray-800 text-gray-300 rounded-lg px-10 group-hover:shadow-lg group-hover:shadow-pink-500 transition-all duration-300  inline-block">
              <div className="text-xl text-start font-black pb-3">
                Epd Group
              </div>
              <ul className=" text-start text-lg leading-6">
                <li cl>Position: Mern Stack Developer</li>
                <li>Duration: 11 Months (Year 2022, 11th Month)</li>

                <p
                  style={{
                    lineHeight: "1.5",
                    wordSpacing: "-3px",
                    letterSpacing: "0.5px",
                  }}
                  className="leading-5 text-justify tracking-tight pt-3"
                >
                  As a React Developer at EPD Group, I played a key role in
                  developing and maintaining front-end components for various
                  web applications. Collaborating closely with cross-functional
                  teams, I contributed to the implementation of responsive and
                  visually appealing user interfaces, ensuring seamless
                  integration with back-end systems.
                </p>
              </ul>
            </div>
            <hr />
          </li>
          <li className="group cursor-pointer">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 group-hover:text-red-600 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end   md:text-end mb-10 w-full  py-5 bg-gray-800 text-gray-300 rounded-lg px-10 group-hover:shadow-lg group-hover:shadow-pink-500 transition-all duration-300  inline-block">
              <div className="text-xl text-start font-black pb-3">
                Sohoj IT & Freelancing Care
              </div>
              <ul className=" text-start text-lg leading-6">
                <li cl>Position: React Developer</li>
                <li>Duration: Since 2023</li>

                <p
                  style={{
                    lineHeight: "1.5",
                    wordSpacing: "-3px",
                    letterSpacing: "0.5px",
                  }}
                  className="leading-5 text-justify tracking-tight pt-3"
                >
                  As a React Developer at Sohoj IT, I am responsible for
                  spearheading the development and optimization of front-end
                  applications that align with our clients' needs and
                  objectives. Collaborating closely with cross-functional teams,
                  I bring innovative ideas to the table and execute projects
                  with precision and efficiency.
                </p>
              </ul>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Exprience;
