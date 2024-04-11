import React from "react";

export default function Course({ course }) {
  return (
    <div>
      <div className="bg-white">
        <img
          src="assets/images/courses/course-01.jpg"
          alt={`image of ${course.title}`}
          className="w-full"
        />
        <h2 className="text-[18px] font-medium leading-6 text-center p-6">
          {course.title}
        </h2>
        <hr className="hr-style" />
        <div className="flex justify-between p-6">
          <span>{course.rating}</span>
          <span className="font-semibold text-[15px]">${course.price}</span>
        </div>
      </div>
    </div>
  );
}
