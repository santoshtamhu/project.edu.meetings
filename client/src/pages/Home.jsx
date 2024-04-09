import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import UpcomingMeetings from "../components/UpcomingMeetings";
import CTA from "../components/CTA";
import QuickInfo from "../components/QuickInfo";
import ContactForm from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import QuickFacts from "../components/QuickFacts";

export default function Home() {
  return (
    <div>
      <div className="relative mb-52">
        <Hero />
        <div className="absolute -bottom-36 sm:-bottom-40 md:-bottom-36 lg:-bottom-28 2xl:-bottom-32 right-auto left-1/2 -translate-x-1/2">
          <Highlights />
        </div>
      </div>
      <UpcomingMeetings />
      <div className="bg-[url('bg-image/apply-bg.jpg')]    py-36 mt-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:lgContainer xl:xlContainer 2xl:xxlContainer">
          <CTA />
          <QuickInfo />
        </div>
      </div>

      <QuickFacts />

      {/* Contact Form and Contact Info Container */}
      <div className="container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer lg:flex mt-8 lg:gap-8 items-center">
        <div className="flex-grow">
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
