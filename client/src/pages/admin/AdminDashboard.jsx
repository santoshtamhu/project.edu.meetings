import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminDashboard() {
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
