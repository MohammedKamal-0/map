import React from 'react'
import { GoInfo } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
// import "@/app/Components/slideMenu/slideMenu.css"
import Image from 'next/image'
import bmw from "../../assets/intercative_map.svg";
import department_info from "../../assets/department_info.svg";
import news from "../../assets/news.svg";


export default function About() {



    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    return (
        <div>



            <botton onClick={() => { setIsOpen(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><GoInfo /></h1>  <h1 className='mt-8'>About</h1> </botton>


            <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen ? "block" : "hidden"}`}>
                <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 overflow-x-auto ${isOpen ? "h-full" : "h-0"}`} >
                    <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' /> </button>
                    <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <GoInfo className='ml-8 mr-4 text-5xl' /> About </h1>


                    <center>
                        <div className='m-[8px] p-[8px] mb-[20px] h-[100%]  '>
                            <div className='m-[16px] mb-[32px] text-3xl'> <h1 className='text-black'>Appliacation <span className='text-green-700'>Services</span></h1></div>

                            <div>

                                <div>
                                    <div>
                                        {/* <img src="images/intercative map.svg" alt=""> */}
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                // objectFit: "cover",
                                                // borderRadius: 4,
                                                alt:"Description of the image",

                                            }}
                                            src={bmw}
                                        />
                                        <div>
                                            <h2><span className='text-green-700 text-3xl'>Intercative Map</span></h2>
                                            <p className=' w-[80%] text-black mb-25'>
                                                Includes an interactive map of the university campus and. Users can search for a specific building or department and find key directions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {/* <img src="images/department info.svg" alt=""> */}
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                // objectFit: "cover",
                                                // borderRadius: 4,
                                                alt:"Description of the image",

                                            }}
                                            src={department_info}
                                        />
                                        <div>
                                            <h2><span span className='text-green-700 text-3xl'>Department Information</span></h2>
                                            <p className=' w-[80%] text-black mb-25'>
                                                Users can search for a specific department to learn about the majors available in that department, as well as details about the academy’s faculty members
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {/* <img src="images/news & events.svg" alt="" > */}
                                        <Image
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                // objectFit: "cover",
                                                // borderRadius: 4,
                                                alt:"Description of the image",
                                            }}
                                            src={news}
                                        />
                                        <div>
                                            <h2><span span className='text-green-700 text-3xl'>News and Events</span></h2>
                                            <p className=' w-[80%] text-black mb-25'>
                                                The application provides the latest university news and events relevant to students and visitors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>

                </div> </div>


        </div>
    )
}
