import React from 'react'
import { Navbar } from '../Components/Navbar'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Contact = () => {
  return (
    <div  className='contact  w-full h-screen md:p-[20px] p-[10px]'>
       <Navbar/>
       <h1 className="text-3xl font-bold mb-2 mt-2 px-[20px]">Contact Us</h1>
       <div className="contact-page flex md:justify-center flex-wrap w-full">
  
  <div className="send-form-wrap flex flex-col justify-center md:w-[500px]  gap-[30px] w-[300px] border-[1px] rounded-lg">
  <div className="contact-info mb-6 shadow-lg p-[20px] w-full">
    <p><strong className='text-[20px]'>Email:</strong> avladharaniswarreddy@gmail.com</p>
    <p><strong className='text-[20px]'>Phone:</strong> 8790756930</p>
    <p><strong className='text-[20px]'>Address:</strong>E.Ramapuram,Kalasapadu,<br />Kadapa,AP</p>
  </div>
  
  <form className="contact-form flex flex-col w-full md:w-[500px] shadow-lg border-1 p-[10px]">
    <label className='text-[16px] font-semibold'>Name:</label>
    <input type="text" placeholder="Your Name" required  className='outline-none border-[1px] p-[10px] rounded-lg'
    />
    
    <label className='text-[16px] font-semibold'>Email:</label>
    <input type="email" placeholder="Your Email" required className='outline-none border-[1px] p-[10px] rounded-lg'/>
    
    <label className='text-[16px] font-semibold'>Message:</label>
    <textarea placeholder="Your Message" required className='outline-none border-[1px] p-[10px] rounded-lg mb-[10px]'></textarea>
    
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
  </form>
  </div>
  <div className="social-links mt-6 flex text-[50px] gap-[20px] justify-center items-center md:px-[50px]">
    <a href="https://www.linkedin.com/in/dharaneeswar-reddy-avula" className="text-black"><FaLinkedin /></a>
    <a href="https://github.com/Dharaneeswar-Reddy-Avula" className="text-gray-800"><FaGithub />
</a>
  </div>
</div>

</div>
  )
}
// 8. Contact Section
// Purpose: Make it easy to get in touch.
// Contents:
// Contact form (Name, Email, Message).
// Social media links (e.g., LinkedIn, GitHub, Twitter).
// Email address and optional phone number.
// Location (optional).