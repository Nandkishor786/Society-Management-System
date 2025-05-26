import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/Navbar.css";

const PORT = import.meta.env.VITE_PORT;

export const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:${PORT}/visitor/all`);
      console.log("Visitors data from API:", res.data);
      // Adjust according to your backend response structure
      // For example if backend returns { visitors: [...] }:
      if (res.data.visitors) {
        setUsers(res.data.visitors);
      } else if (Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        setUsers([]); // fallback
      }
    } catch (error) {
      console.error("❌ Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Stylish Navbar */}
      <div className="shadow h-[100px] w-full flex justify-between items-center bg-darknilla text-white border-b-2 border-gray-500 sticky top-0">
        <div
          className="flex flex-col justify-center  items-center
           h-[100px] w-40 ml-6 text-1xl font-bold "
        >
          <img
            src="/logo6.png"
            alt="Secure Awas Logo"
            className="logo-glow w-16 mt-1 "
          />
          <span className="glow-text  ">Secure Awas</span>
        </div>

        <div>
          <nav className="w-[600px] mx-auto  rounded-xl p-4 ">
            <ul className="flex justify-between items-center">
              <li>
                <Link
                  to="/"
                  className="text-[#00bef2] hover:bg-[#00bef2] hover:text-[#002970] px-4 py-2 rounded transition duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/secure-societies"
                  className="text-[#00bef2] hover:bg-[#00bef2] hover:text-[#002970] px-4 py-2 rounded transition duration-300 font-medium"
                >
                  MySocieties
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/event"
                  className="text-[#00bef2] hover:bg-[#00bef2] hover:text-[#002970] px-4 py-2 rounded transition duration-300 font-medium"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/create-society"
                  className="text-[#00bef2] hover:bg-[#00bef2] hover:text-[#002970] px-4 py-2 rounded transition duration-300 font-medium"
                >
                  Create Society
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="p-6 flex justify-end">
        <Button label="Refresh Visitors" onClick={fetchData} />
      </div>

      {/* Visitor Table */}
      <div className="p-6">
        <h1 className="text-3xl text-center font-semibold mb-6 text-gray-800">
          All Users Data
        </h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading visitors...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow">
              <thead className="bg-indigo-100 text-gray-700">
                <tr>
                  <th className="p-4 border-b">Name</th>
                  <th className="p-4 border-b">Contact No</th>
                  <th className="p-4 border-b">Block</th>
                  <th className="p-4 border-b">House No</th>
                  <th className="p-4 border-b">Date</th>
                  <th className="p-4 border-b">Time</th>
                  <th className="p-4 border-b">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-4 text-gray-500 font-semibold"
                    >
                      No visitors found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border p-2">{user.name}</td>
                      <td className="border p-2">{user.contact_no}</td>
                      <td className="border p-2">{user.block}</td>
                      <td className="border p-2">{user.room_no}</td>
                      <td className="border p-2">{user.date}</td>
                      <td className="border p-2">{user.time}</td>
                      <td className="border p-2">{user.purpose}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


export default AdminDashboard;
