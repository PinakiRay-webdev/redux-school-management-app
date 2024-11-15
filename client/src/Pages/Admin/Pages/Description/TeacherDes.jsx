import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux';
import { CiLocationOn, CiHome, CiPhone } from "react-icons/ci";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { BsCake2 } from "react-icons/bs";
import { getMentors } from '../../../../Redux/slice/userSlice';

const TeacherDes = () => {
    const params = useParams();
    const teacherID = params.id;

    const teachersData = useSelector((state) => state.user.mentors.find((e) => e.id === teacherID))
  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMentors())
  },[dispatch , teachersData])

  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`} >
      <div className=''>
      <main className="h-[65vh] border relative">
        <div className="w-full h-[30vh] bg-purple-200">
            {/* userImage */}
            <div className="w-[10rem] h-[10rem] rounded-full bg-purple-400 absolute top-32 border-4 border-white  left-8"></div>

            {/* user details  */}

            <div className="absolute bottom-10 left-8 w-[90vw] flex items-start justify-between">
              <div>
                <h1 className="capitalize font-bold text-3xl">
                  {teachersData?.FirstName} {teachersData?.LastName}
                </h1>
                {/* user address  */}
                <div className="flex gap-2 items-center py-1">
                  <p>
                    <CiLocationOn />
                  </p>
                  <p>
                    {teachersData?.City ? teachersData?.City : "Not Known"},{" "}
                    {teachersData?.State ? teachersData?.State : "Not Known"}
                  </p>
                </div>

                {/* bio of user  */}
                <p>
                  {teachersData?.Role} of {teachersData?.Class}
                  <sup>th</sup> class
                </p>


                  <p>
                    {teachersData?.Role} of {teachersData?.Department} subject
                  </p>
              </div>

              {/* personal details  */}
              <div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiHome />
                  </p>
                  <p>
                    {teachersData?.Landmark
                      ? teachersData?.Landmark
                      : "Not Known"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiPhone />
                  </p>
                  <p>
                    {teachersData?.Phone
                      ? teachersData?.Phone
                      : "Not known"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    {teachersData?.Gender === "male" ? (
                      <IoIosMale />
                    ) : (
                      <IoIosFemale />
                    )}
                  </p>
                  <p>
                    {teachersData?.Gender
                      ? teachersData?.Gender
                      : "Not Known"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <BsCake2 />
                  </p>
                  <p>
                    {teachersData?.DOB ? teachersData?.DOB : "Not Known"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TeacherDes
