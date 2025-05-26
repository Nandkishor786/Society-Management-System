import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PORT = import.meta.env.VITE_PORT;

export const AdminEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [poster, setPoster] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!title || !description || !date || !time || !poster) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("poster", poster);

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/admin/event`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      localStorage.setItem("token", response.data.token); // optional

      setSuccess("Event submitted successfully!");
      // Navigate after 2 seconds
      setTimeout(() => {
        navigate("/event");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="shadow h-[100px] w-full flex justify-between bg-secondary text-white border-b-2 border-gray-500 sticky top-0">
        <div className="flex flex-col justify-center items-center h-[100px] w-40 ml-6 text-1xl font-bold ">
          <img
            src="/logo6.png"
            alt="Secure Awas Logo"
            className="logo-glow w-16 mt-1"
          />
          <span className="glow-text">Secure Awas</span>
        </div>
        <div className="w-[200px] flex justify-center items-center">
          <Button label={"MyEvents"} onClick={() => navigate("/event")} />
        </div>
      </div>

      {/* Event Form */}
      <div className="myimage h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[600px] h-[600px]">
          <div className="rounded-lg bg-black bg-opacity-60 w-[500px] h-full text-center text-neutral-200 font-serif p-2 flex flex-col items-center">
            <Heading label={"Event"} />
            <SubHeading label={"Enter details of the event"} />
            <div className="w-96">
              <InputBox
                placeholder="Enter Event Title"
                onChange={(e) => setTitle(e.target.value)}
                label={"Title"}
                type={"text"}
              />
              <InputBox
                placeholder="Enter Event Description"
                onChange={(e) => setDescription(e.target.value)}
                label={"Description"}
                type={"text"}
              />
              <InputBox
                placeholder="Enter Event Date"
                onChange={(e) => setDate(e.target.value)}
                label={"Date"}
                type={"text"}
              />
              <InputBox
                placeholder="Enter Event Time"
                onChange={(e) => setTime(e.target.value)}
                label={"Time"}
                type={"text"}
              />
              <InputBox
                placeholder="Upload Event Poster"
                onChange={(e) => setPoster(e.target.files[0])}
                label={"Poster"}
                type={"file"}
              />

              <div className="pt-4">
                <Button label={"Submit"} onClick={handleSubmit} />
                {error && (
                  <div className="text-red-500 mt-2 font-semibold text-center">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="text-green-500 mt-2 font-semibold text-center">
                    {success}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
