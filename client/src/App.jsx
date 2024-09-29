import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login";
import AdminHome from "./pages/Admin/AdminHome";
import Navbar from "./components/Navbar";
import AdminSideBar from "./pages/Admin/AdminSideBar";
import AdminDashboard from "./pages/Admin/Sub-Pages/AdminDashboard";
import AdminTeacher from "./pages/Admin/Sub-Pages/AdminTeacher";
import AdminStudent from "./pages/Admin/Sub-Pages/AdminStudent";
import AdminSubjects from "./pages/Admin/Sub-Pages/AdminSubjects";
import AdminEarnings from "./pages/Admin/Sub-Pages/AdminEarnings";
import Chat from "./pages/chat/Chat";
import AdminSettings from "./pages/Admin/Sub-Pages/AdminSettings";
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
    }
  ]);

  return (
    <React.Fragment >
      <RouterProvider router={myRouter}></RouterProvider>
    </React.Fragment>
  );
};

export default App;
