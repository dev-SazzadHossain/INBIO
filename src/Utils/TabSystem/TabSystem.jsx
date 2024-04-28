import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TimeLine from '../../Pages/TimeLine/TimeLine';
import Skills from '../../Pages/Skills/Skills';
import Exprience from '../../Pages/Exprience/Exprience';

const TabSystem = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className=' py-20 w-full'>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList  className="border-none outline-none  flex  items-center  transition-all duration-300 w-full bg-slate-900 rounded-lg text-gray-400">
        <Tab className={` border-none outline-none  px-10 py-2  rounded-md cursor-pointer font-semibold lg:text-lg md:text-lg sm:text-[13px] text-[11px]   tracking-wide hover:scale-105 duration-300 transition-all ${tabIndex == 0 && " bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-red-500/45 "} w-full`}>Education</Tab>
        <Tab className={` border-none outline-none  px-10 py-2  rounded-md cursor-pointer font-semibold lg:text-lg md:text-lg sm:text-[13px] text-[11px]  tracking-wide hover:scale-105 duration-300 transition-all ${tabIndex == 1 && " bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-red-500/45"} w-full`}>Professional Skills</Tab>
        <Tab className={` border-none outline-none  px-10 py-2  rounded-md cursor-pointer font-semibold lg:text-lg md:text-lg sm:text-[13px] text-[11px]  tracking-wide hover:scale-105 duration-300 transition-all ${tabIndex == 2 && " bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-red-500/45"} w-full`}>Experience</Tab>
      </TabList>
      <TabPanel>           <TimeLine/>
</TabPanel>
      <TabPanel> <Skills/></TabPanel>
      <TabPanel> <Exprience/></TabPanel>
    </Tabs>
        </div>
    );
};

export default TabSystem;