import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white bg-opacity-15">
      <div className="container h-24 items-center font-poppins text-white flex justify-between">
        <div className="text-[28px] tracking-wider font-bold ">EDU MEETING</div>
        <menu>
          <ul className="flex gap-7 text-[14px] font-medium tracking-wider">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>MEETINGS</li>
            <li>APPLY NOW</li>
            <li>PAGES</li>
            <li>COURSES</li>
            <li>CONTACT US</li>
          </ul>
        </menu>
      </div>
    </div>
  );
}
