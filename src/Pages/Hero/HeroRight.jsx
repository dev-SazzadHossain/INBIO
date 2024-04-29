import React from 'react';
import logo from "../../assets/banner-01.png"

const HeroRight = () => {
    return (
        <div className='w-full lg:order-last md:order-first order-first lg:py-0  py-10'>
            <div className=' lg:w-[70%] md:w-full w-full h-[400px] bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-lg  relative z-10 shadow-lg hover:shadow-gray-500 transition-all duration-300 cursor-pointer'>
<img className=' absolute z-40 opacity-100 bottom-0 left-0  h-[450px]   object-contain w-full rounded-lg ' src={logo} alt="" />
{/* <div className='absolute left-0 top-0 h-full w-full bg-black z-50 opacity-70'></div> */}
            </div>
        </div>
    );
};

export default HeroRight;