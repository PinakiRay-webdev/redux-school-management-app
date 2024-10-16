import React from 'react'
import { useSelector } from 'react-redux'

const AdminSubjects = () => {

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)


  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className='px-3' >
        This is the subject list
      </div>
    </div>
  )
}

export default AdminSubjects
