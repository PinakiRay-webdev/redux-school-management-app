import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  MdOutlineAddCircleOutline,
  MdDelete,
  MdEditDocument,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import AddEvent from "./AddEvent";
import { deleteEvent, getEvents } from "../../../Redux/slice/EventSlice";
import EditEvent from "./EditEvent";

const MiniCalendar = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const [eventForm, setEventForm] = useState("scale-0");
  const [editEvent, setEditEvent] = useState("scale-0");
  const [currentEvent, setCurrentEvent] = useState(null);

  const openForm = () => {
    setEventForm("scale-100");
  };

  const openEditForm = (eventID) => {
    setEditEvent("scale-100");
    setCurrentEvent(eventID);
  };

  const eventData = useSelector((state) => state.events.eventList);
  const dispatch = useDispatch();

  const isAdmin = JSON.parse(localStorage.getItem("adminCredentials"));

  useEffect(()=>{
    dispatch(getEvents())
  },[dispatch])

  return (
    <div className="border shadow-lg shadow-zinc-500 bg-[#edf2fb] rounded-lg h-[100%]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoContainer>
        <div className="bg-black py-2 px-1 mt-[-1rem] relative z-10 flex items-center justify-between">
          <p className="text-white capitalize">Upcomming events</p>
          {isAdmin && (
            <p
              onClick={openForm}
              className="text-white capitalize cursor-pointer text-xl"
            >
              <MdOutlineAddCircleOutline />
            </p>
          )}
        </div>
        <div>
          {eventData?.map((Element, id) => (
            <div
              key={id}
              className="flex items-end my-2 justify-between rounded-lg py-1 border"
            >
              <div className="flex items-start px-2 gap-2">
                <p className="py-4 px-1 bg-green-600 rounded-lg"></p>
                <div>
                  <p className="capitalize" >{Element.title}</p>
                  <p className="text-sm">{Element.subtitle}</p>
                </div>
              </div>

              {isAdmin && (
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between px-1">
                    <p
                      onClick={() => openEditForm(Element.id)}
                      className="text-xl text-green-600 cursor-pointer"
                    >
                      <MdEditDocument />
                    </p>
                    <p
                      onClick={() => dispatch(deleteEvent(Element.id))}
                      className="text-xl text-green-600 cursor-pointer"
                    >
                      <MdDelete />
                    </p>
                  </div>

                  <p className="text-sm font-semibold">
                    {`${Element.start}`.toString().slice(0, 10)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </LocalizationProvider>
      <AddEvent eventForm={eventForm} setEventForm={setEventForm} />
      <EditEvent
        editEvent={editEvent}
        setEditEvent={setEditEvent}
        currentEvent={currentEvent}
      />
    </div>
  );
};

export default MiniCalendar;
