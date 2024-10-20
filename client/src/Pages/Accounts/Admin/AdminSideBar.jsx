import React from 'react'
import { sideBarNav } from '../../../Utils/Utils'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
import { openSlice } from '../../../Redux/slice/collapseSlice';
import { CiLogout } from "react-icons/ci";


const AdminSideBar = () => {

  const navigate = useNavigate();

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const theme = useSelector((state) => state.theme.isBlack);
  const dispatch = useDispatch();

  const handleSideBar = ()=>{
    dispatch(openSlice())  
  }

  const logout = () =>{
    navigate('/')
    localStorage.clear();
  }
  return (
    <div className={`h-screen ${sideBarStatus ? "w-[12vw]" : "w-[5vw]"} ${theme ? "bg-[#051923]" : "bg-[#ffffff]"} border-r border-zinc-300 fixed top-0 transition-all duration-150 ease-in-out`} >
      <p onClick={handleSideBar} className='bg-green-200 w-fit p-1 rounded-2xl absolute right-[-1rem] top-10 cursor-pointer' >{sideBarStatus ? <FaChevronLeft/> : <FaChevronRight/>}</p>
      <div className='absolute w-full top-[50%] translate-y-[-50%]' >
        {sideBarNav.map((Element , id)=>(
          <Link key={id} to={`/adminDashboard/${Element.item}`} >          
            <div className={`flex items-center gap-3 my-10 px-4 ${sideBarStatus ? "" : "justify-center"}`}>
                <p className={`text-2xl capitalize ${theme ? "text-[#ffffff]" : "text-[#051923]"}`} >{<Element.icon/>}</p>
                <p className={`capitalize ${theme ? "text-[#ffffff]" : "text-[#051923]"} text-sm font-semibold ${sideBarStatus ? "block" : "hidden"} `} >{Element.item}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div onClick={logout} className='flex justify-center absolute bottom-0 items-center gap-2 w-full cursor-pointer py-4' >
      <p className={`text-2xl capitalize ${theme ? "text-[#ffffff]" : "text-[#051923]"}`} ><CiLogout/></p>
      </div>
    </div>
  )
}

export default AdminSideBar
