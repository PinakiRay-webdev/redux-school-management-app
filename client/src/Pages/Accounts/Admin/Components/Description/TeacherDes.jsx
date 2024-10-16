import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux';

const TeacherDes = () => {
    const params = useParams();
    const teacherID = params.id;

    const teachersData = useSelector((state) => state.user.mentors.find((e) => e.id === teacherID))
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)


  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className='px-3 py-5'>
        This is the teacher of id {teacherID} of name {teachersData.FirstName}
      </div>
    </div>
  )
}

export default TeacherDes
