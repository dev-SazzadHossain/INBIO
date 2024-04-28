import React from 'react';
import projectPic from "../../assets/portfolio-01.jpg"
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='py-20'>
            <h4 className=' text-lg text-center font-semibold  tracking-wide text-violet-600'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1 className=' text-6xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 pt-3 pb-10  text-center' >My Portfolio</h1>



            {/* project list */}
            <div>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {/* project 1 */}
                    <div className=' w-full h-[400px]  shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 px-5 hover:bg-gray-900 hover:shadow-gray-600 cursor-pointer'>
                        <div className='w-[100%] h-[160px] mx-auto  overflow-hidden my-5 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-400 transition-all duration-300   '>
                            <img className=' w-full  h-full object-cover rounded-lg scale-100 group-hover:scale-125 transition-all duration-300 ' src={projectPic} alt="" />
                        </div>

                    <h3 className=' h-[60px] text-lg font-semibold tracking-wide text-justify'>App Design Development.
                    </h3>

                    <div className=' '>
                        <span className=' text-[14px] font-semibold text-rose-600'>Live Link :</span>
                    <Link className=' text-[12px] font-bold underline hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>
                    <div className='  py-2'>
                        <span className=' text-[14px] font-semibold text-rose-600'>Github Link :</span>
                    <Link className=' text-[12px] underline font-bold hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>

                    </div>
                    {/* project 1 */}

                      {/* project 1 */}
                      <div className=' w-full h-[400px]  shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 px-5 hover:bg-gray-900 hover:shadow-gray-600 cursor-pointer'>
                        <div className='w-[100%] h-[160px] mx-auto  overflow-hidden my-5 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-400 transition-all duration-300   '>
                            <img className=' w-full  h-full object-cover rounded-lg scale-100 group-hover:scale-125 transition-all duration-300 ' src={projectPic} alt="" />
                        </div>

                    <h3 className=' h-[60px] text-lg font-semibold tracking-wide text-justify'>App Design Development.
                    </h3>

                    <div className=''>
                        <span className=' text-[14px] font-semibold text-rose-600'>Live Link :</span>
                    <Link className=' text-[12px] font-bold underline hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>
                    <div className=' py-2'>
                        <span className=' text-[14px] font-semibold text-rose-600'>Github Link :</span>
                    <Link className=' text-[12px] underline font-bold hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>

                    </div>
                    {/* project 1 */}
                      {/* project 1 */}
                      <div className=' w-full h-[400px]  shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 px-5 hover:bg-gray-900 hover:shadow-gray-600 cursor-pointer'>
                        <div className='w-[100%] h-[160px] mx-auto  overflow-hidden my-5 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-400 transition-all duration-300   '>
                            <img className=' w-full  h-full object-cover rounded-lg scale-100 group-hover:scale-125 transition-all duration-300 ' src={projectPic} alt="" />
                        </div>

                    <h3 className=' h-[60px] text-lg font-semibold tracking-wide text-justify'>App Design Development.
                    </h3>

                    <div className=' '>
                        <span className=' text-[14px] font-semibold text-rose-600'>Live Link :</span>
                    <Link className=' text-[12px] font-bold underline hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>
                    <div className='  py-2'>
                        <span className=' text-[14px] font-semibold text-rose-600'>Github Link :</span>
                    <Link className=' text-[12px] underline font-bold hover:text-violet-500 transition-all duration-300'> https://charming-sunburst-a47016.netlify.app/</Link>
                    </div>

                    </div>
                    {/* project 1 */}

                </div>
            </div>
        </div>
    );
};

export default Portfolio;