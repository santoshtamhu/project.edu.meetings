import React from "react";
import Slider from "react-slick";
import Course from "./common/Course";

let courses = [
  {
    title: "Full Digital Marketing Training in Nepal",
    rating: 4,
    price: 340,
  },
  {
    title: "Web Design and Development Full Course",
    rating: 5,
    price: 500,
  },
  {
    title: "MERN Stack Web Development",
    rating: 4,
    price: 450,
  },
  {
    title: "Python wiht Django Training in Nepal",
    rating: 4,
    price: 225,
  },
  {
    title: "Graphic Design Training in Nepal",
    rating: 4,
    price: 306,
  },
  {
    title: "Accountant Training in Nepal",
    rating: 4,
    price: 400,
  },
];

let slider2Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 4,
        arrows: true,
        /*  nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />, */
      },
    },
    {
      breakpoint: 1022,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 638,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

export default function PopularCourses() {
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
                <div key={course.title} className="">
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
