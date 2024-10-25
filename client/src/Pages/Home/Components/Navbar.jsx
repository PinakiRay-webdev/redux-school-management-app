import React , {useState} from 'react'
import { homeNavBar } from '../../../Utils/Utils'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MdOutlineLightMode , MdModeNight } from "react-icons/md";
import { toggleTheme } from '../../../Redux/slice/themeSlice';

const Navbar = () => {

    const navigate = useNavigate();
    const theme = useSelector((state)=> state.theme.isBlack)    
    const dispatch = useDispatch();

    const handleLogin = () =>{
        navigate('/login')
    }

    const changeTheme = () =>{
        dispatch(toggleTheme())
    }

  return (
    <div className={`w-full h-[10vh] border-b ${theme ? "bg-[#101214]" : "bg-white"} `}>
        <div className='max-w-screen-xl mx-auto h-[10vh] flex items-center justify-between' >
            <h1 className={`${theme ? "text-green-600" : "text-green-900"} text-4xl font-semibold`} >Schoolify</h1>

            <div className='flex gap-4' >
                {homeNavBar?.map((Element , id) => (
                    <p className={`capitalize cursor-pointer font-semibold ${theme ? "text-green-600" : "text-green-700"} hover:text-green-900 transition-all duration-100 ease-in-out`} key={id} >{Element.item}</p>
                ))}
            </div>

            <div className='flex items-center gap-4' >
                <p onClick={changeTheme} className={`p-1 border ${theme ? "text-white border-white" : "text-black border-black"} w-fit rounded-full cursor-pointer`}>{theme ? <MdModeNight/> : <MdOutlineLightMode/>}</p>
                <button onClick={handleLogin} className={`${theme ? "bg-green-600 text-black" : "bg-green-950 text-white"} px-6 py-1 rounded-md`} >Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
