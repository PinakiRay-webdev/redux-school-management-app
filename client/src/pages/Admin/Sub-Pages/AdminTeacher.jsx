import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getUsers } from '../../../Redux/slice/userSlice';
const AdminTeacher = () => {

  const userData = useSelector((state)=> state.user.users.filter(role => role.Role === 'mentor'));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch])

  return (
    <div className='w-full h-fit pl-32' >
      <div className='px-3' >
        This is the teacher list
        {userData.map((Element , id)=>(
          <p key={id} >{Element.FirstName}</p>
        ))}
      </div>
    </div>
  )
}

export default AdminTeacher
