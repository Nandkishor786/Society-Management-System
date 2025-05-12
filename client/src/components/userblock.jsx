import { useEffect, useState, useCallback } from "react";
import AppBar from "./AppBar";

const PORT = import.meta.env.VITE_PORT;

const UserByBlock = () => {
  const [users, setUsers] = useState([]);
  const [block, setBlock] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = useCallback(async () => {
    if (!block) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:${PORT}/visitor/block/${block}`);
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      setError("Failed to fetch visitors. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [block]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleBlockChange = (e) => {
    setBlock(e.target.value);
  };

  return (
    <div>
      <AppBar />
      <h1 className="text-center text-3xl mt-5">Visitors Data by Block</h1>
      <div className="flex justify-center">
        <label>
          Block:
          <input
            type="text"
            value={block}
            onChange={handleBlockChange}
            className="text-center w-1/2 p-2 mt-5 border-2 border-third rounded-md"
          />
        </label>
      </div>

      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-600">{error}</div>}

      <table className="w-max border-collapse mt-4">
        <thead>
          <tr>
            <th className="p-8 border-b-2 border-third">Name</th>
            <th className="p-8 border-b-2 border-third">Contact No</th>
            <th className="p-8 border-b-2 border-third">Block</th>
            <th className="p-8 border-b-2 border-third">Room No</th>
            <th className="p-8 border-b-2 border-third">Date</th>
            <th className="p-8 border-b-2 border-third">Time</th>
            <th className="p-8 border-b-2 border-third">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && !loading && !error && (
            <tr>
              <td colSpan="7" className="text-center">No visitors found for this block.</td>
            </tr>
          )}
          {users.map((user) => (
            <tr key={user._id}>
              <td className="p-8 border-b-2 border-third">{user.name}</td>
              <td className="p-8 border-b-2 border-third">{user.contact_no}</td>
              <td className="p-8 border-b-2 border-third">{user.block}</td>
              <td className="p-8 border-b-2 border-third">{user.room_no}</td>
              <td className="p-8 border-b-2 border-third">{user.date}</td>
              <td className="p-8 border-b-2 border-third">{user.time}</td>
              <td className="p-8 border-b-2 border-third">{user.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserByBlock;
