import { Scheduler } from "@aldabil/react-scheduler";
import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";

import { getEvents } from "../../../Redux/slice/EventSlice";

const Calender = () => {

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const eventData = useSelector((state) => state.events.eventList);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEvents())
  },[dispatch])




  return (
    <div
      className={`w-full h-fit overflow-y-hidden ${
        sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"
      } transition-all duration-150 ease-in-out`}
    >
      <div className="px-3 py-2">
        <Scheduler
          view="week"
          events={eventData} // The state containing all events
          hourFormat="24"
          editable={false}
        />
      </div>

    </div>
  );
};

export default Calender;
