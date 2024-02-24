"use client";
import React from 'react'
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
// import "@/app/Components/sildeUp/sliedUp.css"

export default function Park() {

  const [isOpen, setIsOpen] = useState(false);
  var styles
  if (isOpen) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  

  return (
    <div>


<button onClick={() => { setIsOpen(true) }}>   <GiArchiveResearch /> </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen ? "h-300" : "h-0"}`} >
        <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <GiArchiveResearch className='ml-8 mr-4' /> Research centers </h1>

        <ul>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
               <li className='py-6 border-b-4 text-3xl'>second</li>
           </ul>
</div> </div>


    </div>
  )
}
