import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants/domain";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL + "/admin/login", {
        username,
        password,
      });
      const token = response.data.token;

      // Store token in local storage
      localStorage.setItem("access_token", token);

      setMessage("Login successful");
      navigate("/admin/dashboard");
    } catch (error) {
      setMessage("Invalid credentials");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">Admin Dashboard</h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full rounded-md border "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full rounded-md border"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Login
          </button>
        </form>

        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
}
