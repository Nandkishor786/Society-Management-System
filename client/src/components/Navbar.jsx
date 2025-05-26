import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        {/* Logo with glowing image and text */}
        <Link className="navbar-brand d-flex flex-column align-items-center" to="/">
          <img
            src="/logo6.png"
            alt="Secure Awas Logo"
            className="logo-glow"
            height="45"
          />
          <span className="glow-text mt-1">Secure Awas</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => handleScroll("home")}>Home</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => handleScroll("services")}>Services</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => handleScroll("pricing")}>Pricing</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => handleScroll("achievements")}>Achievements</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => handleScroll("contact")}>Contact</button>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/product1">SocietyAccount</Link></li>
                <li><Link className="dropdown-item" to="/product2">SecureAwas</Link></li>
              </ul>
            </li>

            {/* Registration Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                id="registerDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Registration
              </button>
              <ul className="dropdown-menu" aria-labelledby="registerDropdown">
                <li><Link className="dropdown-item" to="/register-owner">Register Owner</Link></li>
                <li><Link className="dropdown-item" to="/register-watchman">Register Watchman</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
