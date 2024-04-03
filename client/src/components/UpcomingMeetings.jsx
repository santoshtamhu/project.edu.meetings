import React, { useEffect, useState } from "react";
import MeetingCategories from "./MeetingCategories";
import Meeting from "./common/Meeting";
import axios from "axios";

export default function UpcomingMeetings() {
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
      <h1 className="uppercase my-14 text-white text-xl font-bold text-center">
        Upcoming Meetings
        <hr className=" border-white border-opacity-15 mt-6" />
      </h1>
      <div className="lg:lgContainer container md:mdContainer sm:smContainer xl:xlContainer 2xl:xxlContainer lg:grid lg:gap-16 grid-cols-3">
        <div className="mb-8 col-span-1">
          <MeetingCategories />
        </div>
        <div className="col-span-2">
          <div className="lg:grid lg:gap-5 grid-cols-2">
            {meetings.map((el) => {
              return (
                <div key={el._id}>
                  <Meeting meeting={el} />;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
