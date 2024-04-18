import React from "react";
import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import MeetingDetails from "./pages/MeetingDetails";

export default function App() {
  const router = createBrowserRouter([
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
      <RouterProvider router={router} />
    </>
  );
}
