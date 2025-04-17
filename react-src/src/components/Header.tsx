import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          width: "100%",
          backgroundColor: isScrolled ? "#000" : "transparent",
          boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Link to="/">
          <img
            src="wp-content/themes/synctriotech/react-src/public/assets/synctrio-tech-left.svg"
            alt="SyncTrio Tech"
            style={{
              height: "50px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            zIndex: 30,
          }}
        >
          <MenuIcon style={{ fontSize: 32 }} />
        </button>
      </header>

      {/* Slide Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-100%",
          height: "100%",
          width: "280px",
          backgroundColor: "#000",
          color: "#fff",
          padding: "30px 20px",
          transition: "right 0.3s ease-in-out",
          zIndex: 25,
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <CloseIcon style={{ fontSize: 28 }} />
          </button>
        </div>

        <nav>
          {["Home", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                marginBottom: "20px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                textTransform: "uppercase",
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Footer Section in Menu */}
        <div style={{ marginTop: "40px" }}>
          {/* CTA */}

          <Link
            className="hero-button"
            to="/contact"
            onClick={toggleMenu}
            style={{
              display: "block",
              textAlign: "center",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              marginBottom: "30px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Let's Talk
          </Link>
          {/* Socials */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:hello@synctriotech.com" style={{ color: "#fff" }}>
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
