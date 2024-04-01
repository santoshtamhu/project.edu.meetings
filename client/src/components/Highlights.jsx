import React from "react";
import Slider from "react-slick";

export default function Highlights() {
  const highlights = [
    {
      title: "Best Education",
      image: "/highlightImages/h1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus, eos a consequuntur vel rem ",
    },
    {
      title: "Best Students",
      image: "/highlightImages/h2.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus, eos a consequuntur vel rem ",
    },
    {
      title: "Best Teachers",
      image: "/highlightImages/h3.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus, eos a consequuntur vel rem ",
    },
    {
      title: "Best Networking",
      image: "/highlightImages/h1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus, eos a consequuntur vel rem ",
    },
    {
      title: "Online Meetings",
      image: "/highlightImages/h1.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus, eos a consequuntur vel rem ",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {highlights.map((item) => {
          return (
            <div>
              <div className="container bg-customRed p-10 flex flex-col gap-4 text-center items-center text-white h-full rounded-3xl">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className="text-[18px] font-semibold">{item.title}</div>
                <div className="text-[13px]">{item.description}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
