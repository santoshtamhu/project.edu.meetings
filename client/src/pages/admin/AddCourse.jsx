import React, { useState } from "react";
import { API_URL } from "../../constants/domain";
import axios from "axios";

let initialValue = {
  title: "",
  price: "",
  description: "",
  image: "",
  rating: "",
};
export default function AddCourse() {
  const [data, setData] = useState(initialValue);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("rating", data.rating);

    try {
      const res = await axios.post(API_URL + "/courses", formData);

      console.log(res.data);
      e.target.reset(); // Reset the form fields
      setMessage("course added successfully");
    } catch (error) {
      console.log(error);
      setMessage("course failed to add");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setData({
      ...data,
      [name]: type === "file" ? files[0] : value,
    });
  };
  return (
    <div className="m-8">
      <h1 className="text-5xl mb-5 font-semibold">Add New Course</h1>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg text-gray-700 font-bold">
              Title
            </label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              id="title"
              placeholder="Enter meeting title"
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-lg text-gray-700 font-bold"
            >
              Description
            </label>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              placeholder="Enter meeting description"
              rows="4"
              className="border p-2 rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-lg text-gray-700 font-bold">
              Price
            </label>
            <input
              onChange={handleChange}
              name="price"
              type="number"
              id="price"
              placeholder="Enter meeting price"
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-lg text-gray-700 font-bold">
              Image
            </label>
            <input
              onChange={handleChange}
              name="image"
              type="file"
              id="image"
              className="border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="day" className="text-lg text-gray-700 font-bold">
              Rating
            </label>
            <input
              onChange={handleChange}
              name="rating"
              type="number"
              id="rating"
              placeholder="add rating from 1 to 5"
              className="border p-2 rounded-md"
            />
          </div>

          <button type="submit" className="mr-4 btn w-52">
            Add Meeting
          </button>
          {message && <span className="mt-4 text-red-500">{message}</span>}
        </form>
      </div>
      <div></div>
    </div>
  );
}
