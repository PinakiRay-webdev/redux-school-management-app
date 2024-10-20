import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { studentSideBarNav } from "../../../Utils/Utils";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { openSlice } from "../../../Redux/slice/collapseSlice";
import { CiLogout } from "react-icons/ci";

const StudentSideBar = () => {
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
      <div className="absolute w-full top-[50%] translate-y-[-50%]">
        {studentSideBarNav.map((Element, id) => (
          <Link key={id} to={`/studentDashboard/${Element.item}`}>
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

      <div
        onClick={logout}
        className="flex justify-center absolute bottom-0 items-center gap-2 w-full cursor-pointer py-4"
      >
        <p
          className={`text-black text-2xl ${
            theme ? "text-[#ffffff]" : "text-[#051923]"
          }`}
        >
          <CiLogout />
        </p>
      </div>
    </div>
  );
};

export default StudentSideBar;
