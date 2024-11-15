import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditUsers from "../../functions/EditUsers";
import { useSelector, useDispatch } from "react-redux";
import { TbMessageCircleUser, TbUserX } from "react-icons/tb";
import { PiBooksDuotone } from "react-icons/pi";
import { FaUserTie, FaUserTag } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { deleteMentor, getMentors} from "../../../../Redux/slice/userSlice";

const AdminTeacher = () => {
  const userData = useSelector((state) =>
    state.user.mentors.filter((role) => role.Role === "mentor")
  );

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)
  const theme = useSelector((state) => state.theme.isBlack);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMentors());
  }, [dispatch]);

  const [isEditActivate, setIsEditActivate] = useState("scale-0");
  const [userID, setUserID] = useState(null);

  const openEditForm = (id) => {
    setIsEditActivate("scale-100");
    setUserID(id);
  };

  const removeMentor = (userID) =>{
    dispatch(deleteMentor(userID))
  }

  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out ${theme ? "bg-[#0d1321]" : "bg-[#f5f3f4]"} h-screen`}>
      <div className="px-3 py-5">
        <div className="grid grid-cols-4 gap-3">
          {userData.map((Element, id) => (
            <div
              className="rounded-lg bg-[#eaf4f4] py-3 px-5 shadow-lg relative capitalize"
              key={id}
            >
              <header className="flex flex-col items-center justify-center gap-3">
                <p className="text-4xl">
                  <FaUserTie />
                </p>
                <div>
                  <p className="text-xl capitalize text-center ">{`${Element.FirstName} ${Element.LastName}`}</p>
                  <div className="flex items-center">
                    <p className="text-sm font-bold pr-3">
                      {Element.Email}
                    </p>
                    |
                    <span className="pl-3 pr-1">
                      <PiBooksDuotone />
                    </span>
                    <span className="text-sm font-bold" >{Element.Department}</span>
                  </div>
                </div>

                <Link to={`/admin/teacher/${Element.id}`}>
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
                  <p
                    onClick={() => openEditForm(Element.id)}
                    className="text-xl cursor-pointer"
                  >
                    <LiaUserEditSolid />
                  </p>
                  <p onClick={() => removeMentor(Element.id)} className="text-xl cursor-pointer text-red-600">
                    <TbUserX />
                  </p>
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
    </div>
  );
};

export default AdminTeacher;
