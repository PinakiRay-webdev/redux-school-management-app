import React from 'react'
import { useSelector } from 'react-redux'
const StudentSubjects = () => {

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className={`w-full h-fit ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className='px-3 py-5' >
        This is the subjects
      </div>
    </div>
  )
}

export default StudentSubjects
