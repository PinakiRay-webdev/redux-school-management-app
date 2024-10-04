import closeEyesIcon from "../assets/eye-close.svg";
import openEyesIcon from "../assets/eye-show.svg";
import loaderGif from "../assets/loader.gif";
import loginBg from "../assets/login-bg.svg";
import githubIcon from "../assets/github.svg";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import adminPic from "../assets/adminPic.svg";

import { MdOutlineDashboard } from "react-icons/md";
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline, IoTicket } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";

export const closeEyes = closeEyesIcon;
export const openEyes = openEyesIcon;
export const loader = loaderGif;
export const loginImg = loginBg;
export const facebook = facebookIcon;
export const github = githubIcon;
export const google = googleIcon;
export const admin = adminPic;
export const dashboard = MdOutlineDashboard;
export const student = PiStudent;
export const teacher = PiChalkboardTeacher;
export const subject = GoBook;
export const earnings = LiaRupeeSignSolid;
export const message = AiOutlineMessage;
export const settings = IoSettingsOutline;
export const closeBtn = IoIosCloseCircle;
export const classes = FaChalkboardTeacher;
export const statistics = BiStats;
export const assignment = MdOutlineAssignmentTurnedIn;
export const messages = LuMessagesSquare;

export const sideBarNav = [
  {
    id: 1,
    item: "dashboard",
    icon: dashboard,
  },
  {
    id: 2,
    item: "student",
    icon: student,
  },
  {
    id: 3,
    item: "teacher",
    icon: teacher,
  },
  {
    id: 4,
    item: "subjects",
    icon: subject,
  },
  {
    id: 5,
    item: "earnings",
    icon: earnings,
  },
  {
    id: 6,
    item: "messages",
    icon: message,
  },
  {
    id: 7,
    item: "settings",
    icon: settings,
  },
];

export const Admin_Dashboard_Stats = [
  {
    id: 1,
    icon: PiStudent,
    role: "students",
  },
  {
    id: 2,
    icon: PiChalkboardTeacher,
    role: "mentors",
  },
  {
    id: 3,
    icon: GoBook,
    role: "subjects",
  },
];

export const mentorSideBar = [
  {
    id: 1,
    icon: dashboard,
    item: "dashboard",
  },
  {
    id: 2,
    icon: student,
    item: "students",
  },
];

export const studentSideBarNav = [
  {
    id: 1,
    icon: dashboard,
    item: "dashboard",
  },
  {
    id: 2,
    icon: subject,
    item: "subjects",
  },
  {
    id: 3,
    icon: classes,
    item: "classes",
  },
  {
    id: 4,
    icon: statistics,
    item: "statistics",
  },
  {
    id: 5,
    icon: assignment,
    item: "assignments",
  },
  {
    id: 6,
    icon: message,
    item: "messages",
  },
  {
    id: 7,
    icon: settings,
    item: "settings",
  },
];
