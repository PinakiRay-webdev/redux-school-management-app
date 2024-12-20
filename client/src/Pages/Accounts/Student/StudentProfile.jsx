import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector} from "react-redux";
import { IoIosMale , IoIosFemale  } from "react-icons/io";
import { MdOutlineMail, MdOutlineCake } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const studentEmail = JSON.parse(localStorage.getItem("studentCredentials"));

  const currentStudent = useSelector((state) =>
    state.user.students.find((e) => e.Email === studentEmail.student_mail)
  );

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const navigate = useNavigate();

  const makeEdit = () =>{
    navigate('/studentDashboard/profile/editProfile');
  }

  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`}>
      <div className="px-3 py-2">
        <div className="flex justify-end">
          <button onClick={makeEdit} className="bg-amber-400 px-6 py-1 rounded-lg font-bold mb-2">
            Edit
          </button>
        </div>

        {/* personal bio  */}
        <div className="flex gap-3 py-6 px-3 rounded-xl border border-zinc-300 mx-3">
          {/* profile pic  */}
          <div>
            <p className="text-8xl border border-black w-fit rounded-full p-1">
              <FaUserCircle />
            </p>
          </div>

          {/* details section  */}
          <div className="flex flex-col gap-3">
            <header className="flex gap-3 items-end">
              <h3 className="capitalize text-xl font-semibold">
                {currentStudent?.FirstName} {currentStudent?.LastName}
              </h3>
              <p className="bg-blue-100 px-3 py-1 rounded-md text-sm font-bold text-zinc-600">{`Profile ID : ${currentStudent?.id}`}</p>
            </header>
            <main className="flex gap-5 items-center">
              {/* email of the student */}
              <div>
                <p className="flex items-center gap-2">
                  <span>
                    <MdOutlineMail />
                  </span>
                  {currentStudent?.Email}
                </p>
              </div>

              {/* gender of the student  */}

            <div>
              <p className="flex items-center gap-2">
                <span>
                  {currentStudent?.Gender === "male" ? <IoIosMale/> : currentStudent?.Gender === "female" ? <IoIosFemale/> : ""}
                </span>
                {currentStudent?.Gender}
              </p>
            </div>

              {/* birth date of the student  */}
              <div>
                <p className="flex items-center gap-2">
                  <span>
                    <MdOutlineCake />
                  </span>
                  {currentStudent?.DOB ? <p>{currentStudent?.DOB}</p> : "not known"}
                </p>
              </div>
            </main>

            <footer>
              <p className="flex items-center gap-2">
                <span>
                  <IoCallOutline />
                </span>
                {currentStudent?.Phone ? <p>{currentStudent?.Phone}</p> : "not Known"}
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
