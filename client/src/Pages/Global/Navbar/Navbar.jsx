import React, { useEffect , useState } from 'react';
import { MdOutlineLightMode , MdModeNight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useSelector ,  useDispatch } from 'react-redux';
import { MdKeyboardArrowRight } from "react-icons/md";
import { getUsers } from '../../../Redux/slice/userSlice';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    let [currentPage, setCurrentPage] = useState(null)


    const navigate = useNavigate();
    const sideBarStatus = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();

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
    }

    return (
        <div className={`${sideBarStatus ? "pl-[12vw]" : "pl-[5vw]"} w-full h-[10vh] border-b shadow drop-shadow-2xl`}>
            <div className='py-2 flex items-end justify-between px-3'>
                <div>
                    <h1 className='text-3xl font-semibold capitalize'> 
                        {currentPage}
                    </h1>
                </div>

                <div>
                    <div className='flex items-center gap-6'>
                        <p className='text-lg rounded-full border border-zinc-300 p-1 cursor-pointer'>
                            <MdOutlineLightMode />
                        </p>
                        <div className='p-1 cursor-pointer flex items-center gap-3'>
                            <p className='text-lg bg-black text-white p-1 rounded-full'>
                                <FaUser />
                            </p>
                            <div>
                                <p>{admin ? admin.admin_mail : mentor ? mentor.mentor_mail : student.student_mail}</p>
                                <p className='text-sm font-semibold opacity-80'>
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
