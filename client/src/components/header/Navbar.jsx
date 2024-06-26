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

  // handle navbar style when scrolled
  const handleNavbar = () => {
    const mainDiv = document.querySelector(".main-navbar-div");
    const secDiv = document.querySelector(".sec-navbar-div");

    let scroll = 50;

    // scroll 600px only on the home page, 50px on all the rest of the pages.
    if (location.pathname === "/") {
      scroll = 600;
    }

    if (window.scrollY > scroll) {
      // add classes in main div
      mainDiv.classList.add(
        "lg:text-black",
        "fixed",
        "transition-all",
        "duration-700",
        "transform",
        "md:-translate-y-1/2",
        "-translate-y-full"
      );
      mainDiv.classList.remove("lg:bg-opacity-15", "lg:text-white"); // remove classes from main div
      secDiv.classList.add("md:h-20"); // add classes in sec div
      secDiv.classList.remove("md:h-24"); // remove classes from sec div
    } else {
      mainDiv.classList.add("lg:bg-opacity-15", "text-black", "lg:text-white"); // add  classes from main div
      // remove classes from main div
      mainDiv.classList.remove(
        "lg:text-black",
        "fixed",
        "transform",
        "md:-translate-y-1/2",
        "-translate-y-full"
      );
      secDiv.classList.add("md:h-24"); // add classes from sec div
      secDiv.classList.remove("md:h-20"); // remove classes from sec div
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    // cleanup function to remove the eventListner
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [location.pathname]);

  // Smooth Scrolling
  const scrollTo = (section) => {
    navigate("/");
    const screenWidth = window.innerWidth;

    const sWidth = screenWidth < 640;
    const smWidth = screenWidth < 768;
    const mdWidth = screenWidth < 1024;
    const lgWidth = screenWidth < 1280;
    const xlWidth = screenWidth < 1536;

    setTimeout(() => {
      let targetPosition = 0;
      // Set target position based on the section and screen size
      if (section == "cta") {
        targetPosition = sWidth
          ? 3300
          : smWidth
          ? 3100
          : mdWidth
          ? 3100
          : lgWidth
          ? 2000
          : xlWidth
          ? 1900
          : 2050;
      } else if (section == "courses") {
        targetPosition = sWidth
          ? 5000
          : smWidth
          ? 4450
          : mdWidth
          ? 4300
          : lgWidth
          ? 2880
          : xlWidth
          ? 2800
          : 2800;
      } else {
        targetPosition = sWidth
          ? 7200
          : smWidth
          ? 6600
          : mdWidth
          ? 6420
          : lgWidth
          ? 4300
          : 4200;
      }

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className="w-full bg-white lg:bg-opacity-15 main-navbar-div lg:text-white">
      <div className="md:h-24 md:mdContainer sm:smContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer items-center sec-navbar-div font-poppins flex justify-around md:justify-between">
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
          } absolute container sm:smContainer md:mdContainer md:top-24 bg-white top-[42px]`}
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
            <li
              onClick={() => scrollTo("cta")}
              className="cta border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200"
            >
              apply now
            </li>
            <li
              onClick={() => scrollTo("courses")}
              className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200"
            >
              courses
            </li>
            <li
              onClick={() => scrollTo("contact us")}
              className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200"
            >
              contact us
            </li>
          </ul>
        </menu>

        {/* MENU FOR LARGER SCREENS */}

        <menu className="hidden lg:block">
          <ul
            className={`flex gap-7 text-[14px] uppercase font-medium tracking-wider `}
          >
            <li>
              <NavLink to="/" className={`hover:text-yellow-500`}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/meetings" className={`hover:text-yellow-500 `}>
                meetings
              </NavLink>
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => scrollTo("cta")}
            >
              apply now
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => scrollTo("courses")}
            >
              courses
            </li>
            <li
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => scrollTo("contact us")}
            >
              contact us
            </li>
          </ul>
        </menu>
      </div>
    </div>
  );
}
