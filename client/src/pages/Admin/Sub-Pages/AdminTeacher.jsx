import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TbMessageCircleUser , TbUserX } from "react-icons/tb";
import { FaUserTie , FaUserTag } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { getUsers } from "../../../Redux/slice/userSlice";
const AdminTeacher = () => {
  const userData = useSelector((state) =>
    state.user.users.filter((role) => role.Role === "mentor")
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="w-full h-fit pl-32">
      <div className="px-3 py-5">

        <div className="grid grid-cols-4 gap-3" >
        {userData.map((Element, id) => (
          <div
            className="rounded-lg bg-[#eaf4f4] py-3 px-5 shadow-lg relative "
            key={id}
          >
            <header className="flex flex-col items-center justify-center gap-3">
              <p className="text-4xl">
                <FaUserTie />
              </p>
              <div>
                <p className="text-xl capitalize text-center ">{`${Element.FirstName} ${Element.LastName}`}</p>
                <p className="text-sm font-bold text-center">{Element.Email}</p>
              </div>

              <Link to={`/admin/teacher/${Element.id}`} >              
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

              <div className="flex items-center gap-1">
                <p className="text-xl cursor-pointer">
                  <TbMessageCircleUser />
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-xl cursor-pointer text-red-600">
                  <TbUserX />
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeacher;
