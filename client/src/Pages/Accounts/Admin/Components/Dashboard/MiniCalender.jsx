import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent, getEvents } from "../../../../../Redux/slice/EventSlice";
import AddEvents from "../../../../Global/Calender/AddEvent";
import EditEvent from "../../../../Global/Calender/EditEvent";

const MiniCalender = () => {
  const [eventForm, setEventForm] = useState("scale-0");
  const [editEvent, setEditEvent] = useState("scale-0")
  const [currentEvent, setCurrentEvent] = useState(null)

  const eventData = useSelector((state) => state.events.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch, eventData]);

  const handleAddEvent = () => {
    setEventForm("scale-100");
  };

  const handleEditEvent = (eventID) =>{
    setEditEvent("scale-100");
    setCurrentEvent(eventID);
  }

  return (
    <div className="shadow-lg w-fit rounded-lg border border-zinc-300 h-[68vh]">
      <div className="bg-[#f1faee]">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DemoItem>
              <DateCalendar defaultValue={dayjs(new Date())} readOnly />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div>
        <div
          className="bg-black w-full relative z-30 mt-[-2rem] flex items-center justify-between"
          onClick={handleAddEvent}
        >
          <h1 className="text-white py-1 px-3">Upcoming Events</h1>
          <RiStickyNoteAddLine className="text-white text-xl mr-3 cursor-pointer" />
        </div>

        {eventData?.map((Element, id) => (
          <div className="px-3 my-4 flex items-start justify-between w-full" key={id}>
            <div >
              <div className="flex gap-2">
                <p className="bg-green-700 p-1 w-fit rounded-full"></p>
                <h1 className="font-semibold capitalize text-lg">
                  {Element.title}
                </h1>
              </div>
              <div>
                <p className="text-sm pl-5">{Element.subtitle}</p>
              </div>

              <div>
                <p></p>
              </div>
            </div>

            <div className="flex items-center gap-3" >
              <p onClick={() => handleEditEvent(Element.id)} className="text-2xl cursor-pointer" ><LiaEditSolid/></p>
              <p onClick={()=>useDispatch(deleteEvent(Element.id))} className="text-2xl cursor-pointer" ><MdOutlineDeleteOutline/></p>
            </div>
          </div>
        ))}
      </div>

      <AddEvents eventForm={eventForm} setEventForm={setEventForm} />
      <EditEvent editEvent={editEvent} setEditEvent={setEditEvent} currentEvent = {currentEvent} />

    </div>
  );
};

export default MiniCalender;
