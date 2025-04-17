import React from "react";

const GoToTopButton: React.FC = () => {
  const handleClick = () => {
    const container = document.querySelector(".main-content");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "linear-gradient(135deg, #00ffff, #007d7d)",
        color: "#000",
        border: "none",
        padding: "14px 16px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(0,255,255,0.3)",
        fontSize: "1.2rem",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default GoToTopButton;
