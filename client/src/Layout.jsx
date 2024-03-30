import React from "react";
import Headingbar from "./components/header/Headingbar";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div className="bg-slate-700">
      <Headingbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
