import React from 'react';
import ProgressBar from 'react-animated-progress'
import 'react-animated-progress/dist/index.css'
const Skills = () => {
    return (
      <div className='py-10'>
          <div className='lg:flex md:flex justify-between gap-5  bg-gray-800 py-5 px-10 text-gray-200 rounded-lg'>
            <div className='w-full'>
               <h1 className='lg:text-4xl md:text-3xl text-xl py-5 uppercase font-bold'>Tools</h1>
               <ul>
               <div>
               <li className='pb-2 text-lg font-medium'>VS CODE</li>
                <ProgressBar className=' w-full' value={90} color='blue'  isStripped={true}  isIndeterminate={false} />
               </div>
               
               <div className='pt-3 '>
               <li className='pb-2 text-lg font-medium'>NPM</li>
                <ProgressBar className=' w-full' value={93} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium'>YARN</li>
                <ProgressBar className=' w-full' value={89} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium'>GIT</li>
                <ProgressBar className=' w-full' value={95} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium'>FIGMA</li>
                <ProgressBar className=' w-full' value={94} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium'>NOTION</li>
                <ProgressBar className=' w-full' value={99} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium'>NETLIFY</li>
                <ProgressBar className=' w-full' value={98} color='blue' isStripped={true}  isIndeterminate={false} />
               </div>
                
            </ul>
            </div>
        
        <div className='w-full'>
            <ul className='  '>
                <h1 className='lg:text-4xl md:text-3xl text-xl py-5 uppercase font-bold'>Development Skill</h1>
               <div>
               <li className='pb-2 text-lg font-medium' >HTML</li>
                <ProgressBar className=' w-full' value={98} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >CSS</li>
                <ProgressBar className=' w-full' value={99} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >JAVASCRIPT</li>
                <ProgressBar className=' w-full' value={97} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >REACT</li>
                <ProgressBar className=' w-full' value={98} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >NODE JS</li>
                <ProgressBar className=' w-full' value={87} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >EXPRESS JS</li>
                <ProgressBar className=' w-full' value={91} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >REDUX</li>
                <ProgressBar className=' w-full' value={87} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
               <div className='pt-3'>
               <li className='pb-2 text-lg font-medium' >NEXT JS</li>
                <ProgressBar className=' w-full' value={90} color='#891652' isStripped={true}  isIndeterminate={false} />
               </div>
            </ul>
        </div>
      </div>
      </div>
    );
};

export default Skills;