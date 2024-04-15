import axios from "axios";
import React, { useEffect, useState } from "react";
import Meeting from "../components/common/Meeting";

export default function Meetings() {
  const [meetings, setMeetings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [metadata, setMetadata] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);
  let itemsPerPage = 9;

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/meetings?page=${currentPage}&per_page=${itemsPerPage}`
        );
        setMeetings(res.data.meetings);
        setMetadata(res.data.metadata);
        setHasNextPage(res.data.metadata?.nextPage);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeetings();
  }, [currentPage, itemsPerPage]);

  // Total Required Pages
  const totalRequiredPages = metadata.totalPages;

  let pageNumbers = [];

  for (let i = 1; i <= totalRequiredPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="bg-[url('assets/images/bg-images/heading-bg.jpg')] bg-cover bg-center text-white uppercase pt-56 pb-32 text-center">
        <p className="font-semibold mb-4 text-[15px]">
          here are our upcoming meetings
        </p>
        <h1 className="text-4xl font-bold">upcoming meetings</h1>
      </div>

      {/* FILTERS */}

      <div className="mt-28">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="btn w-auto ">All Meetings</button>
          <button className="btn w-auto">Soon</button>
          <button className="btn w-auto">Important</button>
          <button className="btn w-auto">Attractive</button>
        </div>

        {/* MEETINGS */}

        <div className="mt-16 container md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer md:columns-2 md:gap-6 lg:columns-3">
          {meetings.map((meeting, index) => {
            return (
              <div key={index} className="mb-6">
                <Meeting meeting={meeting} />
              </div>
            );
          })}
        </div>

        {/* PAGINATION */}

        <div className="flex gap-1 justify-center mt-8">
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
