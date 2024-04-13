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
        setHasNextPage(res.data?.next);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeetings();
  }, [currentPage, itemsPerPage]);

  // Total Meetings
  const totalMeetings = metadata.total;

  // Total Required Pages according to items per page for all the Meetings
  const totalPages = Math.floor(totalMeetings / itemsPerPage) + 1;

  return (
    <div>
      <div className="bg-[url('assets/images/bg-images/heading-bg.jpg')] bg-cover bg-center text-white uppercase pt-44 pb-32 text-center">
        <p className="font-semibold mb-4 text-[15px]">
          here are our upcoming meetings
        </p>
        <h1 className="text-4xl font-bold">upcoming meetings</h1>
      </div>
      <div className="mt-28">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="btn w-auto ">All Meetings</button>
          <button className="btn w-auto">Soon</button>
          <button className="btn w-auto">Important</button>
          <button className="btn w-auto">Attractive</button>
        </div>
        <div className="mt-16 container md:mdContainer lg:lgContainer xl:xlContainer 2xl:xxlContainer md:columns-2 md:gap-8 lg:columns-3">
          {meetings.map((meeting) => {
            return (
              <div className="mb-8">
                <Meeting meeting={meeting} />
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 justify-center mt-20">
          <button
            className="bg-white px-4 py-2 rounded-md"
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
            }}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          <button
            className="bg-white px-4 py-2 rounded-md"
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
            }}
            disabled={!hasNextPage}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
