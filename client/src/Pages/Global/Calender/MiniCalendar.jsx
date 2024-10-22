import React , {useEffect, useState} from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useSelector , useDispatch } from "react-redux";
import AddEvent from './AddEvent'
import { getEvents } from "../../../Redux/slice/EventSlice";


const MiniCalendar = () => {

  const [eventForm, setEventForm] = useState("scale-0")

  const openForm = () =>{
    setEventForm("scale-100")
  }



  return (
    <div className="border shadow-lg shadow-zinc-500 bg-[#edf2fb] rounded-lg h-[100%]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DateCalendar defaultValue={dayjs(new Date())} readOnly />
        </DemoContainer>
        <div className="bg-black py-2 px-1 mt-[-1rem] relative z-10 flex items-center justify-between" >
          <p className="text-white capitalize" >Upcomming events</p>
          <p onClick={openForm} className="text-white capitalize cursor-pointer text-xl" ><MdOutlineAddCircleOutline/></p>
        </div>
      </LocalizationProvider>
      <AddEvent eventForm={eventForm} setEventForm={setEventForm} />
    </div>
  );
};

export default MiniCalendar;
