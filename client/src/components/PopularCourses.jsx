import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Course from "./common/Course";
import axios from "axios";
import { API_URL } from "../constants/domain";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const slider2Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 638,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer mt-20">
        <h1 className="uppercase text-[22px] font-bold text-white">
          Our Popular Courses
        </h1>
        <hr className="hr-styles mb-14 mt-8" />
        <div>
          <Slider {...slider2Settings}>
            {courses.map((course) => {
              return (
                <div key={course._id} className="">
                  <Course course={course} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
