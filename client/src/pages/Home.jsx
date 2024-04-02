import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import UpcomingMeetings from "../components/UpcomingMeetings";
import CTA from "../components/CTA";
import QuickInfo from "../components/QuickInfo";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <UpcomingMeetings />
      <div className="lg:flex lg:gap-10 lg:lgContainer xl:xlContainer 2xl:xxlContainer">
        <CTA />
        <QuickInfo />
      </div>
    </div>
  );
}
