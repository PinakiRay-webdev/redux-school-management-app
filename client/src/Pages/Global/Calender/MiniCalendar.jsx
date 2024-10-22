import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MdOutlineAddCircleOutline , MdDelete , MdEditDocument } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import AddEvent from "./AddEvent";
import { getEvents } from "../../../Redux/slice/EventSlice";

const MiniCalendar = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const [eventForm, setEventForm] = useState("scale-0");
  const openForm = () => {
    setEventForm("scale-100");
  };

  const eventData = useSelector((state) => state.events.eventList);
  const dispatch = useDispatch();

  useEffect(() => {
    if(eventData){
      dispatch(getEvents());
    }
  }, [dispatch]);

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
          <p
            onClick={openForm}
            className="text-white capitalize cursor-pointer text-xl"
          >
            <MdOutlineAddCircleOutline />
          </p>
        </div>
        <div>
          {eventData?.map((Element, id) => (
            <div key={id} className="flex items-end my-2 justify-between shadow-xl rounded-lg py-1">
              <div className="flex items-start px-2 gap-2">
                <p className="py-4 px-1 bg-green-600 rounded-lg"></p>
                <div>
                  <p>{Element.title}</p>
                  <p>{Element.subtitle}</p>
                </div>
              </div>

              <div className="flex gap-3" >
                <p className="text-xl text-green-600" ><MdEditDocument/></p>
                <p className="text-xl text-green-600"><MdDelete/></p>
              </div>
            </div>
          ))}
        </div>
      </LocalizationProvider>
      <AddEvent eventForm={eventForm} setEventForm={setEventForm} />
    </div>
  );
};

export default MiniCalendar;
