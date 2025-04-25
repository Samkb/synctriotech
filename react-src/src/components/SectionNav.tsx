import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from "@mui/icons-material/Layers"; // Core Pillars
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import VerifiedIcon from "@mui/icons-material/Verified"; // Why Choose Us
import WorkIcon from "@mui/icons-material/Work"; // Portfolio
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Navigation icon
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Top Arrow icon
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { icon: <HomeIcon />, label: "Hero", target: "#hero" },
  { icon: <LayersIcon />, label: "Core Pillars", target: "#core-pillars" },
  { icon: <InfoIcon />, label: "About", target: "#about" },
  {
    icon: <MiscellaneousServicesIcon />,
    label: "Services",
    target: "#services",
  },
  { icon: <VerifiedIcon />, label: "Why Choose Us", target: "#why-choose-us" },
  { icon: <WorkIcon />, label: "Portfolio", target: "#portfolio" },
];

const FloatingNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.fab} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <ArrowUpwardIcon />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            style={styles.iconList}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={styles.iconItem}
                title={item.label}
              >
                <button
                  onClick={() => scrollTo(item.target)}
                  style={styles.iconButton}
                >
                  {item.icon}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: "fixed",
    bottom: "20px", // Positioned at the bottom-right of the page
    right: "20px",
    zIndex: 5000,
  },
  fab: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(to right, #000, #0047AB, #00FF88)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    fontSize: "1.4rem",
    transition: "filter 0.3s",
  },
  iconList: {
    position: "absolute",
    right: "0px", // Aligned right next to the floating button
    bottom: "70px", // Positioned slightly above the floating button
    background: "#1a1a1a",
    padding: "12px",
    borderRadius: "12px",
    listStyle: "none",
    boxShadow: "0 0 20px rgba(0,255,200,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  iconItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    background: "none",
    border: "none",
    color: "#00ffcc",
    fontSize: "1.4rem",
    cursor: "pointer",
    transition: "color 0.3s",
  },
};

export default FloatingNav;
