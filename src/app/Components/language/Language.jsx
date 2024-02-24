import React from 'react'
import { GrLanguage } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import "@/app/Components/slideMenu/slideMenu.css"

export default function Language() {


    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


  return (
    <div>



<botton onClick={() => { setIsOpen(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><GrLanguage /></h1>  <h1 className='mt-8'>Language</h1> </botton>


<div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen ? "block" : "hidden"}`}>
    <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen ? "h-full" : "h-0"}`} >
        <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' />  </button>
        <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <GrLanguage className='ml-8 mr-4 text-5xl' /> Language </h1>

        <ul>
            <li className='py-6 border-b-4 text-3xl'> <p className='ml-8'>Arabic</p></li>
            <li className='py-6 border-b-4 text-3xl'><p className='ml-8 text-green-900 '>English</p></li>
        </ul>
    </div> </div>



    </div>
  )
}
