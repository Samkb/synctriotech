import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const GoToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="go-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon fontSize="medium" />
        </button>
      )}

      <style>
        {`
          .go-to-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #00ffff, #00bcd4);
            color: #000;
            border: none;
            border-radius: 50%;
            padding: 12px;
            cursor: pointer;
            z-index: 3000;
            box-shadow: 0 4px 10px rgba(0, 255, 255, 0.2);
            transition: all 0.3s ease-in-out;
          }

          .go-to-top-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 15px rgba(0, 255, 255, 0.4);
          }
        `}
      </style>
    </div>
  );
};

export default GoToTopButton;
