import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Portfolio from '../Portfolio/Portfolio';
import TimeLine from '../TimeLine/TimeLine';
import TabSystem from '../../Utils/TabSystem/TabSystem';
import Contact from '../Contact/Contact';
import { FaCircleArrowUp } from "react-icons/fa6";

const Home = () => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };

    return (
       <div >
         <div className='lg:px-0 md:px-0 sm:px-3 px-3 container mx-auto pt-[100px]'>
           <Hero/>
           <div className=' w-full h-[1px] bg-gradient-to-r from-violet-400 to-pink-500'></div>
           <Features/>
           <Portfolio/>
           <TabSystem/>
           <Contact/>
           <div className=' w-full h-[1px] bg-gradient-to-r from-violet-400 to-pink-500 mt-20'></div>


           {isVisible && (
        <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
         <FaCircleArrowUp size="42px"  className=' animate-bounce'/>
        </button>
      )}
        </div>
       
       </div>
    );
};

export default Home;