import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/domain";

export default function AdminProfile() {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(API_URL + "/admin");
        setAdmin(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAdmin();
  }, []);
  return (
    <>
      <div className="bg-white m-8">
        <h1 className="text-4xl mb-6 font-bold text-gray-800">Admin Profile</h1>
        {admin.map((el) => (
          <div key={el._id} className="flex flex-col mb-4">
            <span className="text-lg text-gray-700">
              <span className="font-bold">Username:</span> {el.username}
            </span>
            <span className="text-lg text-gray-700">
              <span className="font-bold">Name:</span> {el.name}
            </span>
            <span className="text-lg text-gray-700">
              <span className="font-bold">Email:</span> {el.email}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
