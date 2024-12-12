import React from 'react'

export const Card = (props) => {
  return (
    <div className='h-[350px] w-[300px]  border-[1px] rounded-lg p-[10px]'>
        <img src={props.image} className='h-[200px] w-full rounded-lg border-[1px]'/>
        <h2 className='text-[20px] font-semibold'>{props.name}</h2>
        <h1 className='font-semibold mb-[10px]'>Technologies used</h1>
         <ul className='grid grid-cols-2 text-[dodgerblue]'>       
            <li>HTML</li>
            <li>CSS</li>
            <li>TAILWIND CSS</li>
            <li>JAVASRCIPT</li>
         </ul>
    </div>
  )
}
