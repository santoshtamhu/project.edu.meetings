import axios from "axios";
import React, { useEffect, useState } from "react";
import Meeting from "../components/common/Meeting";
import { API_URL } from "../constants/domain";

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [metadata, setMetadata] = useState({});
  const [filter, setFilter] = useState("all");
  let itemsPerPage = 9;

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await axios.get(
          API_URL +
            `/meetings?page=${currentPage}&per_page=${itemsPerPage}&filter=${filter}`
        );
        setMeetings(res.data.meetings);
        setMetadata(res.data.metadata);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeetings();
  }, [currentPage, itemsPerPage, filter]);

  const hasNextPage = metadata?.nextPage;

  // Total Required Pages
  const totalRequiredPages = metadata.totalPages;

  let pageNumbers = [];

  for (let i = 1; i <= totalRequiredPages; i++) {
    pageNumbers.push(i);
  }

  const filters = [
    { name: "all meetings", value: "all" },
    { name: "soon", value: "soon" },
    { name: "important", value: "important" },
    { name: "attractive", value: "attractive" },
  ];

  return (
    <div>
      <div className="bg-[url('/assets/images/bg-images/heading-bg.jpg')] bg-cover bg-center text-white uppercase pt-56 pb-32 text-center">
        <p className="font-semibold mb-4 text-[15px]">
          here are our upcoming meetings
        </p>
        <h1 className="text-4xl font-bold">upcoming meetings</h1>
      </div>

      {/* FILTERS CONTAINER */}

      <div className="mt-28">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((el, index) => {
            return (
              <>
                <button
                  key={index}
                  className={`btn w-auto font-semibold hover:text-white hover:bg-customRed transition duration-300 ease-in-out ${
                    filter !== el.value ? "bg-white text-customRed" : ""
                  }`}
                  onClick={() => setFilter(el.value)}
                >
                  {el.name}
                </button>
              </>
            );
          })}
        </div>

        {/* MEETINGS CONTAINER*/}

        <div className="mt-16 container sm:smContainer md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {meetings.map((meeting) => {
            return (
              <div key={meeting._id} className="mb-7 md:mb-0">
                <Meeting meeting={meeting} />
              </div>
            );
          })}
        </div>

        {/* PAGINATION CONTAINER*/}

        <div className="flex gap-1 justify-center mt-12">
          {/* Previous Page Button */}
          <button
            className={`pagination ${
              currentPage === 1 ? "hidden" : "" // hide the button if currentPage is the first page
            }`}
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
          >
            &lt; {/* prev arrow */}
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((pageNumber) => {
            return (
              <button
                className={`pagination font-medium ${
                  currentPage == pageNumber && "bg-customRed  text-white"
                }`}
                key={pageNumber}
                onClick={() => {
                  setCurrentPage(pageNumber);
                }}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Page Button */}
          <button
            className={`pagination ${
              hasNextPage ? "" : "hidden" // hide the button if there's no next page
            }`}
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
          >
            &gt; {/* next arrow */}
          </button>
        </div>
      </div>
    </div>
  );
}
