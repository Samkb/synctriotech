import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // New icon
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { icon: <HomeIcon />, label: "Hero", target: "#hero" },
  { icon: <InfoIcon />, label: "About", target: "#about" },
  {
    icon: <MiscellaneousServicesIcon />,
    label: "Services",
    target: "#services",
  },
  { icon: <ContactMailIcon />, label: "Contact", target: "#contact" },
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

  // Hide last two items when nav is revealed
  const visibleNavItems = isOpen ? navItems : navItems.slice(0, 2);

  return (
    <div style={styles.wrapper}>
      {/* FAB toggle button with new icon */}
      <div style={styles.fab} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <NavigateNextIcon />} {/* New icon */}
      </div>

      {/* Navigation icons reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            style={styles.iconList}
          >
            {visibleNavItems.map((item, index) => (
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
    top: "50%",
    right: "20px",
    transform: "translateY(-50%)", // Center vertically between sections
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
    transition: "filter 0.3s", // Add transition for hover effect
  },
  // Add hover effect to make the button brighter
  fabHover: {
    filter: "brightness(1.2)", // Increase brightness on hover
  },
  iconList: {
    position: "absolute",
    right: "60px",
    top: "0",
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
