import React from 'react'
import { useSelector } from 'react-redux'
const AdminEarnings = () => {

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)


  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className='px-3' >
        This is the earnings section
      </div>
    </div>
  )
}

export default AdminEarnings
