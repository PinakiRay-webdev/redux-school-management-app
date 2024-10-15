import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUsers } from '../../../../Redux/slice/userSlice';
const StudentDes = () => {

    const params = useParams();
    const studentID = params.id;

    const studentData = useSelector((state) => state.user.students.find((e) => e.id === studentID))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])

  return (
    <div className='w-full h-fit pl-32' >
        <div className='px-3 py-5' >
      This is the student of id {studentID} and the name of the student is {studentData.FirstName}
        </div>
    </div>
  )
}

export default StudentDes
