import React from "react";
import { useSelector } from "react-redux";
import { CiLocationOn, CiHome, CiPhone } from "react-icons/ci";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { BsCake2 } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);

  const student = JSON.parse(localStorage.getItem("studentCredentials"));

  const currentStudent = useSelector((state) =>
    state.user.students.find((e) => e.Email === student.student_mail)
  );

  const navigate = useNavigate();


  const handleEdit = () => {

    navigate('/studentDashboard/profile/editProfile')
    
  }

  return (
    <div
      className={`w-full h-fit overflow-y-hidden ${
        sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"
      } transition-all duration-150 ease-in-out`}
    >
      <div className="px-3 py-2">
        <main className="h-[65vh] border relative">

            {/* edit profile button */}
            <p onClick={handleEdit} className="absolute right-4 top-4 text-3xl text-purple-600 cursor-pointer" ><FaUserEdit/></p>

          {/* background image */}
          <div className="w-full h-[30vh] bg-purple-200">
            {/* userImage */}
            <div className="w-[10rem] h-[10rem] rounded-full bg-purple-400 absolute top-32 border-4 border-white  left-8"></div>

            {/* user details  */}

            <div className="absolute bottom-10 left-8 w-[90vw] flex items-start justify-between">
              <div>
                <h1 className="capitalize font-bold text-3xl">
                  {currentStudent?.FirstName} {currentStudent?.LastName}
                </h1>
                {/* user address  */}
                <div className="flex gap-2 items-center py-1">
                  <p>
                    <CiLocationOn />
                  </p>
                  <p>
                    {currentStudent?.City ? currentStudent?.City : "Not Known"}, {currentStudent?.State ? currentStudent.State : "Not Known"}
                  </p>
                </div>

                {/* bio of user  */}
                <p>
                  {currentStudent?.Role} of {currentStudent?.Class}
                  <sup>th</sup> class
                </p>
              </div>

                {/* personal details  */}
              <div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiHome />
                  </p>
                  <p>{currentStudent?.Landmark ? currentStudent?.Landmark : "Not Known"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiPhone />
                  </p>
                  <p>{currentStudent?.Phone ? currentStudent?.Phone : "Not known"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    {currentStudent?.Gender === "male" ? (
                      <IoIosMale />
                    ) : (
                      <IoIosFemale />
                    )}
                  </p>
                  <p>{currentStudent?.Gender ? currentStudent?.Gender : "Not Known"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <BsCake2 />
                  </p>
                  <p>{currentStudent?.DOB ? currentStudent?.DOB : "Not Known" }</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
