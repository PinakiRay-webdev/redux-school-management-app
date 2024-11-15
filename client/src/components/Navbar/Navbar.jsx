import React, { useEffect , useState } from 'react';
import { MdOutlineLightMode , MdModeNight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useSelector ,  useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from "react-icons/md";
import { getUsers } from '../../Redux/slice/userSlice';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { toggleTheme } from '../../Redux/slice/themeSlice';

const Navbar = () => {

    const location = useLocation();

    let [currentPage, setCurrentPage] = useState(null)
    const [isBlackTheme, setisBlackTheme] = useState(false);

    const navigate = useNavigate();
    const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
    const theme = useSelector((state) => state.theme.isBlack);
    
    const dispatch = useDispatch();
    
    const changeTheme = () =>{
        setisBlackTheme(!isBlackTheme);
        dispatch(toggleTheme())
    }
    
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    useEffect(()=>{
        let temp = location.pathname.slice(location.pathname.lastIndexOf("/")+1)
        setCurrentPage(temp)
    },[location])
    
    const mentor = JSON.parse(localStorage.getItem('mentorCredentials'));
    const admin = JSON.parse(localStorage.getItem('adminCredentials'));
    const student = JSON.parse(localStorage.getItem('studentCredentials'));


    const viewProfile = () =>{
        if(student){
            navigate('/studentDashboard/profile')
        }
        if(mentor){
            navigate('/mentorDashboard/Profile')
        }   
    }

    return (
        <div className={`${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} w-full h-[10vh] border-b shadow-xl ${theme ? "bg-[#051923]" : "bg-[#ffffff]"}`}>
            <div className='py-2 flex items-end justify-between px-3'>
                <div>
                    <h1 className={`text-3xl font-semibold capitalize ${theme ? "text-white" : "text-black"}`}> 
                        {currentPage}
                    </h1>
                </div>
                <div>
                    <div className='flex items-center gap-6'>
                        <p onClick={changeTheme} className={`text-lg rounded-full border border-zinc-300 p-1 cursor-pointer ${theme ? "text-white" : "text-black"}`}>
                            {isBlackTheme ? <MdModeNight /> : <MdOutlineLightMode/> }
                        </p>
                        <div className='p-1 cursor-pointer flex items-center gap-3'>
                            <p className={`text-lg ${theme ? "bg-white text-black" : "bg-black text-white"} p-1 rounded-full `}>
                                <FaUser />
                            </p>
                            <div>
                                <p className={`${theme ? "text-white" : "text-black"}`} >{admin ? admin.admin_mail : mentor ? mentor.mentor_mail : student.student_mail}</p>
                                <p className={`text-sm font-semibold opacity-80 ${theme ? "text-white" : "text-black"}`}>
                                    {admin ? `Admin` : mentor ? `${mentor.department} Mentor` : `Student`}
                                </p>
                            </div>
                            <p onClick={viewProfile} className='text-2xl'><MdKeyboardArrowRight /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
