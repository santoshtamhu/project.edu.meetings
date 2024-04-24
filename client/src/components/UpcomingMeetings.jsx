import React, { useEffect, useState } from "react";
import MeetingCategories from "./MeetingCategories";
import Meeting from "./common/Meeting";
import axios from "axios";
import { API_URL } from "../constants/domain";

export default function UpcomingMeetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await axios.get(API_URL + "/meetings");
        setMeetings(res.data.meetings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeetings();
  }, []);

  const showMeetings = meetings.slice(0, 4);

  return (
    <div className="mb-24">
      <h1 className="uppercase my-14 text-white text-xl font-bold text-center">
        Upcoming Meetings
        <hr className=" border-white border-opacity-15 mt-6" />
      </h1>
      <div className="lg:lgContainer container md:mdContainer sm:smContainer xl:xlContainer 2xl:xxlContainer lg:grid lg:gap-16 grid-cols-3">
        <div className="mb-8 col-span-1">
          <MeetingCategories />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-6 lg:grid lg:gap-5 grid-cols-2">
            {showMeetings.map((el) => {
              return (
                <div key={el._id}>
                  <Meeting meeting={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
