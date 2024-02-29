"use client";
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import "@/app/Components/slideMenu/slideMenu.css"
import NE from '../n&e/NE';
import About from '../about/About';
import Language from '../language/Language';
import Contact from '../contact-us/Contact';




export default function SlideMenu() {


    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }

    return (

        <div >
            <button className='bg-transparent text-5xl mt-4 ml-2 text-red ' onClick={() => { setIsOpen(true) }}>
                <IoMenu />
            </button>



            <div
                className={`absolute top-0 left-0 w-full h-full bg-gray-800 z-40 duration-300 opacity-50  ${isOpen ? "block" : "hidden"}`}  ></div>
            <div
                className={`fixed top-0 right-0 h-full bg-white z-50 duration-500 border-l-2 transition-margin-right overflow-x-auto ${isOpen ? "w-[300px]" : "w-0"}`} >
                <ul className='text-green-700 text-[160%]' >




                    <li >
                        <button className='bg-transparent text-4xl mt-4 ml-2' onClick={() => { setIsOpen(false) }}>
                            <IoArrowBackSharp />
                        </button>
                    </li>





                    <li>
                        <NE></NE>
                    </li>




                    <li>
                        <About></About>
                    </li>





                    <li>
                        <Language></Language>
                    </li>




                    <li>
                        <Contact></Contact>
                    </li>





                </ul>
            </div>
        </div>
    )
}
