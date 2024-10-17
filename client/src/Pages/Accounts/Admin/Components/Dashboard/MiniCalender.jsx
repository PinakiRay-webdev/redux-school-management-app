import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../../../../Redux/slice/EventSlice";
import AddEvents from "../../../../Global/Calender/AddEvent";

const MiniCalender = () => {
  const [eventForm, setEventForm] = useState("scale-0");

  const eventData = useSelector((state) => state.events.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const handleAddEvent = () => {
    setEventForm("scale-100");
  };

  return (
    <div className="shadow-lg w-fit rounded-lg mt-3 border border-zinc-300 h-[68vh]">
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
          <div className="px-3 my-4" key={id}>
            <div className="flex gap-2">
              <p className="bg-green-700 p-1 w-fit rounded-full"></p>
              <h1 className="font-semibold capitalize text-lg">
                {Element.title}
              </h1>
            </div>
            <div>
              <p className="text-sm pl-5">{Element.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <AddEvents eventForm={eventForm} setEventForm={setEventForm} />
    </div>
  );
};

export default MiniCalender;
