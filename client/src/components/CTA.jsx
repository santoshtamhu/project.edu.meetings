import React from "react";

export default function CTA() {
  return (
    <div>
      <div className="text-white container md:mdContainer lg:w-[456px]">
        <div className=" bg-white bg-opacity-15 mb-7 p-10 flex flex-col gap-5">
          <h1 className="text-[24px] font-bold">APPLY FOR BACHELOR DEGREE</h1>
          <p className="text-[14px] leading-6">
            You are allowed to use this edu meeting CSS template for your school
            or university or business. You can feel free to modify or edit this
            layout.
          </p>
          <button className="btn uppercase">Join Us Now!</button>
        </div>
        <div className=" bg-white bg-opacity-15 p-10 flex flex-col gap-5">
          <h1 className="text-[24px] font-bold">APPLY FOR BACHELOR DEGREE</h1>
          <p className="text-[14px] leading-6">
            You are allowed to use this edu meeting CSS template for your school
            or university or business. You can feel free to modify or edit this
            layout.
          </p>
          <button className="btn uppercase bg-yellow-600 text-white">
            Join Us Now!
          </button>
        </div>
      </div>
    </div>
  );
}
