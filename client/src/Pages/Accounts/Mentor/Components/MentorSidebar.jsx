import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { mentorSideBar } from "../../../../Utils/Utils";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { openSlice } from "../../../../Redux/slice/collapseSlice";
const MentorSidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
  const theme = useSelector((state) => state.theme.isBlack);
  const dispatch = useDispatch();

  return (
    <div
      className={`h-screen ${sideBarStatus ? "w-[12vw]" : "w-[5vw]"} ${
        theme ? "bg-[#051923]" : "bg-[#ffffff]"
      } fixed top-0 overflow-x-hidden transition-all duration-200 ease-in-out`}
    >
      <header className="flex justify-end px-3 py-4">
        <p
          onClick={() => dispatch(openSlice())}
          className={`text-xl cursor-pointer ${
            theme ? "text-[#ffffff]" : "text-[#051923]"
          }`}
        >
          {sideBarStatus ? <FaAngleLeft /> : <FaAngleRight />}
        </p>
      </header>
      <div className="flex flex-col items-center absolute w-full top-[50%] translate-y-[-50%] ">
        {mentorSideBar.map((Element, id) => (
          <Link key={id} to={`/mentorDashboard/${Element.item}`}>
            <div
              className={`flex items-center gap-3 my-10 px-4 ${
                sideBarStatus ? "" : "justify-center"
              }`}
            >
              <p
                className={`${
                  !theme ? "text-[#051923]" : "text-[#ffffff]"
                } text-2xl`}
              >
                {<Element.icon />}
              </p>
              <p
                className={`capitalize text-[#231942] text-sm font-semibold ${
                  sideBarStatus ? "block" : "hidden"
                } ${theme ? "text-[#ffffff]" : "text-[#051923]"} `}
              >
                {Element.item}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* logout button  */}
      <button
        onClick={logout}
        className="bg-black w-full text-white py-3 absolute bottom-0"
      >
        Logout
      </button>
    </div>
  );
};

export default MentorSidebar;
