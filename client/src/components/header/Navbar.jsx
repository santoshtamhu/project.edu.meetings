import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const mainNavbar = document.querySelector(".main-navbar");
      const secNavbar = document.querySelector(".sec-navbar");
      if (mainNavbar) {
        if (window.scrollY > 600) {
          mainNavbar.classList.add(
            "text-black",
            "fixed",
            "transition-all",
            "duration-700",
            "top-10",
            "transform",
            "-translate-y-1/2"
          );
          mainNavbar.classList.remove("bg-opacity-15");
          secNavbar.classList.add("h-20");
          secNavbar.classList.remove("h-24");
        } else {
          mainNavbar.classList.add("bg-opacity-15");
          mainNavbar.classList.remove(
            "text-black",
            "fixed",
            "transition-all",
            "duration-700",
            "top-10",
            "transform",
            "-translate-y-1/2"
          );
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
    <div className="w-full bg-white bg-opacity-15 main-navbar text-white ">
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
