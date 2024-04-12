import axios from "axios";
import React, { useEffect, useState } from "react";
import Meeting from "../components/common/Meeting";

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/meetings")
      .then((res) => {
        setMeetings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="bg-[url('assets/images/bg-images/heading-bg.jpg')] bg-cover bg-center text-white uppercase pt-44 pb-32 text-center">
        <p className="font-semibold mb-4 text-[15px]">
          here are our upcoming meetings
        </p>
        <h1 className="text-4xl font-bold">upcoming meetings</h1>
      </div>
      <div className="mt-28">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="btn w-auto ">All Meetings</button>
          <button className="btn w-auto">Soon</button>
          <button className="btn w-auto">Important</button>
          <button className="btn w-auto">Attractive</button>
        </div>
        {/*  <div
          className="
        container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer md:grid md:grid-cols-2 lg:grid-cols-3 mt-16 flex flex-col gap-6
        "
        > */}
        <div className="mt-20 container md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer md:columns-2 md:gap-8 lg:columns-3">
          {meetings.map((meeting) => {
            return (
              <div className="mb-8">
                <Meeting meeting={meeting} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
