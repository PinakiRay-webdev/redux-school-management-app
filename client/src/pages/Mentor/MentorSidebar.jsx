import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { mentorSideBar } from '../../constants/constants';
const MentorSidebar = () => {

    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/');    
    }

  return (
    <div className='h-screen w-[8vw] bg-[#a3b18a] fixed top-0' >

        <div className='flex flex-col items-center absolute w-full top-[50%] translate-y-[-50%] ' >
            {mentorSideBar.map((Element , id)=>(
                <Link to={`/mentorDashboard/${Element.item}`} >                
                <div className='flex flex-col items-center gap-1 my-7 cursor-pointer' key={id} >
                    <p className='text-lg text-[#344e41] font-bold' >{<Element.icon/>}</p>
                    <p className='text-sm text-[#344e41] font-bold' >{Element.item}</p>
                </div>
                </Link>
            ))}
        </div>

      {/* logout button  */}
      <button onClick={logout} className='bg-black w-full text-white py-3 absolute bottom-0'>Logout</button>
    </div>
  )
}

export default MentorSidebar
