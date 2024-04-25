import React from "react";
import { IoStar } from "react-icons/io5";

export default function Course({ course }) {
  const imageUrl = course.image?.url;
  const { rating } = course;

  let stars = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }

  return (
    <div>
      <div className="bg-white">
        <img
          src={imageUrl ? imageUrl : "assets/images/no-image/noimage.jpg"}
          alt={`image of ${course.title}`}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-[18px] font-medium leading-6 text-center p-6">
          {course.title}
        </h2>
        <hr className="hr-style" />
        <div className="flex justify-between p-6">
          <span className="text-yellow-500 flex gap-[2px]">
            {stars.map((star) => {
              return (
                <div key={star}>
                  <IoStar />
                </div>
              );
            })}
          </span>
          <span className="font-semibold text-[15px]">${course.price}</span>
        </div>
      </div>
    </div>
  );
}
