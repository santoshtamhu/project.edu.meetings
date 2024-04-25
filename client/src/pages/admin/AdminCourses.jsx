import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/domain";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(API_URL + "/courses");
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourses();
  }, [message]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/courses/${id}`);

      if (res.status === 200) {
        setMessage("course deleted successfully");
      }
    } catch (error) {
      setMessage(error.response.data.message || "Failed to delete course!");
    }
  };

  // Message will disappear after 3 seconds (3000 milliseconds)
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  return (
    <div className="m-8">
      <div className="text-3xl font-semibold mb-8">All Courses</div>
      <div className="flex flex-col gap-4">
        {courses.map((course) => {
          return (
            <div key={course._id} className="grid grid-cols-3 text-xl">
              <span>{course.title}</span>
              <span className="ml-28">Price: Rs.{course.price}</span>
              <button onClick={() => handleDelete(course._id)} className="btn">
                delete
              </button>
            </div>
          );
        })}
        {message ? (
          <div className="absolute top-10 right-20 text-red-400 text-lg">
            {message}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
