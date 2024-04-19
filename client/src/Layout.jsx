import React from "react";
import Headingbar from "./components/header/Headingbar";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";

export default function () {
  useScrollToTop();
  return (
    <div className="bg-[url('/bg-image/meetings-bg.jpg')] font-poppins bg-cover bg-fixed ">
      <Headingbar />
      <div className="relative">
        <div className="absolute top-0 z-50 w-full">
          <Navbar />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
