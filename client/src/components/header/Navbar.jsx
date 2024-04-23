import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const mainNavbar = document.querySelector(".main-navbar");
    const secNavbar = document.querySelector(".sec-navbar");

    let scroll = 50;
    // scroll 600px only on the home page, 50px on all the rest of the pages.
    if (location.pathname === "/") {
      scroll = 600;
    }

    if (window.scrollY > scroll) {
      mainNavbar.classList.add(
        "lg:text-black",
        "fixed",
        "transition-all",
        "duration-700",
        "transform",
        "md:-translate-y-1/2",
        "-translate-y-full"
      );
      mainNavbar.classList.remove("lg:bg-opacity-15", "lg:text-white");
      secNavbar.classList.add("md:h-20");
      secNavbar.classList.remove("md:h-24");
    } else {
      mainNavbar.classList.add(
        "lg:bg-opacity-15",
        "text-black",
        "lg:text-white"
      );
      mainNavbar.classList.remove(
        "lg:text-black",
        "fixed",
        "transform",
        "md:-translate-y-1/2",
        "-translate-y-full"
      );
      secNavbar.classList.add("md:h-24");
      secNavbar.classList.remove("md:h-20");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Scroll to the respective section when respective menu is clicked
  const scrollTo = (scrollTo) => {
    navigate("/");
    setTimeout(() => {
      let targetPosition = 0;
      if (scrollTo == "cta") {
        targetPosition = 2000;
      } else if (scrollTo == "courses") {
        targetPosition = 2800;
      } else {
        targetPosition = 4150;
      }
      window.scrollTo(0, targetPosition);
    }, 500);
  };

  return (
    <div className="w-full bg-white lg:bg-opacity-15 main-navbar lg:text-white">
      <div className="md:h-24 md:mdContainer sm:smContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer items-center sec-navbar font-poppins flex justify-around md:justify-between">
        <div className="text-[28px] tracking-wider font-bold">
          <Link to="/">EDU MEETING</Link>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          {!isOpen ? (
            <CgMenuLeft className="size-8" />
          ) : (
            <RxCross2 className="size-8" />
          )}
        </button>

        {/* MENU FOR SMALLER SCREENS */}

        <menu
          className={`${
            isOpen ? "block" : "hidden"
          } absolute container sm:smContainer bg-white top-[42px]`}
        >
          <ul>
            <li className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                home
              </NavLink>
            </li>
            <li className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200">
              <NavLink
                to="/meetings"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                meetings
              </NavLink>
            </li>
            <li className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200">
              apply now
            </li>
            <li className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200">
              courses
            </li>
            <li className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200">
              contact us
            </li>
          </ul>
        </menu>

        {/* MENU FOR LARGER SCREENS */}

        <menu className="hidden lg:block">
          <ul className="flex gap-7 text-[14px] uppercase font-medium tracking-wider">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meetings"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                meetings
              </NavLink>
            </li>
            <li onClick={() => scrollTo("cta")}>apply now</li>
            <li onClick={() => scrollTo("courses")}>courses</li>
            <li onClick={() => scrollTo("contact us")}>contact us</li>
          </ul>
        </menu>
      </div>
    </div>
  );
}
