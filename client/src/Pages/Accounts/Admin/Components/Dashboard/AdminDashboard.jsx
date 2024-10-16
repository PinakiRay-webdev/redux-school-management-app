import React, { useEffect , useState} from "react";
import {PiUserPlus } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { getMentors, getUsers } from "../../../../../Redux/slice/userSlice";
import { Admin_Dashboard_Stats } from "../../../../../Utils/Utils";
import AddUsers from '../../AddUsers'


const AdminDashboard = () => {

  const [isFormOpen, setIsFormOpen] = useState("scale-0")

  const handleForm = () =>{
      setIsFormOpen("scale-100")
  }
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const sideBarStatus = useSelector((state) => state.sidebar.isOpen)


  const students = userData.students
  const mentors = userData.mentors

  const handleUsers = (role) =>{
    if(role === 'students'){
      return students.length;
    } else if (role === 'mentors') {
      return mentors.length;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMentors());
  },[dispatch])


  return (
    <div className={`w-full h-fit overflow-y-hidden ${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} transition-all duration-150 ease-in-out`}>
      <div className="px-3 py-5">
        {/* stats section  */}
        <div className="grid grid-cols-4 gap-3">
          {Admin_Dashboard_Stats.map((Element, id) => (
            <div
              key={id}
              className="bg-[#9ef01a] flex items-start gap-3 rounded-lg"
            >
              <p className="text-8xl text-[#007200]">
                {<Element.icon/>}
              </p>

              <div>
                <p className="text-xl text-[#007200] font-semibold capitalize">
                  {"Total "+Element.role}
                </p>
                <p className="text-5xl font-black text-[#004b23]">
                  {handleUsers(Element.role)}
                </p>
              </div>
            </div>
          ))}

          {/* adding of a new user section  */}
          <div onClick={handleForm} className="bg-[#ffea00] flex flex-col items-center justify-center rounded-lg cursor-pointer" >
            <p className="text-7xl text-[#ff5400]" ><PiUserPlus/></p>
          </div>
        </div>
      </div>
        
        <AddUsers isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
};

export default AdminDashboard;
