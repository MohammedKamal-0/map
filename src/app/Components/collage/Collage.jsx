"use client";
import React from 'react'
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "@/app/Components/sildeUp/sliedUp.css"
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdShareLocation } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrDirections } from "react-icons/gr";
import { GiBookshelf } from "react-icons/gi";
import { IoArrowBackSharp } from "react-icons/io5";

export default function Collage() {




// let displaydata

// displaydata = data.map(function(todo){
//   return(
//     <p key={todo.id}>{todo.name}</p>
//   )
// })
// useEffect(()=>{

// },[])







  const [isOpen, setIsOpen] = useState(false);
  var styles
  if (isOpen) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  const [isOpen2, setIsOpen2] = useState(false);
  var styles
  if (isOpen2) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  const [isOpen3, setIsOpen3] = useState(false);
  var styles
  if (isOpen3) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  const [isOpen4, setIsOpen4] = useState(false);
  var styles
  if (isOpen4) {
      styles = 'flex'
  } else {
      styles = 'none'
  }
  const [isOpen5, setIsOpen5] = useState(false);
  var styles
  if (isOpen5) {
      styles = 'flex'
  } else {
      styles = 'none'
  }

  const [isOpen7, setIsOpen7] = useState(false);
  var styles
  if (isOpen7) {
      styles = 'flex'
  } else {
      styles = 'none'
  }



  return (
    <div>


<button onClick={() => { setIsOpen(true) }}>  <BiMoneyWithdraw />  </button>
<div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen ? "block" : "hidden"}`}>

<div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen ? "h-300" : "h-0"}`} >
        <button onClick={() => { setIsOpen(false) }} className="text-black"> <IoIosCloseCircleOutline  className='text-green-700'/> </button>

        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <BiMoneyWithdraw className='ml-8 mr-4' /> Bank </h1>

        <ul>
                        <li className='border-b-4'>  <button onClick={() => { setIsOpen7(true) }} className='py-6 pl-4 text-3xl text-green-900'>Rafidain Bank</button>
                            <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen7 ? "block" : "hidden"}`}>
                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen7 ? "h-300" : "h-0"}`} >
                                    <button onClick={() => { setIsOpen7(false) }} className="text-black">  <IoArrowBackSharp className='text-green-700' /> </button>



                                    <div className='flex items-center   mx-2'>
                                        <h1 className='flex items-center cursor-pointer justify-between gap-2 text-3xl px-2 text-green-700 mb-8'> <BiMoneyWithdraw className='ml-2 mr-4 text-6xl ' /> Rafidain Bank </h1>
                                        <a href='https://mapcarta.com/N9957187027'><button className='text-white px-2 py-2 text-[28px] bg-green-700 rounded-[8px] mb-6'>OPEN</button></a>
                                    </div>

                                    <hr className='mt-6'></hr>
                                    <div className='flex m-6 gap-6'>

                                        {/* for image */}
                                        {/* <Image
                                            className='width-20 height-20 border-4 gap-4'
                                             src='{next.svg}'
                                            width={350}
                                            height={350}
                                            alt="Picture of the author"
                                        /> */}
                                        {/* <Image
                                            className='width-20 height-20 border-4 gap-4'
                                            // src='https://picsum.photos/600/400'
                                            width={350}
                                            height={350}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            className='width-20 height-20 border-4 gap-4'
                                            // src='https://picsum.photos/600/400'
                                            width={350}
                                            height={350}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            className='width-20 height-20 border-4 gap-4'
                                            // src='https://picsum.photos/600/400'
                                            width={350}
                                            height={350}
                                            alt="Picture of the author"
                                        /> */}



                                    </div>

                                    <div className='max-w[1000px] mx-auto p-16 z-200 items-center justify-center'>
                                        <ul className='flex flex-row gap-5  left-[5px] right-center items-center justify-center  mb-5 overflow-y-auto fixed bottom-0 w-full h-25'>


                                            <li className='bg-green-700 rounded-[10px] text-5xl ml-2  text-[#ffffff] p-2 mt-8 '>

                                                <button onClick={() => { setIsOpen2(true) }}>  <GrDirections />  </button>
                                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen2 ? "block" : "hidden"}`}>

                                                    <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen2 ? "h-300" : "h-0"}`} >
                                                        <button onClick={() => { setIsOpen2(false) }} className="text-black"> <IoIosCloseCircleOutline className='text-green-700' /> </button>

                                                        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <GrDirections className='ml-8 mr-4' /> direction </h1>

                                                        <ul>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                        </ul>
                                                    </div> </div>
                                            </li>



                                            <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                                            <button onClick={() => { setIsOpen3(true) }}>  <GiBookshelf />  </button>
                                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen3 ? "block" : "hidden"}`}>

                                                    <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen3 ? "h-300" : "h-0"}`} >
                                                        <button onClick={() => { setIsOpen3(false) }} className="text-black"> <IoIosCloseCircleOutline className='text-green-700' /> </button>

                                                        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <GiBookshelf className='ml-8 mr-4' /> departments </h1>

                                                        <ul>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                        </ul>
                                                    </div> </div>
                                            </li>





                                            <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                                            <button onClick={() => { setIsOpen4(true) }}>  <MdShareLocation />  </button>
                                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen4 ? "block" : "hidden"}`}>

                                                    <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen4 ? "h-300" : "h-0"}`} >
                                                        <button onClick={() => { setIsOpen4(false) }} className="text-black"> <IoIosCloseCircleOutline className='text-green-700' /> </button>

                                                        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <MdShareLocation className='ml-8 mr-4' /> share </h1>

                                                        <ul>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                        </ul>
                                                    </div> </div>
                                            </li>



                                            <li className='bg-green-700 rounded-[10px] text-5xl  text-[#ffffff] p-2 mt-8 '>
                                            <button onClick={() => { setIsOpen5(true) }}> <IoMdInformationCircleOutline /> </button>
                                                <div className={`fixed left-0 right-0 bottom-0 w-full h-[300px]  ${isOpen5 ? "block" : "hidden"}`}>

                                                    <div className={`fixed left-0 right-0 bottom-0 w-full h-[700px]  bg-white duration-300 ${isOpen5 ? "h-300" : "h-0"}`} >
                                                        <button onClick={() => { setIsOpen5(false) }} className="text-black"> <IoIosCloseCircleOutline className='text-green-700' /> </button>

                                                        <h1 className='flex items-center cursor-pointer gap-2 text-5xl text-green-700 mb-8'> <IoMdInformationCircleOutline className='ml-8 mr-4' /> information </h1>

                                                        <ul>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                            <li className='py-6 border-b-4 text-3xl'>second</li>
                                                        </ul>
                                                    </div> </div>
                                            </li>



                                        </ul>
                                    </div>


                                    <div>

                                        {/* for buttins */}






                                    </div>



                                </div> </div>

                        </li>
                    </ul>
</div> </div>


    </div>
  )



  }





// export async function getServerSideProps(){
// const res = await fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
// const data = await res.json()
// return {props:{data}}
// }