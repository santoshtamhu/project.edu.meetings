import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/domain";

export default function Meeting({ meeting }) {
  let { month } = meeting;

  const monthNames = {
    1: "JANUARY",
    2: "FEBRUARY",
    3: "MARCH",
    4: "APRIL",
    5: "MAY",
    6: "JUNE",
    7: "JULY",
    8: "AUGUST",
    9: "SEPTEMBER",
    10: "OCTOBER",
    11: "NOVEMBER",
    12: "DECEMBER",
  };

  month = monthNames[month];
  const shortMonth = month.slice(0, 3);

  const imageUrl = API_URL + meeting.image?.path;
  console.log(imageUrl);
  return (
    <div className="rounded-3xl h-full overflow-hidden ">
      <div className="relative">
        <Link to={`/meetings/${meeting._id}`}>
          <img
            src={
              meeting.image ? imageUrl : "assets/images/no-image/noimage.jpg"
            }
            alt=""
            className="w-full h-64 object-cover"
          />
        </Link>
        <span className="absolute top-4 left-4 font-semibold bg-white bg-opacity-90 rounded-xl px-3 py-2">
          ${meeting.price}.00
        </span>
      </div>
      <div className="grid grid-cols-5  gap-5 p-7 bg-white h-full">
        <div className="col-span-1 flex items-center flex-col">
          <span className="text-[13px] text-customRed uppercase font-semibold">
            {shortMonth}
          </span>
          <span className="text-xl font-semibold">{meeting.day}</span>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <Link to={`/meetings/${meeting._id}`}>
            <h2 className="text-[18px] font-semibold">{meeting.title}</h2>
          </Link>
          <p className="text-[14px] leading-6">{meeting.description}</p>
        </div>
      </div>
    </div>
  );
}
