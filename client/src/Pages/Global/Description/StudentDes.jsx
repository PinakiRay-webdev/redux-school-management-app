import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../Redux/slice/userSlice";
import { CiLocationOn, CiHome, CiPhone } from "react-icons/ci";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { BsCake2 } from "react-icons/bs";
import { PieChart } from "@mui/x-charts/PieChart";


const StudentDes = () => {
  const params = useParams();
  const studentID = params.id;

  const studentData = useSelector((state) =>
    state.user.students.find((e) => e.id === studentID)
  );
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

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

        <PieChart
          series={[
            {
              data: [
                { id: 0, label: "Physics", value: studentData?.Marks?.physics || 0},
                { id: 1, label: "Math", value: studentData?.Marks?.maths || 0},
                { id: 2, label: "Chemistry", value: studentData?.Marks?.chemistry || 0},
                { id: 3, label: "Biology", value: studentData?.Marks?.biology || 0},
                { id: 4, label: "IT", value: studentData?.Marks?.IT || 0},
              ],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default StudentDes;
