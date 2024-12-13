import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { Card } from '../Components/card'
import matrex from "../assets/matrex.png"
import gigo from "../assets/gigo.png"
import dashboard from "../assets/dashboard.png"
import stocker from "../assets/stocker.png"

export const Projects = () => {
  const [selected,setSelected]=useState(null);
  const [market,setMarket]=useState(null);
  const [outcome,setOutcome]=useState(null);
  const HandleBookmakerChange = (event) => {
    setSelected(event.target.value);
    setMarket(null);
    setOutcome(null);
  }
  const HandleMarketChange = (event) => {
    setMarket(event.target.value);
    setOutcome(null);
  }
   const HandleOutcomeChange = (event) => {
    setOutcome(event.target.value);
    
  }
  
  return (
    <div  className='Projects  w-full h-screen p-[20px] flex flex-col gap-[30px]'>
      <Navbar/>
      <div className="cards-wrap flex flex-wrap gap-[20px] justify-center md:py-[50px] border-[1px] rounded-lg shadow-lg">
      <Card image={stocker} name="Stocker Clone"/>
      <Card image={gigo} name="Gigo Clone"/>
      <Card image={dashboard} name="Table Creation"/>
      <Card image={matrex} name="Matrex Clone"/>
      </div>
    </div>
  )
}
// 3. Projects Section
// Purpose: Highlight your work and accomplishments.
// Contents:
// Featured projects with:
// Screenshots or demos.
// Project description, technologies used, and your role.
// Links to live projects or GitHub repositories.
// Optionally categorize projects (e.g., Web Development, Design).