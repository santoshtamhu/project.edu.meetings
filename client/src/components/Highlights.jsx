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

  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          fontSize: "24px",
          background: "white",
          color: "black",
        }}
        onClick={onClick}
      >
        &gt; {/* Unicode for right arrow */}
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          fontSize: "24px",
          background: "white",
          color: "black",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        &lt; {/* Unicode for left arrow */}
      </div>
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          arrows: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[352px] sm:w-[572px] md:w-[728px] lg:w-[968px] xl:w-[1148px] 2xl:w-[1328px] mt-12">
      <Slider {...settings}>
        {highlights.map((item, index) => {
          return (
            <div key={index}>
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
