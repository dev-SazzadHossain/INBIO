import React from 'react';
import { BiCollapse } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWebflow } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md"
import { FaRegFilePdf } from "react-icons/fa6";


const Features = () => {
    return (
        <div id='features' className=''>
            <div className=' container mx-auto py-20'>
                <h2 className=' text-xl font-semibold  tracking-wide text-violet-600'>Features</h2>
                <span className=' text-6xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 pt-3 pb-10 inline-block'>What I Do</span>


                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5'>
                    {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group '>
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <BiCollapse size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Ui Design</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}
                          {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group'>
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <FaWebflow size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Web Design</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}
                          {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group'>
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <MdOutlineDeveloperMode size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Web Developer</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}
                     {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group'>
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <FaRegFilePdf size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Pdf To Html Design</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}
                     {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group'>
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <BiCollapse size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Figma To Html Design</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}
                     {/* section1 */}
                   <div className=' w-full h-[300px] shadow-lg shadow-violet-500 rounded-lg overflow-hidden group transition-all duration-300 cursor-pointer group' >
                   <div  className=' w-[90%] mx-auto py-3 translate-y-3 group-hover:translate-y-0 transition-all duration-300'>
                        <div className=' w-[40px] h-[40px] bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-lg flex justify-center items-center my-3'>
                           <BiCollapse size="33px"/>
                        </div>
                        <h3 className='py-3 text-2xl font-semibold'>Email Template Design</h3>
                        <p className=' leading-5 text-justify font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum at magnam aut, totam provident! Dicta, blanditiis possimus cumque debitis cupiditate autem quos veniam nam commodi esse quaerat, voluptatem quisquam.</p>
                        <div className='py-5  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                           <FaArrowRightLong size="33px" color="#f4f4f4"/>
                        </div>
                    </div>
                   </div>
                    {/* section1 */}


                </div>
            </div>
        </div>
    );
};

export default Features;