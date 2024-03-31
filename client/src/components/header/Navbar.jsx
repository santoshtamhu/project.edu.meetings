import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const mainNavbar = document.querySelector(".main-navbar");
      const secNavbar = document.querySelector(".sec-navbar");
      if (mainNavbar) {
        if (window.scrollY > 0) {
          mainNavbar.classList.add("top-0", "text-black");
          mainNavbar.classList.remove("bg-opacity-15");
          secNavbar.classList.add("h-20");
          secNavbar.classList.remove("h-24");
        } else {
          mainNavbar.classList.add("bg-opacity-15");
          mainNavbar.classList.remove("top-0", "text-black");
          secNavbar.classList.add("h-24");
          secNavbar.classList.remove("h-20");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-white w-full bg-opacity-15 main-navbar transition-all duration-700 text-white fixed z-20">
      <div className="container h-24 items-center sec-navbar font-poppins flex justify-between">
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
