import closeEyesIcon from '../assets/eye-close.svg'
import openEyesIcon from '../assets/eye-show.svg'
import loaderGif from '../assets/loader.gif';
import loginBg from '../assets/login-bg.svg';
import githubIcon from '../assets/github.svg';
import googleIcon from '../assets/google.svg';
import facebookIcon from '../assets/facebook.svg';
import adminPic from '../assets/adminPic.svg';
import { MdOutlineDashboard } from "react-icons/md";
import { PiStudent , PiChalkboardTeacher } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Icons } from 'react-toastify';

export const closeEyes = closeEyesIcon
export const openEyes = openEyesIcon
export const loader = loaderGif;
export const loginImg = loginBg;
export const facebook = facebookIcon;
export const github = githubIcon;
export const google = googleIcon;
export const admin = adminPic;
export const dashboard = MdOutlineDashboard
export const student = PiStudent
export const teacher = PiChalkboardTeacher
export const subject = GoBook
export const earnings = LiaRupeeSignSolid
export const message = AiOutlineMessage
export const settings = IoSettingsOutline

export const sideBarNav = [
    {
        id : 1,
        item : 'dashboard',
        icon : dashboard
    },
    {
        id : 2,
        item : 'student',
        icon : student
    },
    {
        id : 3,
        item : 'teacher',
        icon : teacher
    },
    {
        id : 4,
        item : 'subjects',
        icon : subject
    },
    {
        id : 5,
        item : 'earnings',
        icon : earnings
    },
    {
        id : 6,
        item : 'messages',
        icon : message
    },
    {
        id : 7,
        item : 'settings',
        icon : settings
    }
]

export const Admin_Dashboard_Stats = [
    {
        id : 1,
        icon : PiStudent,
        role : 'students',
    },
    {
        id : 2,
        icon :  PiChalkboardTeacher,
        role : 'mentors',
    },
    {
        id : 3,
        icon : GoBook,
        role : 'subjects',
    }
]

export const mentorSideBar = [
    {
        id : 1,
        icon : dashboard,
        item : "dashboard"
    },
    {
        id : 2,
        icon : student,
        item : 'students'
    }
] 