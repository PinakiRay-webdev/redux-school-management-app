import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { studentSideBarNav } from '../../constants/constants';
import { TbLayoutSidebarLeftCollapse , TbLayoutSidebarLeftExpand  } from "react-icons/tb";
import { openSlice } from '../../Redux/slice/collapseSlice';
const StudentSideBar = () => {

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/')        
    }

    const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();
    console.log(sideBarStatus);
    


  return (
    <div className={`h-screen ${sideBarStatus ? "w-[12vw]" : "w-[5vw]"} bg-[#9f86c0] fixed top-0 overflow-x-hidden transition-all duration-200 ease-in-out`} >
        <header className='flex justify-end px-3 py-4' >
          <p onClick={() => dispatch(openSlice())} className='text-3xl cursor-pointer' >{sideBarStatus ? <TbLayoutSidebarLeftCollapse/> : <TbLayoutSidebarLeftExpand />}</p>
        </header>
        <div className='absolute w-full top-[50%] translate-y-[-50%]' >
        {studentSideBarNav.map((Element , id) => (
          <Link key={id} to={`/studentDashboard/${Element.item}`} >
            <div className={`flex items-center gap-3 my-10 px-4 ${sideBarStatus ? "" : "justify-center"}`}>
                <p className='text-[#231942] text-2xl' >{<Element.icon/>}</p>
                <p className={`capitalize text-[#231942] text-sm font-semibold ${sideBarStatus ? "block" : "hidden"} `} >{Element.item}</p>
            </div>
          </Link>
        ))}
        </div>

      <button onClick={logout} className='bg-black text-white w-full absolute py-3 bottom-0' >Logout</button>
    </div>
  )
}

export default StudentSideBar
