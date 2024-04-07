import React from "react";

export const ContactInfo = () => {
  return (
    <div className="mt-8 lg:mt-0">
      <div className="flex flex-col gap-8 text-[15px] font-semibold bg-customRed rounded-3xl text-white p-10">
        <div>
          <h2>Phone Number</h2>
          <span className="contactInfoSecondaryFont">010-020-0340</span>
        </div>
        <hr className="border-white border-opacity-20" />
        <div>
          <h2>Email Address</h2>
          <span className="contactInfoSecondaryFont">info@meetings.edu</span>
        </div>
        <hr className="border-white border-opacity-20" />

        <div>
          <h2>Street Address</h2>
          <span className="contactInfoSecondaryFont">
            Rio de Janeiro - RJ, 22795-008, Brazil
          </span>
        </div>
        <hr className="border-white border-opacity-20" />

        <div>
          <h2>Website URL</h2>
          <span className="contactInfoSecondaryFont">www.meetings.edu</span>
        </div>
      </div>
    </div>
  );
};
