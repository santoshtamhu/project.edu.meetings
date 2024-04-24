import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import MeetingDetails from "./pages/MeetingDetails";
import Admin from "./pages/admin/Admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMeetings from "./pages/admin/AdminMeetings";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminCourses from "./pages/admin/AdminCourses";
import AddMeetings from "./pages/admin/AddMeetings";
import AddCourse from "./pages/admin/AddCourse";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminDashboard />,
      children: [
        {
          path: "meetings",
          element: <AdminMeetings />,
        },
        {
          path: "courses",
          element: <AdminCourses />,
        },
        {
          path: "profile",
          element: <AdminProfile />,
        },
        {
          path: "add-meeting",
          element: <AddMeetings />,
        },
        {
          path: "add-course",
          element: <AddCourse />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "meetings",
          children: [
            {
              path: "",
              element: <Meetings />,
            },
            {
              path: ":slug",
              element: <MeetingDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
