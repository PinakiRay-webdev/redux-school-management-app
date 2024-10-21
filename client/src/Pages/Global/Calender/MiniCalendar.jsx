import React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const MiniCalendar = () => {
  return (
    <div className="border shadow-lg shadow-zinc-500 bg-[#edf2fb] rounded-lg h-[100%]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DateCalendar defaultValue={dayjs(new Date())} readOnly />
        </DemoContainer>
        <div className="bg-black py-2 px-1 mt-[-1rem] relative z-10 flex items-center justify-between" >
          <p className="text-white capitalize" >Upcomming events</p>
          <p className="text-white capitalize cursor-pointer text-xl" ><MdOutlineAddCircleOutline/></p>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default MiniCalendar;
