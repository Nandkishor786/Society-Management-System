import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSignIn from "./components/AdminSignIn";
import AdminSignUp from "./components/AdminSignUp";
import AdminDashboard from "./components/AdminDashboard"; // Correct import without curly braces
import HomePage from "./components/HomePage";
import { Visitors } from "./components/Visitors";
import UserByDate from "./components/userdate";
import UserByRoom from "./components/userroom";
import UserByBlock from "./components/userblock";
import UserByTime from "./components/usertime";
import AdminEvent from "./components/AdminEvent";
import Event from "./components/Event";
import CreateSociety from "./components/CreateSociety"; // Add the new component import
import AdminSecureSocieties from "./components/AdminSecureSocieties"; // Import SecureSocieties

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<Event />} />

        {/* Admin Auth */}
        <Route path="/admin/signin" element={<AdminSignIn />} />
        <Route path="/admin/signup" element={<AdminSignUp />} />

        {/* Admin Dashboard and Filters */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/date" element={<UserByDate />} />
        <Route path="/admin/time" element={<UserByTime />} />
        <Route path="/admin/block" element={<UserByBlock />} />
        <Route path="/admin/room" element={<UserByRoom />} />
        <Route path="/admin/event" element={<AdminEvent />} />

        {/* Create Society Page */}
        <Route path="/admin/create-society" element={<CreateSociety />} />

        {/* Secure Societies Page */}
        <Route path="/admin/secure-societies" element={<AdminSecureSocieties />} /> {/* Add this route */}

        {/* Visitor */}
        <Route path="/visitor" element={<Visitors />} />

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
