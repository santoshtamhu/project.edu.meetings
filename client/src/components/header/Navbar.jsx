import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let menuItems = [
    { title: "Home", to: "/" },
    { title: "Meetings", to: "/meetings" },
    { title: "Apply Now", to: "/form" },
    { title: "Pages", to: "/pages" },
    { title: "Courses", to: "/courses" },
    { title: "Contact", to: "/form" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainNavbar = document.querySelector(".main-navbar");
      const secNavbar = document.querySelector(".sec-navbar");

      if (window.scrollY > 600) {
        mainNavbar.classList.add(
          "md:text-black",
          "fixed",
          "transition-all",
          "duration-700",
          "transform",
          "md:-translate-y-1/2",
          "-translate-y-full"
        );
        mainNavbar.classList.remove("md:bg-opacity-15", "text-white");
        secNavbar.classList.add("md:h-20");
        secNavbar.classList.remove("md:h-24");
      } else {
        mainNavbar.classList.add("md:bg-opacity-15", "text-black");
        mainNavbar.classList.remove(
          "md:text-black",
          "fixed",
          "transform",
          "md:-translate-y-1/2",
          "-translate-y-full"
        );
        secNavbar.classList.add("md:h-24");
        secNavbar.classList.remove("md:h-20");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full bg-white md:bg-opacity-15 main-navbar md:text-white">
      <div className="md:h-24 md:mdContainer sm:smContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer items-center sec-navbar font-poppins flex justify-around md:justify-between">
        <div className="text-[28px] tracking-wider font-bold">
          <Link to="/">EDU MEETING</Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {!isOpen ? (
            <CgMenuLeft className="size-8" />
          ) : (
            <RxCross2 className="size-8" />
          )}
        </button>

        {/* Menu for smaller screens */}
        <menu
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute container sm:smContainer bg-white top-[42px]`}
        >
          <ul>
            {menuItems.map((item) => {
              return (
                <li
                  key={item.title}
                  className="border-t w-full h-12 flex uppercase items-center justify-center text-[14px] font-medium tracking-widest border-slate-200"
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </menu>

        {/* menu for larger screens */}
        <menu className="hidden md:block">
          <ul className="flex gap-7 text-[14px] uppercase font-medium tracking-wider">
            {menuItems.map((item) => {
              return (
                <li key={item.title}>
                  <NavLink
                    to={item.to}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </menu>
      </div>
    </div>
  );
}
