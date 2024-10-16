import React from 'react'
import { sideBarNav } from '../../../Utils/Utils'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
import { openSlice } from '../../../Redux/slice/collapseSlice';

const AdminSideBar = () => {

  const navigate = useNavigate();

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleSideBar = ()=>{
    dispatch(openSlice())  
  }

  const logout = () =>{
    navigate('/')
    localStorage.clear();
  }
  return (
    <div className={`h-screen ${sideBarStatus ? "w-[12vw]" : "w-[5vw]"} bg-[#a3b18a] fixed top-0 transition-all duration-150 ease-in-out`} >
      <p onClick={handleSideBar} className='bg-green-200 w-fit p-1 rounded-2xl absolute right-[-1rem] top-10 cursor-pointer' >{sideBarStatus ? <FaChevronLeft/> : <FaChevronRight/>}</p>
      <div className='absolute w-full top-[50%] translate-y-[-50%]' >
        {sideBarNav.map((Element , id)=>(
          <Link key={id} to={`/adminDashboard/${Element.item}`} >          
            <div className={`flex items-center gap-3 my-10 px-4 ${sideBarStatus ? "" : "justify-center"}`}>
                <p className='text-[#231942] text-2xl' >{<Element.icon/>}</p>
                <p className={`capitalize text-[#231942] text-sm font-semibold ${sideBarStatus ? "block" : "hidden"} `} >{Element.item}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div onClick={logout} className='flex justify-center absolute bottom-0 items-center gap-2 w-full cursor-pointer bg-[#344e41] py-4' >
      <p className='text-[#a3b18a] font-bold' >Logout</p>
      </div>
    </div>
  )
}

export default AdminSideBar
