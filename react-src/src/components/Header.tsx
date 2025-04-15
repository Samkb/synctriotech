import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Show solid header after scroll
      } else {
        setIsScrolled(false); // Keep transparent on top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        width: "100%",
        backgroundColor: isScrolled ? "#000" : "transparent", // Black background after scroll
        boxShadow: isScrolled
          ? "0 4px 12px rgba(0, 0, 0, 0.3)" // More prominent shadow after scrolling
          : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition for background and shadow
      }}
    >
      {/* Logo Section */}
      <Link to="/" style={{ marginRight: "30px" }}>
        <img
          src="wp-content/themes/synctriotech/react-src/public/assets/synctrio-tech-left.svg"
          alt="Logo"
          style={{
            height: "50px",
            filter: "brightness(0) invert(1)", // White logo for dark background
          }}
        />
      </Link>

      {/* Navigation Menu */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            margin: 0,
            fontSize: "1.1rem",
            fontWeight: 600,
            padding: "0",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: isScrolled ? "#fff" : "#fff", // White text when scrolled
                textDecoration: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "all 0.3s ease, text-shadow 0.3s ease",
                display: "block",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "transparent"; // Text becomes transparent
                e.target.style.backgroundImage =
                  "linear-gradient(to left, #000, #00ffcc, #28a745)"; // Gradient text color
                e.target.style.backgroundClip = "text"; // Apply gradient to text
                e.target.style.textFillColor = "transparent"; // Make text transparent to see gradient
              }}
              onMouseLeave={(e) => {
                e.target.style.color = isScrolled ? "#fff" : "#fff"; // Revert to original color
                e.target.style.backgroundImage = "none"; // Remove gradient on hover leave
                e.target.style.textFillColor = "initial"; // Revert text color to default
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: isScrolled ? "#fff" : "#fff",
                textDecoration: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "all 0.3s ease, text-shadow 0.3s ease",
                display: "block",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "transparent";
                e.target.style.backgroundImage =
                  "linear-gradient(to left, #000, #00ffcc, #28a745)";
                e.target.style.backgroundClip = "text";
                e.target.style.textFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = isScrolled ? "#fff" : "#fff";
                e.target.style.backgroundImage = "none";
                e.target.style.textFillColor = "initial";
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: isScrolled ? "#fff" : "#fff",
                textDecoration: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                transition: "all 0.3s ease, text-shadow 0.3s ease",
                display: "block",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "transparent";
                e.target.style.backgroundImage =
                  "linear-gradient(to left, #000, #00ffcc, #28a745)";
                e.target.style.backgroundClip = "text";
                e.target.style.textFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = isScrolled ? "#fff" : "#fff";
                e.target.style.backgroundImage = "none";
                e.target.style.textFillColor = "initial";
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
