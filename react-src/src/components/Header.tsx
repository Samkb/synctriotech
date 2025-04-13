import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        background:
          "linear-gradient(135deg,rgb(44, 37, 116),rgb(54, 111, 125))", // Gradient background for branding
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo Section */}
      <Link to="/" style={{ marginRight: "30px" }}>
        <img
          src="wp-content/themes/synctriotech/react-src/public/assets/synctrio-tech-left.svg"
          alt="Logo"
          style={{
            height: "50px", // Slightly larger logo for more visibility
            filter: "brightness(0) invert(1)", // White logo if your background is dark
          }}
        />
      </Link>

      {/* Navigation Menu */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px", // Bigger spacing for a cleaner look
            margin: 0,
            fontSize: "1.1rem", // Slightly bigger font for better readability
            fontWeight: 600, // Bold font for more emphasis
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "#fff", // White text
                textDecoration: "none", // Remove underline
                transition: "all 0.3s ease", // Smooth transition
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00ffcc"; // Highlight on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff"; // Revert to original on mouse leave
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00ffcc";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00ffcc";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#fff";
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
