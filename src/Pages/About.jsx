import React from 'react'
import { Navbar } from '../Components/Navbar'
export const About = () => {
  return (
    <div  className='about  w-full h-screen p-[20px] flex flex-col gap-[20px]'>
    <Navbar/>
    <div className="detais-wrap flex flex-col gap-[10px] border-[1px] rounded-lg  shadow-lg p-[10px] md:p-[20px]">
      <h2 className='text-[20px] md:text-[24px]'>Hi,Everyone !</h2>
      <h1 className='text-[24px] md:text-[48px]'>I'm Dharaneeswar Reddy Avula</h1>
      <div className="eduaction shadow-lg p-[10px] border-[1px] rounded-lg w-full">
        <h1 className='text-[20px] font-bold mb-[20px]'>My Education</h1>
        <ul className='flex flex-col gap-[20px] w-full'>
          <li>
            SSC : St.Antony's E.M High School , kalasapadu , kadapa
          </li>
          <li>
            INTERMEDIATE:RGUKT NUZVID
          </li>
          <li>
            BTech:RGUKT NUZVID
          </li>
          <li>
            Studying:BTech 2nd year,CSE
          </li>
        </ul>
      </div>
      <div className="skills shadow-lg p-[10px] border-[1px] rounded-lg">
        <h1 className='text-[20px] font-bold mb-[20px]'>My Skills</h1>
        <ul className='flex flex-col gap-[15px]'>
          <li>
            Tailwind css
          </li>
          <li>
            Java Script
          </li>
          <li>
          Responsive Webdesign
          </li>
          <li>
             React
          </li>
        </ul>
      </div>
    </div>
</div>
  )
}
