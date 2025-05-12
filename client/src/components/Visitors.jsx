import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT;

export const Visitors = () => {
  const [name, setName] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [block, setBlock] = useState("");
  const [room_no, setRoom_no] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all visitors data (This function is not used anymore)
  const fetchVisitors = async () => {
    setLoading(true); // Set loading to true when starting the fetch
    try {
      await axios.get(`http://localhost:${PORT}/visitor/all`);
      // Removed state update for visitors as it's no longer needed
    } catch (error) {
      console.error("Error fetching visitors:", error);
    } finally {
      setLoading(false); // Set loading to false when the fetch is done
    }
  };

  // Handle visitor form submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:${PORT}/visitor/submit`,
        { name, contact_no, block, room_no, date, time, purpose }
      );
      alert(response.data.message);
      // Removed the call to fetchVisitors() as visitors data is no longer displayed
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  // useEffect to fetch data on component mount (Can be removed if not required)
  useEffect(() => {
    fetchVisitors(); // Fetch data when component mounts (removed usage)
  }, []);

  return (
    <div className="bg-secondary h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-primary w-max text-center p-2 h-max px-4">
          <Heading label={"Visitors"} />
          <SubHeading label={"Enter your credentials for the entry"} />
          <InputBox
            placeholder="Enter Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            label="Name"
          />
          <InputBox
            placeholder="Enter Contact Number"
            type="number"
            onChange={(e) => setContact_no(e.target.value)}
            label="Contact Number"
          />
          <InputBox
            placeholder="Enter Block"
            type="text"
            onChange={(e) => setBlock(e.target.value)}
            label="Block"
          />
          <InputBox
            placeholder="Enter House Number"
            type="number"
            onChange={(e) => setRoom_no(e.target.value)}
            label="House Number"
          />
          <InputBox
            placeholder="Enter Date dd-mm-yyyy"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            label="Date"
          />
          <InputBox
            placeholder="Enter Time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            label="Time"
          />
          <InputBox
            placeholder="Enter Purpose"
            type="text"
            onChange={(e) => setPurpose(e.target.value)}
            label="Purpose"
          />
          <div className="pt-4">
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </div>

        {/* Show loading message when fetching data */}
        {loading && <p>Loading visitors...</p>}
      </div>
    </div>
  );
};
