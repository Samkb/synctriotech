// HeaderDefault.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const HeaderDefault: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fetch logo on mount
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch("/wp-json/custom/v1/site-info");
        const data = await res.json();
        setLogoUrl(data.logo);
      } catch (err) {
        console.error("Failed to fetch site logo:", err);
      }
    };

    fetchLogo();
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        style={{
          transform: showHeader ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          width: "100%",
          backgroundImage:
            "linear-gradient(135deg, rgba(17, 17, 17, 0.95) 0%, rgba(0, 51, 102, 0.9) 35%, rgba(0, 102, 255, 0.85) 70%, rgba(0, 204, 136, 0.8) 100%)",
          backdropFilter: "blur(4px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Link to="/">
          <img
            src={
              logoUrl ||
              "wp-content/themes/synctriotech/react-src/public/assets/synctrio-tech-left.svg"
            }
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
          backgroundColor: "#004d40",
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
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
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

        <div style={{ marginTop: "40px" }}>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
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

export default HeaderDefault;
