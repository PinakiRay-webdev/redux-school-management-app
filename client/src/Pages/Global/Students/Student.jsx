import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TbMessageCircleUser, TbUserX } from "react-icons/tb";
import { TfiBlackboard } from "react-icons/tfi";
import { MdCreditScore } from "react-icons/md";
import { FaUserGraduate, FaUserTag } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { deleteUser, getUsers } from "../../../Redux/slice/userSlice";
import EditUsers from "../../Accounts/Admin/EditUsers";
import AssignMarks from "../../Accounts/Mentor/AssignMarks";

const Student = () => {
  
  const usersData = useSelector((state) =>
    state.user.students.filter((role) => role.Role === "student")
  );
  const theme = useSelector((state) => state.theme.isBlack);
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();

  const isAdminLoggedIn = JSON.parse(localStorage.getItem("adminCredentials"));
  const isMentorLoggedIn = JSON.parse(
    localStorage.getItem("mentorCredentials")
  );

  const user = isAdminLoggedIn ? "admin" : "mentor";

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [isEditActivate, setIsEditActivate] = useState("scale-0");
  const [isMarksActivate, setIsMarksActivate] = useState("scale-0");
  const [userID, setUserID] = useState(null);

  const openEditForm = (id) => {
    setIsEditActivate("scale-100");
    setUserID(id);
  };

  const openMarksForm = (id) =>{
    setIsMarksActivate("scale-100");
    setUserID(id);
  }



  return (
    <div className={`w-full h-fit ${theme ? "bg-[#0d1321]" : "bg-[#f5f3f4]"} h-screen ${sidebarStatus ? "pl-[12vw]" : "pl-[5vw]" }`}>
      {/* mini navbar section for filter */}

      <div className="px-3 py-5">
        <div className="grid grid-cols-4 gap-6">
          {usersData.map((Element, id) => (
            <div
              className="rounded-lg bg-[#eaf4f4] py-3 px-5 shadow-lg relative "
              key={id}
            >
              <header className="flex flex-col items-center justify-center gap-3">
                <p className="text-4xl">
                  <FaUserGraduate />
                </p>
                <div>
                  <p className="text-xl capitalize text-center ">{`${Element.FirstName} ${Element.LastName}`}</p>
                  <div className="flex items-center">
                    <p className="text-sm font-bold text-center pr-3">
                      {Element.Email}
                    </p>
                    |
                    <span className="text-xl pl-3 pr-1">
                      <TfiBlackboard />
                    </span>
                    <span className="font-bold text-sm">
                      {Element.Class}
                      <sup>th</sup>{" "}
                    </span>
                  </div>
                </div>

                {/* view more menu  */}

                <Link to={`/${user}/student/${Element.id}`}>
                  <i className="absolute top-2 right-5  border border-zinc-600 rounded-full p-1 cursor-pointer">
                    <CiMenuKebab />
                  </i>
                </Link>
              </header>

              <div className="flex items-center justify-between pt-6">
                <div className="flex items-start gap-1">
                  <p className="text-xl">
                    <FaUserTag />
                  </p>
                  <p>{Element.Role}</p>
                </div>

                <div className="flex items-center gap-5">
                  <p className="text-xl cursor-pointer">
                    <TbMessageCircleUser />
                  </p>

                  {isAdminLoggedIn && (
                    <p
                      onClick={() => openEditForm(Element.id)}
                      className="text-xl cursor-pointer"
                    >
                      <LiaUserEditSolid />
                    </p>
                  )}

                  {isAdminLoggedIn && (
                    <p
                      onClick={() => dispatch(deleteUser(Element.id))}
                      className="text-xl cursor-pointer text-red-600"
                    >
                      <TbUserX />
                    </p>
                  )}

                  {isMentorLoggedIn && (
                    <div className="flex items-center gap-1">
                      <p onClick={() => openMarksForm(Element.id)} className="text-xl cursor-pointer text-red-600 flex">
                        <MdCreditScore />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EditUsers
        isEditActivate={isEditActivate}
        setIsEditActivate={setIsEditActivate}
        userID={userID}
      />

      {isMentorLoggedIn && (
        <AssignMarks
        isMarksActivate={isMarksActivate}
        setIsMarksActivate={setIsMarksActivate}
          userID={userID}
        />
      )}
    </div>
  );
};

export default Student;
