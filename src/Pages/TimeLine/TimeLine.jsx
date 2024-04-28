import React from 'react';

const TimeLine = () => {
    
    return (
      <div className='py-20'>
       
        <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li className='group cursor-pointer'>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 group-hover:text-red-600 transition-all duration-300"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 w-full  py-5 bg-gray-800 text-gray-300 rounded-lg px-10 group-hover:shadow-lg group-hover:shadow-pink-500 transition-all duration-300  inline-block">
      <div className="text-xl text-start font-black pb-3">Diploma in Computer Science</div>
      <ul className=' text-start text-lg leading-6'>
        <li cl>Barisal Polytechnic Institute</li>
        <li>Completion Date: 2021</li>
        <li>Session: 17-14</li>
        <li>CGPA: 4.43</li>
        <p  className=' leading-5 text-justify tracking-tight pt-3'>Equipped with a comprehensive understanding of computer science principles, including programming languages, data structures, algorithms, and software development methodologies.</p>

      </ul>
      
    </div>
    <hr/>
  </li>
  <li className='group cursor-pointer'>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 group-hover:text-red-600 transition-all duration-300"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end   md:text-end mb-10 w-full  py-5 bg-gray-800 text-gray-300 rounded-lg px-10 group-hover:shadow-lg group-hover:shadow-pink-500 transition-all duration-300  inline-block">
      <div className="text-xl text-start font-black pb-3">Secondary School Certificate (SSC)</div>
      <ul className=' text-start text-lg leading-6'>
        <li cl>St. Alfred's High School and College</li>
        <li>Completion Date: 2016</li>
        <li>Group: Science</li>
        <li>CGPA: 4.41</li>
        <p  className=' leading-5 text-justify tracking-tight pt-3'>During my time at St. Alfred's High School and College, I pursued a rigorous curriculum in the science stream, fostering a strong foundation in various scientific disciplines and principles.</p>

      </ul>
      
    </div>
    <hr/>
  </li>
 
</ul>
        </div>
      </div>
    );
};

export default TimeLine;