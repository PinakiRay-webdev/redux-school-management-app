import React from 'react'
import { useSelector } from 'react-redux'

const AdminSubjects = () => {

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)
  const theme = useSelector((state) => state.theme.isBlack);

  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out ${theme ? "bg-[#0d1321]" : "bg-[#f5f3f4]"} h-screen`} >
      <div className='px-3' >
        <p className={`${!theme ? "text-[#0d1321]" : "text-[#f5f3f4]"}`} >
          This is the subject page
        </p>
      </div>
    </div>
  )
}

export default AdminSubjects
