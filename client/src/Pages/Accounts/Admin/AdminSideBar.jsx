import React from 'react'
import { sideBarNav } from '../../../Utils/Utils'
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const AdminSideBar = () => {

  const navigate = useNavigate();

  const logout = () =>{
    navigate('/')
    localStorage.clear();
  }
  return (
    <div className='h-screen w-[8vw] bg-[#a3b18a] fixed top-0' >
 
      <div className='absolute w-full top-[50%] translate-y-[-50%]' >
        {sideBarNav.map((Element , id)=>(
          <Link key={id} to={`/adminDashboard/${Element.item}`} >          
          <div className='flex flex-col items-center gap-1 my-7 cursor-pointer'>
              <p className='text-lg text-[#344e41] font-bold' >{<Element.icon/>}</p>
              <p className='text-sm text-[#344e41] font-bold' >{Element.item}</p>
          </div>
          </Link>
        ))}
      </div>
      
      <div onClick={logout} className='flex justify-center absolute bottom-0 items-center gap-2 w-full cursor-pointer bg-[#344e41] py-4' >
      <p className='text-2xl text-center text-[#a3b18a]'><IoLogOutOutline/></p>
      <p className='text-[#a3b18a] font-bold' >Logout</p>
      </div>
    </div>
  )
}

export default AdminSideBar
