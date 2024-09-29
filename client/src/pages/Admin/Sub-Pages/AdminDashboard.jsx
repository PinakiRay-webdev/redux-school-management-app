import React , {useState} from "react";
import { GoBook } from "react-icons/go";
import { useSelector } from "react-redux";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { HiMiniUserPlus } from "react-icons/hi2";import AddUsers from "../AddUsers";

const AdminDashboard = () => {

  const [isFormOpen, setIsFormOpen] = useState("scale-0")

  const handleForm = () =>{
    setIsFormOpen("scale-100")
  }

  const userInfo = useSelector((state) => state.user.users);

  const students = userInfo.filter(role => role.Role === 'student');
  const mentor = userInfo.filter(role => role.Role === 'mentor');

  return (
    <div className="pl-32 w-full h-fit">
      <div className="px-3 py-4">
        {/* stats section  */}
        <div className="grid grid-cols-4 gap-10">

          {/* total students  */}
          <div className="flex items-start gap-4 bg-[#6b9080] py-4 px-2 rounded-xl">
            <p className="text-7xl text-[#2f3e46]">
              <PiStudent />
            </p>
            <div>
            <p className="font-semibold text-[#cad2c5] ">Total Students</p>
            <p className="text-4xl text-[#cce3de]" >{students.length}</p>
            </div>
          </div>

          {/* total teachers  */}
          <div className="flex items-start gap-4 bg-[#6b9080] py-4 px-2 rounded-xl">
            <p className="text-7xl text-[#2f3e46]">
              <PiChalkboardTeacher />
            </p>
            <div>
            <p className="font-semibold text-[#cad2c5] ">Total Teachers</p>
            <p className="text-4xl text-[#cce3de]" >{mentor.length}</p>
            </div>
          </div>

          {/* total subjects  */}
          <div className="flex items-start gap-4 bg-[#6b9080] py-4 px-2 rounded-xl">
            <p className="text-7xl text-[#2f3e46]">
              <GoBook />
            </p>
            <div>
            <p className="font-semibold text-[#cad2c5] ">Total Subjects</p>
            <p className="text-4xl text-[#cce3de]" >0</p>
            </div>
          </div>

          <div onClick={handleForm} className="cursor-pointer flex items-start gap-4 bg-[#6b9080] py-4 px-2 rounded-xl" >
          <p className="text-7xl text-[#2f3e46]">
              <HiMiniUserPlus />
            </p>
            <div>
            <p className="font-semibold text-[#cad2c5] ">Add user</p>
            </div>
          </div>
        </div>
        
        <AddUsers isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </div>
    </div>
  );
};

export default AdminDashboard;
