import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("edu_admin_token");

    if (!token) {
      // Redirect to login if token is not present
      navigate("/admin");
    }
  }, [navigate]);
  return (
    <>
      <div>
        <div className="w-60 flex flex-col px-8 pt-10 text-xl font-semibold gap-4 bg-customRed fixed top-0 h-lvh text-white">
          <NavLink to={"/admin/dashboard/profile"}>Profile</NavLink>
          <NavLink to={"/admin/dashboard/meetings"}>Meetings</NavLink>
          <NavLink to={"/admin/dashboard/courses"}>Courses</NavLink>
          <NavLink to={"/admin/dashboard/add-meeting"}>Add New Meeting</NavLink>
          <NavLink to={"/admin/dashboard/add-course"}>Add New Course</NavLink>
        </div>
        <div className="ml-60">
          <Outlet />
        </div>
      </div>
    </>
  );
}
