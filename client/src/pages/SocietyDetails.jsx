import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "../components/AppBar";
import { motion } from "framer-motion";

const PORT = import.meta.env.VITE_PORT;

const SocietyDetails = () => {
  const { id } = useParams();
  const [society, setSociety] = useState(null);

  useEffect(() => {
    const fetchSociety = async () => {
      try {
        const res = await axios.get(`http://localhost:${PORT}/admin/society/${id}`);
        setSociety(res.data.society);
      } catch (error) {
        console.error("Failed to fetch society:", error);
      }
    };

    fetchSociety();
  }, [id]);

  if (!society)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mt-10 rounded-xl overflow-hidden shadow-xl"
      >
        {/* Hero Poster Section */}
        <div className="relative h-80">
          <img
            src={`http://localhost:${PORT}${society.poster}`}
            alt="Society Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              {society.societyName}
            </h1>
          </div>
        </div>

        {/* Detail Section */}
        <div className="bg-white p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Society Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
            <Info label="Owner" value={society.ownerName} />
            <Info label="Email" value={society.email} />
            <Info label="Contact" value={society.contact} />
            <Info label="Address" value={society.address} />
            <Info label="City" value={society.city} />
            <Info label="Pincode" value={society.pincode} />
            <Info label="Blocks" value={society.numBlocks} />
            <Info label="Security Head" value={society.securityHead} />
            <Info label="Registration Number" value={society.registrationNumber} />
          </div>

          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Add Member feature coming soon!")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Add Member
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import PropTypes from "prop-types";

const Info = ({ label, value }) => (
  <p>
    <span className="font-medium text-gray-900">{label}:</span> {value}
  </p>
);

Info.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};


export default SocietyDetails;
