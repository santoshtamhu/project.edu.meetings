import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import UpcomingMeetings from "../components/UpcomingMeetings";
import CTA from "../components/CTA";
import QuickInfo from "../components/QuickInfo";

export default function Home() {
  return (
    <div>
      <div className="relative mb-52">
        <Hero />
        <div className="absolute -bottom-36 lg:-bottom-28 right-auto left-1/2 -translate-x-1/2">
          <Highlights />
        </div>
      </div>
      <UpcomingMeetings />
      <div className="bg-[url('bg-image/apply-bg.jpg')] bg-center bg-cover bg-fixed py-36 mt-10">
        <div className=" lg:grid lg:grid-cols-2 lg:gap-14 lg:lgContainer xl:xlContainer 2xl:xxlContainer">
          <CTA />
          <QuickInfo />
        </div>
      </div>
    </div>
  );
}
