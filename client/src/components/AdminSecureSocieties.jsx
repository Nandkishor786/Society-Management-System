import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

const AdminSecureSocieties = () => {
  const [societies, setSocieties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const res = await axios.get(
          `http://localhost:${PORT}/admin/secure-societies`
        );
        setSocieties(res.data.societies);
      } catch (error) {
        console.error("Error fetching societies:", error);
      }
    };

    fetchSocieties();
  }, []);

  const handleCreateSociety = () => {
    navigate("/admin/create-society");
  };

  const handleExplore = (id) => {
    navigate(`/admin/society/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Heading label={"Secure Societies"} />
            <SubHeading label={"All societies added to the system"} />
            <div className="mt-4 mb-6">
              <Button
                label={"Create New Society"}
                onClick={handleCreateSociety}
              />
            </div>
          </div>

          {societies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {societies.map((society, index) => (
                <div key={society._id} className="animated-border">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inner-card relative rounded-xl shadow-md overflow-hidden group transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.img
                      src={`http://localhost:${PORT}${society.poster}`}
                      alt="Society Poster"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-colors ease-in-out"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    />

                    <div className="p-4 text-left space-y-2">
                      <h2 className="text-xl font-bold text-red-500 font-serif">
                        {society.societyName}
                      </h2>
                      <p>
                        <span className="font-medium">Owner:</span>{" "}
                        {society.ownerName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        {society.email}
                      </p>
                      <p>
                        <span className="font-medium">Contact:</span>{" "}
                        {society.contact}
                      </p>
                      <p>
                        <span className="font-medium">Address:</span>{" "}
                        {society.address}
                      </p>
                      <p>
                        <span className="font-medium">City:</span> {society.city}
                      </p>
                      <p>
                        <span className="font-medium">Pincode:</span>{" "}
                        {society.pincode}
                      </p>
                      <p>
                        <span className="font-medium">Blocks:</span>{" "}
                        {society.numBlocks}
                      </p>
                      <p>
                        <span className="font-medium">Security Head:</span>{" "}
                        {society.securityHead}
                      </p>
                      <p>
                        <span className="font-medium">Reg. Number:</span>{" "}
                        {society.registrationNumber}
                      </p>
                    </div>

                    {/* Hover overlay with button */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-40
                         flex items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <button
                        onClick={() => handleExplore(society._id)}
                        className="bg-darknilla text-white font-semibold px-4 py-2 mt-20 rounded shadow border-2 hover:bg-black hover:bg-opacity-30 hover:border-nilla hover:text-neutral-200"
                      >
                        Explore More
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-6">
              No societies found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSecureSocieties;
