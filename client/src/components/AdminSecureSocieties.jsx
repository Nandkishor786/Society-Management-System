import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";

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

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
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
            {societies.map((society) => (
              <div
                key={society._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Log the image URL to the console */}
                {console.log(
                  `http://localhost:${PORT}/uploads/${society.poster}`
                )}

                <img
                  src={`http://localhost:${PORT}${society.poster}`} // Use society.poster directly as it's already prefixed with /uploads
                  alt="Society Poster"
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 text-left space-y-2">
                  <h2 className="text-xl font-semibold text-primary">
                    {society.societyName}
                  </h2>
                  <p>
                    <span className="font-medium">Owner:</span>{" "}
                    {society.ownerName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {society.email}
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
  );
};

export default AdminSecureSocieties;
