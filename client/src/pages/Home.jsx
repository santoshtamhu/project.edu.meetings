import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import UpcomingMeetings from "../components/UpcomingMeetings";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <UpcomingMeetings />
    </div>
  );
}
