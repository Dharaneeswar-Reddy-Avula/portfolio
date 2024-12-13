import React, { useState } from 'react'
import '../../src/App.css';
import { Navbar } from '../Components/Navbar';
import profile from '../assets/profile.jpg';
export const Home = ({ formData }) => {
  
  return (

    <div className='Home  w-full md:p-[20px] flex flex-col gap-[20px] rounded-md'>
             <Navbar/>
             {formData.name && (
        <div className="user-details">
          <h2>Contact Details Submitted:</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}
              <div className="details-wrap flex flex-col-reverse md:flex-row h-[540px] justify-center items-center shadow-lg p-[10px] border-[1px]">
              <div className="content-wrap flex flex-col justify-center md:px-[50px]">
                  <h1 className='text-black text text-[24px] md:text-[70px] leading-none mb-[10px] md:mb-[30px] px-[30px] '>Dharaneeswar Reddy Avula</h1>
                  <p className='text-[#787878] md:text-2xl mb-[20px] px-[30px]'>A passionate Front-End Developer creating seamless and stunning user experiences.</p>
                  <div className="getintouch px-[30px]"><button className='bg-[black] text-white p-[5px_10px] rounded-lg shadow-lg'>Contact</button></div>
              </div>
              <div className="image-wrap md:w-[400px] md:h-[400px] rounded-full w-[300px] h-[300px] py-[30px] flex justify-center items-center">
              <img src={profile} className='rounded-md w-full h-full border-[2px] shadow-lg p-[20px]'
              />
              </div></div>
          </div>
  )
}
