import React from "react";
import { COPYRIGHT } from "../../constants/copyright";

export default function Footer() {
  return (
    <div className="text-white border-0 border-t mt-24 py-24 border-white border-opacity-15">
      <div className="container sm:smContainer text-center">
        <p>{COPYRIGHT}</p>
      </div>
    </div>
  );
}
