import React from "react";
import { motion } from "framer-motion";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section
      className="py-5 footer"
      style={{
        background: "linear-gradient(to right, #111, #1e1e1e)",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-5 fw-bold mb-3 d-flex align-items-center gap-2">
              <MessageIcon className="text-info" />
              Get in Touch
            </h2>
            <p className="lead mb-4">
              Ready to build something awesome? Our team is excited to hear your
              ideas and collaborate on your success.
            </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-3 d-flex align-items-center gap-3">
                <EmailIcon className="text-cyan" />
                <span>hello@synctrio.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-3">
                <PhoneIcon className="text-cyan" />
                <span>+977-9849121600</span>
              </li>
            </ul>

            <Link to="/contact" className="hero-button fw-semibold">
              Let’s Discuss Your Project!
            </Link>
          </motion.div>

          {/* Right Column - Animated Icons */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="row g-3 justify-content-center">
              {[SupportAgentIcon, ChatBubbleOutlineIcon, EmailIcon].map(
                (IconComponent, idx) => (
                  <motion.div
                    key={idx}
                    className="col-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="d-flex flex-column align-items-center justify-content-center text-center p-4 rounded"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "1rem",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.05)",
                        height: "100%",
                      }}
                    >
                      <IconComponent
                        style={{ fontSize: "2rem" }}
                        className="text-info mb-2"
                      />
                      <small className="text-white">Connect</small>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Button CSS */}
      <style>
        {`
          .gradient-btn {
            background: linear-gradient(135deg, #00ffff, #00bcd4);
            color: #0a0a0a;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            padding: 10px 20px;
            margin-top: 1rem;
            display: inline-block;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 4px 15px rgba(0, 255, 255, 0.2);
          }

          .gradient-btn:hover {
            background: linear-gradient(135deg, #00bcd4, #00ffff);
            color: #000;
            box-shadow: 0 6px 25px rgba(0, 255, 255, 0.4);
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
};

export default Footer;
