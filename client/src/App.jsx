import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import Navbar from "./Pages1/Global/Navbar/Navbar";
import Calender from "./Pages1/Global/Calender/Calender";
import AdminSideBar from './Pages1/Accounts/Admin/AdminSideBar'
import AdminDashboard from './Pages1/Accounts/Admin/Components/AdminDashboard'
import AdminTeacher from './Pages1/Accounts/Admin/Components/AdminTeacher'
import AdminStudent from './Pages1/Accounts/Admin/Components/AdminStudent'
import AdminSubjects from './Pages1/Accounts/Admin/Components/AdminSubjects'
import AdminEarnings from './Pages1/Accounts/Admin/Components/AdminEarnings'
import Chat from "./Pages1/chat/Chat";
import AdminSettings from './Pages1/Accounts/Admin/Components/AdminSettings'
import StudentDes from "./pages1/Accounts/Admin/Components/StudentDes";
import TeacherDes from "./pages1/Accounts/Admin/Components/TeacherDes";
import MentorDashboard from './Pages1/Accounts/Mentor/Components/MentorDashboard'
import MentorSidebar from './Pages1/Accounts/Mentor/MentorSidebar'
import StudentDashboard from './Pages1/Accounts/Student/Components/StudentDashboard'
import StudentSubjects from './Pages1/Accounts/Student/Components/StudentSubjects'
import StudentClasses from './Pages1/Accounts/Student/Components/StudentClasses'
import StudentStats from './Pages1/Accounts/Student/Components/StudentStats'
import StudentMessages from './Pages1/Accounts/Student/Components/StudentMessages'
import StudentAssignments from './Pages1/Accounts/Student/Components/StudentAssignments'
import StudentSettings from './Pages1/Accounts/Student/Components/StudentSettings'

import EditProfile from './Pages1/Accounts/Student/EditProfile'
import UserProfile from "./components/UserProfile";
import StudentSideBar from "./Pages1/Accounts/Student/StudentSideBar";


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
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
      path: "/adminDashboard/earnings",
      element:(
        <>
        <Navbar/>
        <AdminSideBar/>
        <AdminEarnings/>
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
