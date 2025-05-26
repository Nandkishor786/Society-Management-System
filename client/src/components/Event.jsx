import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import axios from "axios";

const PORT = import.meta.env.VITE_PORT || 5000;

export const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/admin/events`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-3xl mt-4 ">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {events.map((event) => (
          <div key={event._id} className="border rounded shadow p-4">
            <img
              src={`http://localhost:${PORT}/posters/${event.poster}`}
              alt={event.title}
              className="w-full h-60 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{event.title}</h2>
            <p className="text-sm text-gray-600">Date: {event.date}</p>
            <p className="text-sm text-gray-600">Time: {event.time}</p>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
