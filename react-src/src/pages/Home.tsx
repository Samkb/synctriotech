import React from "react";
import { motion } from "framer-motion";
import { BusinessCenter, LaptopMac, ShowChart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SparkleCanvas from "../components/SparkleCanvas";
import Header from "../components/Header"; // Import your Header component here

const Home: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="hero full-width-hero" style={{ paddingTop: "100px" }}>
        <SparkleCanvas />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hero-title"
        >
          Your Concept, <span className="text-blue-500">We Build</span> to
          Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hero-subtitle"
        >
          Empowering startups and businesses with seamless technology solutions.
        </motion.p>

        <div className="text-center ">
          <Link to="/contact" className="hero-button fw-semibold">
            Get Started Today
          </Link>
        </div>

        <a href="#core-pillars">
          <motion.div
            className="scroll-indicator"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <span className="scroll-down-arrow">⬇️</span>
          </motion.div>
        </a>
      </section>

      {/* Core Pillars Section */}
      <section
        id="core-pillars"
        className="core-pillars-section-clean text-center"
        style={{
          background: "linear-gradient(135deg, #f0f9ff, #ffffff)",
          padding: "3rem 0",
        }}
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            {[
              {
                icon: <BusinessCenter fontSize="large" />,
                label: "Business",
                color: "black",
              },
              {
                icon: <LaptopMac fontSize="large" />,
                label: "Technology",
                color: "#007bff",
              },
              {
                icon: <ShowChart sx={{ color: "#28a745", fontSize: 80 }} />,
                label: "Growth",
                color: "#28a745",
              },
            ].map(({ icon, label, color }, index) => (
              <motion.div
                key={index}
                className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="fw-bold text-dark pillar-label d-flex align-items-center justify-content-center gap-2">
                  {label}
                  <span style={{ color }}>{icon}</span>
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light" style={{ padding: "3rem 0" }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center fw-bold mb-5 display-5 text-primary"
          >
            About SyncTrio Tech
          </motion.h2>

          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="lead text-muted">
                  SyncTrio Tech bridges ideas and technology to build scalable,
                  impactful solutions. Whether you're a startup or growing
                  enterprise, we help you innovate and expand with strategic
                  development and seamless integration.
                </p>
              </motion.div>
            </div>

            <div className="col-md-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <div className="bg-white p-4 rounded shadow">
                  <span className="display-4 text-info">🚀</span>
                  <p className="fw-semibold mt-3 mb-0">Innovation + Growth</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
