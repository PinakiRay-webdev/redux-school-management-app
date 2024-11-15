import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import Calender from "./components/Calender/Calender";
import AdminSideBar from './Pages/Accounts/Admin/components/AdminSideBar'
import AdminDashboard from './Pages/Accounts/Admin/Pages/Dashboard/AdminDashboard'
import AdminTeacher from './Pages/Accounts/Admin/Pages/Teachers/AdminTeacher'
import AdminStudent from './components/Students/Student'
import AdminSubjects from './Pages/Accounts/Admin/Pages/Subjects/AdminSubjects'

import Chat from "./Pages/chat/Chat";
import AdminSettings from './Pages/Accounts/Admin/Pages/Settings/AdminSettings'
import StudentDes from './components/Description/StudentDes'
import TeacherDes from "./Pages/Accounts/Admin/Pages/Description/TeacherDes";
import MentorDashboard from './Pages/Accounts/Mentor/pages/MentorDashboard'
import MentorSidebar from './Pages/Accounts/Mentor/Components/MentorSidebar'
import StudentDashboard from './Pages/Accounts/Student/Pages/Dashboard/StudentDashboard'
import StudentSubjects from './Pages/Accounts/Student/Pages/Subjects/StudentSubjects'
import StudentClasses from './Pages/Accounts/Student/Pages/Classes/StudentClasses'
import StudentStats from './Pages/Accounts/Student/Components/StudentStats'
import StudentMessages from './Pages/Accounts/Student/Pages/Messages/StudentMessages'
import StudentAssignments from './Pages/Accounts/Student/Pages/Assignments/StudentAssignments'
import StudentSettings from './Pages/Accounts/Student/Components/StudentSettings'

import EditProfile from './Pages/Accounts/Student/functions/EditProfile'
import UserProfile from "./components/Profile/UserProfile";
import StudentSideBar from "./Pages/Accounts/Student/Components/StudentSideBar";
import Home from "./components/Home/Home"


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/adminDashboard/dashboard",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminDashboard/>
        </>
      )
    },
    {
      path: "/adminDashboard/teacher",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminTeacher/>
        </>
      )
    },
    {
      path: "/admin/teacher/:id",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <TeacherDes/>
        </>
      )
    },
    {
      path: "/adminDashboard/student",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminStudent/>
        </>
      )
    },

    {
      path: "/calender",
      element : <><Calender/></>
    },

        {
      path: "/admin/student/:id",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <StudentDes/>
        </>
      )
    },
    {
      path: "/adminDashboard/subjects",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminSubjects/>
        </>
      )
    },
    {
      path: "/adminDashboard/calendar",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <Calender/>
        </>
      )
    },
    {
      path: "/adminDashboard/message",
      element:(
        <>
        <Chat/>
        </>
      )
    },
    {
      path: "/adminDashboard/settings",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminSettings/>
        </>
      )
    },
    {
      path: "/mentorDashboard/dashboard",
      element:(
        <>
        <Navbar/>
        <MentorSidebar/>
        <MentorDashboard/>
        </>
      )
    },
    {
      path: "/mentorDashboard/students",
      element:(
        <>
        <Navbar/>
        <MentorSidebar/>
        <AdminStudent/>
        </>
      )
    },
    {
      path: "/mentorDashboard/profile",
      element:(
        <>
        <Navbar/>
        <MentorSidebar/>
        <UserProfile/>
        </>
      )
    },
    {
      path: "/mentor/student/:id",
      element:(
        <>
        <Navbar/>
        <MentorSidebar/>
        <StudentDes/>
        </>
      )
    },
    {
      path: "/studentDashboard/dashboard",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentDashboard/>
        </>
      )
    },
    {
      path: "/studentDashboard/subjects",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentSubjects/>
        </>
      )
    },
    {
      path: "/studentDashboard/classes",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentClasses/>
        </>
      )
    },
    {
      path : "/studentDashboard/statistics",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentStats/>
        </>
      )
    },
    {
      path : "/studentDashboard/assignments",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentAssignments/>
        </>
      )
    },
    {
      path : "/studentDashboard/calendar",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <Calender/>
        </>
      )
    },
    {
      path : "/studentDashboard/messages",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentMessages/>
        </>
      )
    },
    {
      path : "/studentDashboard/settings",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <StudentSettings/>
        </>
      )
    },
    {
      path : "/studentDashboard/profile",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <UserProfile/>
        </>
      )
    },
    {
      path : "/studentDashboard/profile/editProfile",
      element:(
        <>
        <Navbar/>
        <StudentSideBar/>
        <EditProfile/>
        </>
      )
    }
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={myRouter}></RouterProvider>
    </React.Fragment>
  );
};

export default App;
