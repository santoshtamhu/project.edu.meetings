import React from "react";

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
  return (
    <div className="rounded-3xl overflow-hidden">
      <div className="relative">
        <img
          src="https://students.ubc.ca/sites/students.ubc.ca/files/img_blog_20140819_JumpStart_39.jpg"
          alt=""
        />
        <span className="absolute top-4 left-4 font-semibold bg-white rounded-xl px-4 py-2">
          ${meeting.price}.00
        </span>
      </div>
      <div className="grid grid-cols-5  gap-5 p-7 bg-white">
        <div className="col-span-1 flex items-center flex-col">
          <span className="text-[13px] text-customRed uppercase font-semibold">
            {shortMonth}
          </span>
          <span className="text-xl font-semibold">{meeting.day}</span>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <h2 className="text-[18px] font-semibold">{meeting.title}</h2>
          <p className="text-[14px] leading-6">{meeting.description}</p>
        </div>
      </div>
    </div>
  );
}
