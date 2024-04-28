import React from 'react';
import contact from "../../assets/contact1.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {
    return (
        <div className=''>
            <h5 className=' text-lg text-center font-semibold  tracking-wide text-violet-600'>CONTACT</h5>
            <h1 className=' text-6xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 pt-3 pb-10  text-center'>Contact With Me</h1>

{/* contact cord */}
<div className='lg:flex md:flex justify-between items-center gap-5'>

<div className=' w-full lg:h-[600px]  md:h-[630px] h-[600px] shadow-md p-5 rounded-md shadow-violet-500/50 group/pic lg:mb-0 md:mb-0  mb-5'>
    <div  className=' w-full h-[250px] rounded-lg overflow-hidden shadow-lg group-hover/pic:shadow-black/60 duration-300 transition-all'>
        <img className=' w-full object-cover h-full rounded-md group-hover/pic:scale-110 transition-all duration-300' src={contact} alt="" />
    </div>
    <h2 className='pt-8 text-xl font-semibold tracking-tight'>MD: SAZZAD HOSSAIN</h2>

    <h5 className='text-lg font-bold text-violet-500'>React Developer</h5>
    <p className='py-3 text-lg text-gray-500'>I am available for freelance work. Connect with me via and call in to my account.</p>

    <ul>
        <li className='text-sm font-bold text-gray-700 tracking-wide'>Phone : 01606106834</li>
        <li className='text-sm font-bold text-gray-700 tracking-wide'>Email : dev.sazzadhossain24@gmail.com</li>
    </ul>

     {/* find with me */}
     <div  className=' w-full flex flex-col justify-center items-center lg:items-start md:items-start'>
                    <h2 className=' text-lg font-semibold tracking-wide py-2'>FIND WITH ME</h2>
                <div className=' flex items-center gap-5'>
                <div className=' w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55'>
                        <FaFacebookF size="22px" className=' group-hover:scale-125 scale-100 transition-all duration-300 '/>

                    </div>
                    <div className=' w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55'>
                        <FaTwitter size="22px" className=' group-hover:scale-125 scale-100 transition-all duration-300 '/>
                    </div>
                    <div className=' w-[50px] h-[50px] bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg text-white flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg shadow-violet-500/55 hover:shadow-red-500/55'>
                        <FaLinkedinIn size="22px" className=' group-hover:scale-125 scale-100 transition-all duration-300 '/>
                    </div>
                </div>

                 </div>
</div>
<div className=' w-full lg:h-[600px]  md:h-[630px] h-[600px] shadow-md p-5 rounded-md shadow-violet-500/50 group/pic'>
   
<form  className='w-full'>
  <div className='flex justify-between items-center gap-3'>
  <div className='w-full'>
        <label className='text-lg font-bold py-2 inline-block text-gray-500' htmlFor="name">Your Name</label>
       <div> <input className='w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55' type="text" name="name" placeholder='Your Name' id="" /></div>
    </div>
    <div className='w-full'>
        <label className='text-lg font-bold py-2 inline-block text-gray-500' htmlFor="name" >Phone Number</label>
       <div> <input className='w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55' type="text"  name="name" placeholder='Phone Number' id="" /></div>
    </div>
  </div>
    <div className='pt-3'>
        <label className='text-lg font-bold py-2 inline-block text-gray-500' htmlFor="name">Email</label>
       <div> <input className='w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55' type="text" name="name" placeholder='Email' id="" /></div>
    </div>
    <div className='pt-3'>
        <label className='text-lg font-bold py-2 inline-block text-gray-500' htmlFor="name">Subject</label>
       <div> <input className='w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55' type="text" name="name" placeholder='Subject' id="" /></div>
    </div>
    <div className='pt-3'>
        <label className='text-lg font-bold py-2 inline-block text-gray-500' htmlFor="name">Your Message</label>
       <div> <textarea row="4" className='w-full border-none outline-none shadow-md px-2 py-3 text-lg tracking-tight font-medium shadow-violet-500/55' type="text" name="name" placeholder='Your Message' id="" /></div>
    </div>

    <div className='pt-8 group'>
        <button className=' w-full text-center bg-gradient-to-r from-violet-500 to-pink-500 py-3 border-none outline-none rounded-lg text-white font-semibold tracking-wide flex justify-center items-center gap-5 group-hover:shadow-md group-hover:shadow-gray-600/55 duration-300 transition-all'>SEND MESSAGE <span className='group-hover:pl-2 duration-300 transition-all'><FaArrowRight/></span></button>
    </div>
</form>
 


</div>

</div>

{/* contact cord */}




        </div>
    );
};

export default Contact;