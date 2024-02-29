"use client"
import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { useEffect, useState } from "react";
import "@/app/Components/slideMenu/slideMenu.css"

export default function Contact() {


    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    var styles
    if (isOpen) {
        styles = 'flex'
    } else {
        styles = 'none'
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div>


            <button onClick={() => { setIsOpen(true) }} className='flex items-center cursor-pointer gap-2 '>  <h1 className='bg-green-700 rounded-[10px]  text-5xl  text-[#ffffff] p-2 mt-8 ml-2'><BiMailSend /></h1>  <h1 className='mt-8'>Contact Us</h1> </button>


            <div className={`fixed left-0 right-0 bottom-0 w-full h-0  ${isOpen ? "block" : "hidden"}`}>
                <div className={`fixed left-0 right-0 bottom-0 w-full h-full  bg-white duration-300 ${isOpen ? "h-full" : "h-0"}`} >
                    <button onClick={() => { setIsOpen(false) }} className="text-black">  <IoIosCloseCircleOutline className='text-green-700' /> </button>
                    <h1 className='flex items-center cursor-pointer gap-2 text-4xl text-green-700 mb-8'> <BiMailSend className='ml-8 mr-4 text-5xl' /> Contact Us </h1>







                    <div className="p-4 max-w-3xl mx-auto">
                        <form
                            onSubmit={handleSubmit}
                            className="py-4 mt-4 border-t flex flex-col gap-5"
                        >
                            <div>
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    onChange={(e) => setFullname(e.target.value)}
                                    value={fullname}
                                    type="text"
                                    id="fullname"
                                    placeholder="  mohammed kamal"
                                />
                            </div>

                            <div className='mt-10'>
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    id="email"
                                    placeholder="  moha@gmail.com"
                                />
                            </div>

                            <div className='mt-10'>
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    className="h-32 w-full"
                                    id="message"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button className="bg-green-700 p-3 text-white font-bold" type="submit">
                                Send
                            </button>
                        </form>

                        <div className="bg-slate-100 flex flex-col">
                            {error &&
                                error.map((e) => (
                                    <div
                                        className={`${success ? "text-green-800" : "text-red-600"
                                            } px-5 py-2`}
                                    >
                                        {e}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div> </div>


        </div>
    )
}
