import React from "react";
import { COPYRIGHT } from "../../constants/copyright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-white border-0 border-t mt-24 py-24 border-white border-opacity-15">
      <div className="container sm:smContainer text-center">
        <Link to={"/admin"}>Admin Dashboard</Link>
        <p>{COPYRIGHT}</p>
      </div>
    </div>
  );
}
