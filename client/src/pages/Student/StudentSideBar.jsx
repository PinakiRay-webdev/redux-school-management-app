import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { studentSideBarNav } from '../../constants/constants';
const StudentSideBar = () => {

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/')        
    }

  return (
    <div className='h-screen w-[8vw] bg-[#9f86c0] fixed top-0' >
        
        <div className='absolute w-full top-[50%] translate-y-[-50%]' >
        {studentSideBarNav.map((Element , id) => (
          <Link key={id} to={`/studentDashboard/${Element.item}`} >
            <div className='flex flex-col items-center gap-1 my-6'>
                <p className='text-[#231942] text-lg' >{<Element.icon/>}</p>
                <p className='capitalize text-[#231942] text-sm font-semibold' >{Element.item}</p>
            </div>
          </Link>
        ))}
        </div>

      <button className='bg-black text-white w-full absolute py-3 bottom-0' >Logout</button>
    </div>
  )
}

export default StudentSideBar
