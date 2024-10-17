import { Scheduler } from "@aldabil/react-scheduler";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Calender = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Coffee with Anuj",
      start: new Date("2024-10-17T12:00"),
      end: new Date("2024-10-17T13:30"),
      subtitle: "Short coffee break",
    },
  ]);

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);

  const currentRole = JSON.parse(localStorage.getItem('adminCredentials'))

  const AddEvent = () => {
    const newEvent = {
      id: events.length + 1, // Increment event ID
      title: "Meeting with Team",
      start: new Date("2024-10-18T15:00"),
      end: new Date("2024-10-18T16:30"),
      subtitle: "Discuss project updates",
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
  };

  return (
    <div
      className={`w-full h-fit overflow-y-hidden ${
        sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"
      } transition-all duration-150 ease-in-out`}
    >
      <div className="px-3 py-2">
        <div className="flex justify-end">
          {currentRole?.role === 'admin' && (
            <button className="bg-black text-white px-3 py-1 rounded-lg" >Add Event</button>
          )}
        </div>
        <Scheduler
          view="week"
          events={events} // The state containing all events
          hourFormat="24"
          editable={false}
        />
      </div>
    </div>
  );
};

export default Calender;
