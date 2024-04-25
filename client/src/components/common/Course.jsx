import React from "react";
import { API_URL } from "../../constants/domain";
import { IoStar } from "react-icons/io5";

export default function Course({ course }) {
  const imageUrl = API_URL + course.image?.path;
  const { rating } = course;

  console.log(imageUrl);

  let stars = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }

  return (
    <div>
      <div className="bg-white">
        <img
          src={
            course.image?.path ? imageUrl : "assets/images/no-image/noimage.jpg"
          }
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
