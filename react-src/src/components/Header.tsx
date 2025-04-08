import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
    >
      <Link to="/">
        <img
          src="wp-content/themes/synctriotech/react-src/public/assets/synctrio-tech-left.svg" // Now this path works because it points to public/assets
          alt="Logo"
          style={{ height: "40px", marginRight: "20px" }}
        />
      </Link>
      <nav>
        <ul
          style={{ display: "flex", listStyle: "none", gap: "15px", margin: 0 }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
