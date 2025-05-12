import axios from "axios";
import { useEffect, useState } from "react";
import apartmentPng from "../assets/apartment.png";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const PORT = import.meta.env.VITE_PORT;

export const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/visitor/all`);
        setUsers(res.data.visitors);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Stylish Navbar */}
      <div className="shadow-lg h-20 flex justify-between items-center px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-b-4 border-indigo-800">
        <div className="flex items-center text-2xl font-bold space-x-3">
          <img src={apartmentPng} alt="apartment" className="w-10 h-10" />
          <span className="tracking-wide">Secure Awas</span>
        </div>

        <div className="flex space-x-4">
          <Button label={"Events"} onClick={() => navigate("/admin/event")} />
          <Button label={"Create Society"} onClick={() => navigate("/admin/create-society")} />
        </div>
      </div>

      {/* Visitor Table */}
      <div className="p-6">
        <h1 className="text-3xl text-center font-semibold mb-6 text-gray-800">All Users Data</h1>
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
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="text-center hover:bg-gray-100">
                    <td className="p-4 border-b">{user.name}</td>
                    <td className="p-4 border-b">{user.contact_no}</td>
                    <td className="p-4 border-b">{user.block}</td>
                    <td className="p-4 border-b">{user.room_no}</td>
                    <td className="p-4 border-b">{user.date}</td>
                    <td className="p-4 border-b">{user.time}</td>
                    <td className="p-4 border-b">{user.purpose}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
