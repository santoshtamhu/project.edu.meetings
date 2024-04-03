import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function QuickInfo() {
  const [isExpanded, setIsExpanded] = useState({});
  let infos = [
    {
      title: "About EDU Meeting",
      description:
        "If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.",
    },
    {
      title: "Why Choose EDU Meeting",
      description:
        "If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.",
    },
    {
      title: "Share with your colleagues",
      description:
        "If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.",
    },
    {
      title: "Please tell your friends",
      description:
        "If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.",
    },
  ];
  console.log(isExpanded);
  const toggleInfo = (index) => {
    setIsExpanded({
      ...isExpanded,
      [index]: !isExpanded[index],
    });
  };

  // made responsive till lg, make responsive from xl

  return (
    <>
      <div className="bg-white container sm:smContainer lg:ml-7 md:mdContainer flex flex-col gap-6 p-10 rounded-3xl mt-8 lg:mt-0">
        {infos.map((info, index) => {
          return (
            <div key={index}>
              <div
                className={` ${
                  isExpanded[index] ? "text-yellow-600" : " "
                } flex justify-between`}
              >
                <h1 className="text-xl font-bold mr-4">{info.title}</h1>
                <button onClick={() => toggleInfo(index)}>
                  {isExpanded[index] ? <FaChevronDown /> : <FaChevronRight />}
                </button>
              </div>
              <p
                className={`${
                  isExpanded[index] ? "block" : "hidden"
                } text-[14px] leading-6 lg:w-64 mt-3`}
              >
                {info.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
