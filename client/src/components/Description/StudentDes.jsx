import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../Redux/slice/userSlice";
import { CiLocationOn, CiHome, CiPhone } from "react-icons/ci";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { BsCake2 } from "react-icons/bs";
import { PieChart } from "@mui/x-charts/PieChart";

import { Gauge } from "@mui/x-charts/Gauge";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StudentDes = () => {
  function createData(name, Marks) {
    return { name, Marks };
  }

  const rows = [
    { name: "Physics", markKey: "physics" },
    { name: "Maths", markKey: "maths" },
    { name: "Chemistry", markKey: "chemistry" },
    { name: "Biology", markKey: "biology" },
    { name: "IT", markKey: "IT" },
  ];

  const params = useParams();
  const studentID = params.id;

  const studentData = useSelector((state) =>
    state.user.students.find((e) => e.id === studentID)
  );
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const highestMarks = studentData
    ? Object.entries(studentData.Marks).reduce((highest, current) => {
        const [subject, mark] = current;
        return Number(mark) > Number(highest[1]) ? current : highest;
      })
    : ["N/A", 0];

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div
      className={`w-full h-fit ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} `}
    >
      <div className="">
        <main className="h-[65vh] border relative">
          <div className="w-full h-[30vh] bg-purple-200">
            {/* userImage */}
            <div className="w-[10rem] h-[10rem] rounded-full bg-purple-400 absolute top-32 border-4 border-white  left-8"></div>

            {/* user details  */}

            <div className="absolute bottom-10 left-8 w-[90vw] flex items-start justify-between">
              <div>
                <h1 className="capitalize font-bold text-3xl">
                  {studentData?.FirstName} {studentData?.LastName}
                </h1>
                {/* user address  */}
                <div className="flex gap-2 items-center py-1">
                  <p>
                    <CiLocationOn />
                  </p>
                  <p>
                    {studentData?.City ? studentData?.City : "Not Known"},{" "}
                    {studentData?.State ? studentData?.State : "Not Known"}
                  </p>
                </div>

                {/* bio of user  */}
                <p>
                  {studentData?.Role} of {studentData?.Class}
                  <sup>th</sup> class
                </p>

                <p>
                  {studentData?.Role} of {studentData?.Department} subject
                </p>
              </div>

              {/* personal details  */}
              <div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiHome />
                  </p>
                  <p>
                    {studentData?.Landmark
                      ? studentData?.Landmark
                      : "Not Known"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiPhone />
                  </p>
                  <p>{studentData?.Phone ? studentData?.Phone : "Not known"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    {studentData?.Gender === "male" ? (
                      <IoIosMale />
                    ) : (
                      <IoIosFemale />
                    )}
                  </p>
                  <p>
                    {studentData?.Gender ? studentData?.Gender : "Not Known"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <BsCake2 />
                  </p>
                  <p>{studentData?.DOB ? studentData?.DOB : "Not Known"}</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* statistic  */}
        <div className="grid grid-cols-3 gap-[8rem] px-3 py-5">
          <div className="shadow-lg rounded-md py-3 bg-slate-50 flex gap-5">
            <div>
            <Gauge
              width={100}
              height={100}
              value={studentData?.avgMark}
              valueMin={0}
              valueMax={100}
            />
            </div>
            <div className="" >
              <p>Average marks</p>
              <p className="text-4xl font-semibold">{studentData?.avgMark}</p>
            </div>
          </div>

          <div className="shadow-lg rounded-md py-3 bg-slate-50 flex gap-5">
          <div>
            <Gauge
              width={100}
              height={100}
              value={highestMarks[1]}
              valueMin={0}
              valueMax={100}
            />
            </div>
            <div>
            <p>Highest Marks</p>
            <p className="text-2xl font-semibold">{highestMarks[0]}: {highestMarks[1]}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 pr-[10vw]">
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    label: "Physics",
                    value: studentData?.Marks?.physics || 0,
                  },
                  {
                    id: 1,
                    label: "Math",
                    value: studentData?.Marks?.maths || 0,
                  },
                  {
                    id: 2,
                    label: "Chemistry",
                    value: studentData?.Marks?.chemistry || 0,
                  },
                  {
                    id: 3,
                    label: "Biology",
                    value: studentData?.Marks?.biology || 0,
                  },
                  { id: 4, label: "IT", value: studentData?.Marks?.IT || 0 },
                ],
              },
            ]}
            width={500}
            height={300}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell align="right">Marks</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      {studentData?.Marks?.[row.markKey] || "Not Available"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default StudentDes;
