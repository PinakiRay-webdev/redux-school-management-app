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
import StudentHome from "./pages/Student/StudentHome";
import StudentDes from "./pages/Admin/Sub-Pages/StudentDes";
import TeacherDes from "./pages/Admin/Sub-Pages/TeacherDes";
import MentorDashboard from "./pages/Mentor/sub-pages/MentorDashboard";
import MentorSidebar from "./pages/Mentor/MentorSidebar";
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
      path: "/studentDashboard/dashboard",
      element:(
        <>
        <Navbar/>
        <StudentHome/>
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
