import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../constants/domain";

export default function MeetingDetails() {
  const [meeting, setMeeting] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const res = await axios.get(`${API_URL}/meetings/` + slug);
        setMeeting(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMeeting();
  }, []);

  let month = meeting.month;

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

  const shortMonth = month ? month.slice(0, 3) : "";

  const imagePath = meeting.image?.path;
  const imageUrl = API_URL + imagePath;
  const noImageUrl = "/assets/images/no-image/noimage.jpg";

  return (
    <div>
      {/* HEADER */}
      <div className="bg-[url('/assets/images/bg-images/heading-bg.jpg')] bg-cover bg-center text-white uppercase pt-56 pb-32 text-center">
        <p className="font-semibold mb-4 text-[15px]">GET ALL DETAILS</p>
        <h1 className="text-4xl font-bold">{meeting.title}</h1>
      </div>
      {/* BODY */}
      <div className="mt-32 container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer rounded-3xl overflow-hidden">
        <div
          className="p-5 sm:h-[185px] md:h-64 lg:h-80 xl:h-[400px] 2xl:h-[466px] bg-center bg-cover"
          style={{
            backgroundImage: `url(${imagePath ? imageUrl : noImageUrl})`,
          }}
        >
          <div className="flex justify-between">
            <span className="font-semibold bg-white rounded-xl bg-opacity-90 px-3 py-2 h-full">
              ${meeting.price}.00
            </span>
            <div className="font-semibold bg-white bg-opacity-90 rounded-xl px-6 py-3 flex flex-col items-center">
              <span className="text-customRed text-[13px]">{shortMonth}</span>
              <span className="text-2xl">{meeting.day}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 text-[13px] ">
          <h1 className="text-[22px] font-semibold">{meeting.title}</h1>
          <hr className="hr-style mb-7 mt-7" />
          <p className="leading-6">
            This is an edu meeting HTML CSS template provided by TemplateMo
            website. This is a Bootstrap v5.1.3 layout. If you need more free
            website templates like this one, please visit our website
            TemplateMo. Please tell your friends about our website. Thank you.
            If you want to get the latest collection of HTML CSS templates for
            your websites, you may visit Too CSS website. If you need a working
            contact form script, please visit our contact page for more info.
            <br /> <br />
            You are allowed to use this edu meeting CSS template for your school
            or university or business. You can feel free to modify or edit this
            layout. You are not allowed to redistribute the template ZIP file on
            any other template website. Please contact us for more information.
          </p>
          <hr className="hr-style mb-7 mt-7" />
          <div className="flex flex-col gap-3 lg:flex-row lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h1 className="text-lg mb-1 font-semibold">Location</h1>
              <p>
                Recreio dos Bandeirantes, <br /> Rio de Janeiro - RJ, 22795-008,
                Brazil
              </p>
            </div>
            <div>
              <h1 className="text-lg mb-1 font-semibold">Hours</h1>
              <p>7:00 AM - 9:00 AM</p>
              <p>10:00 AM - 12:00 PM</p>
            </div>
            <div>
              <h1 className="text-lg mb-1 font-semibold">Book Now</h1>
              <p>090-080-0760</p>
              <p>010-480-7069</p>
            </div>
          </div>
          <hr className="hr-style mb-7 mt-7" />
          <div>
            <span>
              <span className="text-xl font-semibold pr-2">Share:</span>
              Facebook, Twitter, Instagram, Behance
            </span>
          </div>
        </div>
      </div>
      <Link to={"/meetings"}>
        <div className="flex justify-center">
          <button className="btn mt-7 w-64">Back to Meetings List</button>
        </div>
      </Link>
    </div>
  );
}
