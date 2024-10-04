import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import Navbar from "./components/Navbar";
import AdminSideBar from "./pages/Admin/AdminSideBar";
import AdminDashboard from "./pages/Admin/Sub-Pages/AdminDashboard";
import AdminTeacher from "./pages/Admin/Sub-Pages/AdminTeacher";
import AdminStudent from "./pages/Admin/Sub-Pages/AdminStudent";
import AdminSubjects from "./pages/Admin/Sub-Pages/AdminSubjects";
import AdminEarnings from "./pages/Admin/Sub-Pages/AdminEarnings";
import Chat from "./pages/chat/Chat";
import AdminSettings from "./pages/Admin/Sub-Pages/AdminSettings";
import StudentDes from "./pages/Admin/Sub-Pages/StudentDes";
import TeacherDes from "./pages/Admin/Sub-Pages/TeacherDes";
import MentorDashboard from "./pages/Mentor/sub-pages/MentorDashboard";
import MentorSidebar from "./pages/Mentor/MentorSidebar";
import StudentSideBar from "./pages/Student/StudentSideBar";
import StudentDashboard from "./pages/Student/sub-pages/StudentDashboard";
import StudentSubjects from "./pages/Student/sub-pages/StudentSubjects"
import StudentClasses from "./pages/Student/sub-pages/StudentClasses"
import StudentStats from './pages/Student/sub-pages/StudentStats'
import StudentMessages from './pages/Student/sub-pages/StudentMessages'
import StudentAssignments from './pages/Student/sub-pages/StudentAssignments'
import StudentSettings from './pages/Student/sub-pages/StudentSettings'



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
    }
  ]);

  return (
    <React.Fragment >
      <RouterProvider router={myRouter}></RouterProvider>
    </React.Fragment>
  );
};

export default App;
