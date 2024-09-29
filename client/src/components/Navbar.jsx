import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import { MdOutlineLightMode , MdModeNight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {

    const date = new Date();
    const hours = date.getHours();
    
    const greet = () =>{
        if(hours >= 5 && hours < 12){
            return "Good Morning"
        } else if(hours >= 12 && hours < 18) {
            return "Good Afternoon"
        } else {
            return "Good Evening"
        }
    }
    
    const userEmail = JSON.parse(localStorage.getItem('adminCredentials'));

  return (
    <div className='pl-32 w-full h-fit border-b' >
        <div className='py-2 flex items-end justify-between px-3' >
            <div >
                <h1 className='text-3xl font-semibold' >{`${greet()},`} <span className='text-[#3a5a40] font-bold' >Sankar</span></h1>
                <div className='flex items-center gap-3' >
                <p className='text-xl font-semibold inline' >Welcome back</p>
                <p className='text-2xl text-amber-500' ><PiHandWavingFill/></p>
                </div>
            </div>

            <div>

                <div className='flex items-center gap-6' >
                    <p className='text-lg rounded-full border border-zinc-300 p-1 cursor-pointer' ><MdOutlineLightMode/></p>
                    <div className='p-1 cursor-pointer flex items-center gap-3' >
                    <p className='text-lg bg-black text-white p-1 rounded-full'><FaUser/></p>
                    <div>
                        <p>{userEmail.admin_mail}</p>
                        <p className='text-sm font-semibold opacity-80' >Admin</p>
                    </div>
                        <p className='text-2xl' ><MdKeyboardArrowRight/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
