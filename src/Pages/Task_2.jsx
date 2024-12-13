import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../Components/Navbar';
export const Task_2 = () => {
    const [values,setValues] = useState([]);
    const [loading,setLoading] = useState(false);  
    const [selectedBookmaker, setSelectedBookmaker] = useState(null); 
    const [selectedMarket, setSelectedMarket] = useState(null);
    const [selectedOutcome, setSelectedOutcome] = useState(null);
    const handleBookmakerChange = (event) => {
        setSelectedBookmaker(event.target.value);
        setSelectedMarket(null);
        setSelectedOutcome(null);
    };
        const handleMarketChange = (event) => {
        setSelectedMarket(event.target.value);
        setSelectedOutcome(null);
      };
      const handleOutcomeChange = (event) => {
        setSelectedOutcome(event.target.value);
      };
    const fetchData = async () => {
        setLoading(true)
        try{
               const response = await axios.get("https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&oddsFormat=american&apiKey=e0f733d4f4af263b0c29ca7f9cf1034b");
               if(response.status===200){
                 setValues(response.data);
                 console.log(response);
               }
               setLoading(false)
        }
        catch(error){
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    if(loading){
        return(
            <div className='min-h-screen w-full p-[20px]'>
            <Navbar/>
                 <div className="loader flex flex-col justify-center items-center md:h-[500px] overflow-y-hidden">
                <div className="innerLoader w-[50px] h-[50px] bg-[white] rounded-full  border-[10px] border-b-blue-900  animate-spin">
                </div>
                <p>LOADING.....</p>
                </div>
              </div>
        )
    }
    return (
        <div className='p-[20px] '>
        <Navbar/>
        <div className="cards-wrap flex flex-wrap gap-[30px] pt-[30px] justify-center">
        {
            values.map((data) => (
                <div className='apicard w-full skew-x-[0deg] md:w-[600px] bg-[white] border-[2px] md:skew-x-[-10deg] rounded-lg flex flex-col shadow-lg p-[10px]'>
                        <p className='bg-[black] text-white md:text-[24px] break-words p-[10px] rounded-lg'>{data.sport_key}</p>
                        <h1 className='flex md:gap-[30px] font-bold text-wrap md:flex-row flex-col p-[10px]'><span className='text-[blue]'>{data.sport_title}</span><span>{data.commence_time}</span></h1>
                        <h1 className='flex gap-[30px] text-bold text-wrap md:flex-row flex-col font-bold'><span className='text-orange-700'>{data.home_team}</span><span className='text-gray-700'>{data.away_team}</span></h1>
                       
                        <div className='flex flex-wrap gap-[20px]'>
 
        <select onChange={handleBookmakerChange} value={selectedBookmaker || ''} className='mt-[10px] outline-none border-[1px] rounded-md p-[5px]'>
            <option value="">Select Bookmaker</option>
            {data.bookmakers && data.bookmakers.length > 0 ? (
            data.bookmakers.map((bookmaker, index) => (
                <option key={index} value={bookmaker.title}>
                {bookmaker.title}
                </option>
            ))
            ) : (
            <option value="">No bookmakers available</option>
            )}
        </select>
           {/* Market Dropdown */}
      {selectedBookmaker && (
        <select onChange={handleMarketChange} value={selectedMarket || ''} className='mt-[10px] outline-none border-[1px] rounded-md p-[5px]'>
          <option value="">Select Market</option>
          {data.bookmakers
            .find((bookmaker) => bookmaker.title === selectedBookmaker)
            ?.markets.map((market, index) => (
              <option key={index} value={market.key}>
                {market.key}
              </option>
            ))}
        </select>
      )}

      {selectedMarket && (
        <select onChange={handleOutcomeChange} value={selectedOutcome || ''} className='mt-[10px] outline-none border-[1px] rounded-md p-[5px]'>
          <option value="">Select Outcome</option>
          {data.bookmakers
            .find((bookmaker) => bookmaker.title === selectedBookmaker)
            ?.markets.find((market) => market.key === selectedMarket)
            ?.outcomes.map((outcome, index) => (
              <option key={index} value={outcome.name}>
                {outcome.name} - Price: {outcome.price}
              </option>
            ))}
        </select>
      )}

      {selectedOutcome && <p>Selected Outcome: {selectedOutcome}</p>}
        
  
</div>


               </div>
                
            ))
        } 
        </div>
        </div>
    )
    }
