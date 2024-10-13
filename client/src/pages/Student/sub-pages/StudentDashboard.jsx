import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../Redux/slice/userSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { BarChart } from "@mui/x-charts/BarChart";
const StudentDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("studentCredentials"));

  const studentInfo = useSelector((state) => state.user.students);
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  
  const currentStudentInfo = studentInfo?.find(
    (e) => e.Email === currentUser?.student_mail
  );

  const [avgMarks, setAvgMarks] = useState(0);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const delay = setInterval(() => {
      setAvgMarks(currentStudentInfo?.avgMark);
      if(currentStudentInfo)
      {
        setMarks(Object.values(currentStudentInfo.Marks))
      }
    }, 800);

    return () => {
      clearInterval(delay);
    };
  }, [currentStudentInfo]);


  


  return (
    <div className={`w-full h-fit ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`}>
      <div className="px-3 py-4 ">
        <header className="grid grid-cols-4 gap-4">
          {/* avg marks section  */}
          <div className="border border-zinc-300 rounded-lg h-32 px-3 py-2 shadow-xl">
            <h1 className="font-semibold capitalize">Your Average mark is </h1>
            <div className="flex items-end gap-3 pt-3">
              <CircularProgress
                size={75}
                variant="determinate"
                value={avgMarks}
              />
              <p className="font-bold text-4xl text-violet-700">
                {currentStudentInfo?.avgMark}
              </p>
            </div>
          </div>
        </header>

        <main>
          <BarChart className="border border-zinc-300 rounded-lg shadow-xl mt-5"
            xAxis={[
              { scaleType: "band", data: ["Physics" , "Maths" , "Chemistry" , "Biology" , "IT"] },
            ]}
            series={[{data : marks}]}
            width={1000}
            height={400}
          />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
