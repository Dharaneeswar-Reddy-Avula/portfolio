import React from 'react'
import { Navbar } from '../Components/Navbar'
import { useState,useEffect } from 'react'
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
    <Tabs/>
</div>
  )
}


export const Tabs = () => {
  const [tabValue, setTabValue] = useState("Tab 1");

  const Tab1 = () => {
    return (
      <>
        <div className="text-center text-5xl color-[purple] font-bold">
          TAB 1 Content
        </div>
      </>
    );
  };

  const Tab2 = () => {
    return (
      <>
        <div className="text-center text-5xl color-green-600 font-bold">
          TAB 2 Content
        </div>
      </>
    );
  };

  const Tab3 = () => {
    return (
      <>
        <div className="text-center text-5xl color-red-600 font-bold">
          TAB 3 Content
        </div>
      </>
    );
  };

  const Tab4 = () => {
    return (
      <>
        <div className="text-center text-5xl color-blue-600 font-bold">
          TAB 4 Content
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-[200px]">
        <div className="w-full flex items-center justify-center gap-6">
          <div
            className={`item ${
              tabValue === "Tab 1" ? "bg-green-600" : ""
            } text-2xl px-2 font-semibold border border-black rounded-md`}
            onClick={() => setTabValue("Tab 1")}
          >
            Tab 1
          </div>
          <div
            className={`item  ${
              tabValue === "Tab 2" ? "bg-green-600" : ""
            } text-2xl px-2 font-semibold border border-black rounded-md`}
            onClick={() => {
              setTabValue("Tab 2");
            }}
          >
            Tab 2
          </div>
          <div
            className={`item  ${
              tabValue === "Tab 3" ? "bg-green-600" : ""
            } text-2xl px-2 font-semibold border border-black rounded-md`}
            onClick={() => {
              setTabValue("Tab 3");
            }}
          >
            Tab 3
          </div>
          <div
            className={`item  ${
              tabValue === "Tab 4" ? "bg-green-600" : ""
            } text-2xl px-2 font-semibold border border-black rounded-md`}
            onClick={() => {
              setTabValue("Tab 4");
            }}
          >
            Tab 4
          </div>
        </div>
        <div className="w-full mt-5 flex justify-center items-center">
            {tabValue === "Tab 1" && (
                <Tab1 />
            )}
            {tabValue === "Tab 2" && (
                <Tab2 />
            )}
            {tabValue === "Tab 3" && (
                <Tab3 />
            )}
            {tabValue === "Tab 4" && (
                <Tab4 />
            )}
        </div>
      </div>
    </>
  );
};

