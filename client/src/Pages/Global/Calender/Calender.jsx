import { Scheduler } from "@aldabil/react-scheduler";
import React from 'react'
import { useSelector } from 'react-redux'
const Calender = () => {

  const events = [
    {
      id : 1,
      title : "Coffee with anuj",
      start : new Date('2024-10-17T12:00'),
      end : new Date('2024-10-17T13:30'),
      subtitle : 'nfnfn',
      Localization : 'starbucks',
    }
  ]

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className='px-3 py-2' >
        <Scheduler view="week" events={events} hourFormat="24"/>
      </div>
    </div>
  )
}

export default Calender