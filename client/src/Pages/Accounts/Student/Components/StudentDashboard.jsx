import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "@mui/material/CircularProgress";
import { BarChart } from "@mui/x-charts/BarChart";
import MiniCalender from "../../../Global/Calender/MiniCalender";

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
      if (currentStudentInfo) {
        setMarks(Object.values(currentStudentInfo.Marks));
      }
    }, 800);

    return () => {
      clearInterval(delay);
    };
  }, [currentStudentInfo]);



  return (
    <div
      className={`w-full h-fit ${
        sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"
      } transition-all duration-150 ease-in-out bg-[#f5f3f4] h-screen`}
    >
      <div className="px-3 py-4 grid grid-cols-4 grid-rows-4 gap-5">

        <div className="col-span-3 gap-2">

          <div className="grid grid-cols-3 gap-3">
            {/* avg marks section  */}
            <div className="border border-zinc-300 rounded-lg h-32 px-3 py-2 shadow-xl">
              <h1 className="font-semibold capitalize">
                Your Average mark is{" "}
              </h1>
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

            {/* for testing  */}
            <div className="border border-zinc-300 rounded-lg h-32 px-3 py-2 shadow-xl">
              <h1 className="font-semibold capitalize">
                Your Average mark is{" "}
              </h1>
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

            {/* for testing  */}
            <div className="border border-zinc-300 rounded-lg h-32 px-3 py-2 shadow-xl">
              <h1 className="font-semibold capitalize">
                Your Average mark is{" "}
              </h1>
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
          </div>
        </div>

        <div className="row-span-4 col-span-1">
          <MiniCalender />
        </div>

        <div className="row-span-3 col-span-3 border border-zinc-300 rounded-lg shadow-xl">
          <BarChart
            
            xAxis={[
              {
                scaleType: "band",
                data: ["Physics", "Maths", "Chemistry", "Biology", "IT"],
              },
            ]}
            series={[{ data: marks }]}
            width={1000}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
