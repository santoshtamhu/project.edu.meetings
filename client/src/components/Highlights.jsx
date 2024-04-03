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
  /*  const CustomPrevArrow = (props) => (
    <div {...props}>
      <button className="to-black bg-white w-10 h-10">
        <span className="text-black text-2xl">&lt;</span>
      </button>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props}>
      <button className=" bg-white w-10 h-10">
        <span className="text-black text-2xl">&gt;</span>
      </button>
    </div>
  ); */

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          arrows: true,
          /*  nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />, */
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className=" w-[352px] sm:w-[572px] md:w-[728px] lg:w-[968px] xl:w-[1148px] 2xl:w-[1328px] mt-12">
      <Slider {...settings}>
        {highlights.map((item) => {
          return (
            <div key={item.title}>
              <div className=" bg-customRed p-10 flex mx-4 flex-col gap-4 text-center items-center text-white h-full rounded-3xl">
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
