import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getUsers } from '../../../Redux/slice/userSlice';
const AdminStudent = () => {

  const usersData = useSelector((state) => state.user)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  return (
    <div className='w-full h-fit pl-32' >
      <div className='px-3' >
        <h1>This is the student data</h1>
        {usersData.users.map((Element , id)=>(
          <p key={id} >{Element.FirstName}</p>
        ))}
      </div>
    </div>
  )
}

export default AdminStudent
