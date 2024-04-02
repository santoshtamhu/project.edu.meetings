import React from "react";

export default function MeetingCategories() {
  return (
    <div className=" bg-white rounded-3xl p-10 flex flex-col gap-6">
      <div className="border-0 border-b pb-4">
        <h2 className="text-[18px] font-semibold">Meeting Categores</h2>
      </div>
      <div>
        <ul className="flex flex-col text-[15px] gap-3 font-medium">
          <li>Meeting Category 1</li>
          <li>Meeting Category 2</li>
          <li>Meeting Category 3</li>
          <li>Meeting Category 4</li>
          <li>Meeting Category 5</li>
        </ul>
      </div>
      <div className="border-0 border-t text-center pt-7">
        <button className="btn uppercase w-full">all upcoming courses</button>
      </div>
    </div>
  );
}
