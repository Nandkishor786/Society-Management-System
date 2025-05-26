import { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import axios from "axios";
import AppBar from "./AppBar";

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

  // New states for messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // You don't seem to use fetched visitors here for anything, so I removed fetchVisitors.

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:${PORT}/visitor/submit`,
        { name, contact_no, block, room_no, date, time, purpose }
      );
      setMessage(response.data.message);  // Show success message inline
      setError(""); // Clear any previous error
      
      // Clear form fields after successful submission
      setName("");
      setContact_no("");
      setBlock("");
      setRoom_no("");
      setDate("");
      setTime("");
      setPurpose("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting the form. Please try again."); // Show error message inline
      setMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="overflow-x-hidden">
      <AppBar />
      <div className="myimage flex justify-center items-start w-screen h-screen">
        <div className="rounded-lg bg-black bg-opacity-60 text-center text-neutral-200 font-serif h-[500px] w-[800px] mt-16">
          <Heading label={"Visitors"} />
          <SubHeading label={"Enter your credentials for the entry"} />
          <div className="flex justify-center gap-20 items-start mt-6">
            <div className="w-80">
              <InputBox
                placeholder="Enter Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
              />
              <InputBox
                placeholder="Enter Contact Number"
                type="number"
                value={contact_no}
                onChange={(e) => setContact_no(e.target.value)}
                label="Contact Number"
              />
              <InputBox
                placeholder="Enter Block"
                type="text"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
                label="Block"
              />
              <InputBox
                placeholder="Enter House Number"
                type="number"
                value={room_no}
                onChange={(e) => setRoom_no(e.target.value)}
                label="House Number"
              />
            </div>
            <div className="w-80">
              <InputBox
                placeholder="Enter Date dd-mm-yyyy"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                label="Date"
              />
              <InputBox
                placeholder="Enter Time "
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                label="Time"
              />
              <InputBox
                placeholder="Enter Purpose"
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                label="Purpose"
              />
              <div className="pt-6">
                <Button label="Submit" onClick={handleSubmit} />
                {message && (
                  <div className="text-green-400 font-semibold mt-4">{message}</div>
                )}
                {error && (
                  <div className="text-red-400 font-semibold mt-4">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {loading && <p>Loading visitors...</p>}
      </div>
    </div>
  );
};
