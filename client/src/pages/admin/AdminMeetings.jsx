import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/domain";

export default function AdminMeetings() {
  const [meetings, setMeetings] = useState([]);
  const [message, setMessage] = useState("");

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
  }, [message]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/meetings/${id}`);

      if (res.status === 200) {
        setMessage("Meeting deleted successfully");
      }
    } catch (error) {
      setMessage(error.response.data.message || "Failed to delete meeting!");
    }
  };

  return (
    <div className="m-8">
      <div className="text-3xl font-semibold mb-8">All Meetings</div>
      <div className="flex flex-col gap-4">
        {meetings.map((meeting) => {
          return (
            <div key={meeting._id} className="grid grid-cols-3 text-xl">
              <span>{meeting.title}</span>
              <span className="ml-28">Price: Rs.{meeting.price}</span>
              <button onClick={() => handleDelete(meeting._id)} className="btn">
                delete
              </button>
            </div>
          );
        })}
        {message ? (
          <div className="absolute top-10 right-20 text-red-400 text-lg">
            {message}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
