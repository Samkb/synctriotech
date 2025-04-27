import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  BusinessCenter,
  LaptopMac,
  ShowChart,
  TrendingUp,
} from "@mui/icons-material";
import {
  Assignment,
  DesignServices,
  IntegrationInstructions,
  Lan,
  RocketLaunch,
  Code,
  Cloud,
  Security,
  Devices,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import SparkleCanvas from "../components/SparkleCanvas";
import Header from "../components/HeaderHome"; // Import your Header component here
import Footer from "../components/Footer"; // Import your Header component here
import PortfolioSection from "../components/PortfolioSection"; // Import your Header component here
import MouseIcon from "@mui/icons-material/Mouse";
import BuildIcon from "@mui/icons-material/Build";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FloatingNav from "../components/SectionNav"; // adjust the path as needed
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Lottie from "lottie-react";
import handshakeAnimation from "../assets/lotties/handshake.json";
import progressAnimation from "../assets/lotties/progress.json";
import celebrationAnimation from "../assets/lotties/celebration.json";
import { PlayCircleFilled } from "@mui/icons-material";
import Modal from "react-bootstrap/Modal";

const Home: React.FC = () => {
  const timelineRef = useRef(null);

  // useEffect(() => {
  //   const line = timelineRef.current;

  //   const animateLine = () => {
  //     const rect = line.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     const totalHeight = line.scrollHeight;
  //     const visible = Math.min(windowHeight - rect.top, totalHeight);
  //     const progress = Math.max(0, Math.min(1, visible / totalHeight));
  //     line.style.transform = `scaleY(${progress})`;
  //   };

  //   animateLine();
  //   window.addEventListener("scroll", animateLine);
  //   return () => window.removeEventListener("scroll", animateLine);
  // }, []);

  return (
    <>
      {/* Header Section */}
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section
          id="hero"
          className="hero full-width-hero d-flex justify-content-center align-items-center text-center"
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
            overflow: "hidden",
          }}
        >
          <SparkleCanvas />

          <div
            className="z-2"
            style={{ maxWidth: "900px", padding: "20px", width: "100%" }}
          >
            {/* Hero Title with Shorter Sentence */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-title mb-3 text-center"
              style={{
                fontSize: "3.5rem",
                fontWeight: 800,
                background: "linear-gradient(90deg, #00e0ff, #40ffba)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px",
                lineHeight: 1.2,
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
                position: "relative",
              }}
            >
              Build with
              <span
                style={{
                  display: "inline-block",
                  position: "relative",
                  marginLeft: "10px",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, rgba(0,224,255,0.15), rgba(64,255,186,0.15))",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #00e0ff, #40ffba)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SyncTrio
                </span>

                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "-1.2rem",
                    right: "-0.5rem",
                    fontSize: "0.9rem",
                    background: "linear-gradient(to right, #00e0ff, #40ffba)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  Tech
                </motion.span>
              </span>
            </motion.h1>

            {/* Subtitles with Icons (Animated) */}
            <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                  width: "clamp(100px, 15vw, 140px)",
                  height: "clamp(100px, 15vw, 140px)",
                }}
              >
                <Lottie animationData={handshakeAnimation} loop={true} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                  width: "clamp(100px, 15vw, 140px)",
                  height: "clamp(100px, 15vw, 140px)",
                }}
              >
                <Lottie animationData={progressAnimation} loop={true} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                style={{
                  width: "clamp(100px, 15vw, 140px)",
                  height: "clamp(100px, 15vw, 140px)",
                }}
              >
                <Lottie animationData={celebrationAnimation} loop={true} />
              </motion.div>
            </div>

            <div className="text-center mt-4">
              <Link to="/about" className="hero-button fw-semibold">
                Get Started Today
              </Link>
            </div>
          </div>

          <a
            href="#core-pillars"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#core-pillars")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <motion.div
              className="scroll-indicator z-2"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            >
              <MouseIcon
                sx={{
                  fontSize: 32,
                  color: "#00e0ff",
                  filter: "drop-shadow(0 0 5px #00e0ff80)",
                  transition: "transform 0.3s ease",
                }}
              />
            </motion.div>
          </a>
        </section>
        {/* Core Pillars Section */}
        <section
          id="core-pillars"
          className="core-pillars-section-clean text-center"
          style={{
            background: "linear-gradient(135deg, rgba(29 29 90), #000428)",
            padding: "10rem 0",
            color: "#fff",
          }}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center fw-bold mb-5 display-5"
            >
              Our Core Pillars
            </motion.h2>

            <motion.div
              className="glow-divider mx-auto my-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="hero-subtitle mb-5"
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.6",
                maxWidth: "750px",
                margin: "0 auto",
                color: "#d1f3ff",
                background: "linear-gradient(to right, #66e0ff, #8affc1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
              }}
            >
              Empowering startups and businesses with seamless, scalable, and
              smart technology solutions.
            </motion.p>
            <div className="row text-center justify-content-center">
              {[
                {
                  icon: (
                    <BusinessCenter sx={{ fontSize: 60, color: "#00d1b2" }} />
                  ),
                  label: "Business",
                },
                {
                  icon: <LaptopMac sx={{ fontSize: 60, color: "#1e90ff" }} />,
                  label: "Technology",
                },
                {
                  icon: <ShowChart sx={{ fontSize: 60, color: "#00e676" }} />,
                  label: "Growth",
                },
              ].map(({ icon, label }, index) => (
                <motion.div
                  key={index}
                  className="col-12 col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="mb-3">{icon}</div>
                  <h4 className="fw-bold text-white">{label}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          style={{
            padding: "8rem 0",
            background: "linear-gradient(135deg,rgba(2 14 9),rgba(24 55 41))",
            color: "#e6fff3",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animations */}
          <style>
            {`
          @keyframes floating {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
          }
        `}
          </style>

          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center fw-bold mb-5 display-5 text-light"
            >
              Let’s Sync. Let’s Grow
            </motion.h2>

            <div className="row align-items-center">
              {/* Visual Side */}
              <motion.div
                className="col-md-6 mb-4 mb-md-0 position-relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Floating Background Effects */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: -1,
                    opacity: 0.2,
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                    borderRadius: "50%",
                    animation: "floating 8s ease-in-out infinite",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    right: "0",
                    zIndex: -1,
                    opacity: 0.15,
                    width: "250px",
                    height: "250px",
                    background:
                      "radial-gradient(circle, rgba(0,255,128,0.2), rgba(0,255,128,0))",
                    borderRadius: "50%",
                    animation: "floating 8s ease-in-out infinite reverse",
                  }}
                />

                {/* Icons Animate on Load, Large UI, No Rotation */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    flexWrap: "wrap", // ✅ Allow wrapping
                    marginBottom: "2rem",
                  }}
                >
                  {[
                    {
                      icon: <BusinessCenter fontSize="inherit" />,
                      color: "rgb(0, 209, 178)",
                    },
                    {
                      icon: <LaptopMac fontSize="inherit" />,
                      color: "#007bff",
                    },
                    {
                      icon: <ShowChart fontSize="inherit" />,
                      color: "#28a745",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.2 * index,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      style={{
                        fontSize: "6rem", // Large icon size
                        color: item.color,
                        flex: "0 0 auto",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>

                {/* Sparkle Canvas Animation */}
                <SparkleCanvas />
              </motion.div>

              {/* Textual/Info Side */}
              <motion.div
                className="col-md-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="d-flex flex-column gap-4">
                  {/* Each Pillar */}
                  {[
                    {
                      icon: <BusinessCenter />,
                      title: "Business-Driven Approach",
                      text: "We don’t just build — we understand your business model and tailor tech to fuel your growth.",
                      color: "#007bff",
                    },
                    {
                      icon: <LaptopMac />,
                      title: "Smart Integration",
                      text: "APIs, third-party systems, payment gateways — we unify it all to keep your workflow smooth.",
                      color: "#28a745",
                    },
                    {
                      icon: <ShowChart />,
                      title: "Future-Proof Solutions",
                      text: "With scalable architecture and robust design, we ensure long-term performance and maintainability.",
                      color: "#ffc107",
                    },
                    {
                      icon: <TrendingUp />,
                      title: "Let’s Grow Together",
                      text: "SyncTrio is your partner from idea to execution, helping you build smarter and faster.",
                      color: "#fd7e14",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex align-items-start gap-3">
                      <div
                        style={{
                          background: item.color,
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          minWidth: "60px", // ✅ prevent squishing in flex
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                          flexShrink: 0, // ✅ avoids shrinking in flex
                        }}
                      >
                        <span className="fs-3" style={{ lineHeight: 0 }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-light fw-bold">{item.title}</h5>
                        <p className="text-light opacity-75 mb-0">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section
          id="services"
          className="services-section text-white"
          style={{
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
            backgroundAttachment: "fixed",
            padding: "4rem 0",
          }}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center fw-bold mb-4 display-5"
            >
              Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-center lead text-light mb-5"
            >
              We provide end-to-end solutions, from ideation to execution:
            </motion.p>

            <div className="row gy-4">
              {[
                {
                  icon: <Assignment sx={{ fontSize: 40, color: "#00d1b2" }} />,
                  title: "Requirement Analysis",
                  description:
                    "Understanding your needs for the best tech strategy.",
                },
                {
                  icon: (
                    <RocketLaunch sx={{ fontSize: 40, color: "#ffc107" }} />
                  ),
                  title: "Prototyping",
                  description: "Turning ideas into tangible models.",
                },
                {
                  icon: <Lan sx={{ fontSize: 40, color: "#ff4d4f" }} />,
                  title: "Project Breakdown",
                  description: "Structured execution for smooth delivery.",
                },
                {
                  icon: (
                    <DesignServices sx={{ fontSize: 40, color: "#5e60ce" }} />
                  ),
                  title: "Design & Development",
                  description:
                    "Creating functional, scalable, and visually appealing products.",
                },
                {
                  icon: (
                    <IntegrationInstructions
                      sx={{ fontSize: 40, color: "#66d9e8" }}
                    />
                  ),
                  title: "Integration & API Development",
                  description: "Seamless system integration for efficiency.",
                },
                {
                  icon: (
                    <RocketLaunch sx={{ fontSize: 40, color: "#00e676" }} />
                  ),
                  title: "Deployment the Project",
                  description:
                    "Delivering your product to production with precision and care.",
                },
              ].map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="col-md-6 col-lg-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                >
                  <div
                    className="p-4 shadow h-100 text-center"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "15px", // Back to rounded
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <div className="mb-3">{icon}</div>
                    <h5 className="fw-bold text-white">{title}</h5>
                    <p className="text-light small">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Animated on Scroll */}
            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Link
                to="/services"
                className="btn btn-outline-light fw-semibold px-4 py-2"
                style={{ borderRadius: "30px" }}
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Why Choose US Section */}
        <section
          id="why-choose-us"
          className="why-choose-us-section text-center"
          style={{
            background: "linear-gradient(135deg, #000814, #001d3d)",
            padding: "3rem 0",
            color: "#fff",
          }}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="fw-bold mb-4 display-5"
            >
              Why Choose Us?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5"
              style={{
                fontSize: "1.2rem",
                maxWidth: "720px",
                margin: "0 auto",
                color: "#cce7ff",
                lineHeight: "1.7",
              }}
            >
              At SyncTrio Tech, we go beyond coding. We build lasting
              partnerships that fuel innovation, efficiency, and real business
              growth.
            </motion.p>

            <div className="row justify-content-center">
              {[
                {
                  icon: <BuildIcon sx={{ color: "#00e676", fontSize: 28 }} />,
                  text: "Tailored Solutions for startups and businesses to fit unique needs.",
                },
                {
                  icon: (
                    <PrecisionManufacturingIcon
                      sx={{ color: "#40c4ff", fontSize: 28 }}
                    />
                  ),
                  text: "Quality & Precision – Seamless integration of business processes with powerful tech.",
                },
                {
                  icon: (
                    <PeopleAltIcon sx={{ color: "#ffd54f", fontSize: 28 }} />
                  ),
                  text: "Experienced Team – Professionals committed to excellence at every step.",
                },
                {
                  icon: (
                    <TrendingUpIcon sx={{ color: "#00bfa5", fontSize: 28 }} />
                  ),
                  text: "Growth-Focused – We scale with you, driving success long-term.",
                },
                {
                  icon: (
                    <PaymentsIcon sx={{ color: "#ff8a65", fontSize: 28 }} />
                  ),
                  text: "Flexible Payments – Installment options that fit your budget.",
                },
                {
                  icon: (
                    <HandshakeIcon sx={{ color: "#ab47bc", fontSize: 28 }} />
                  ),
                  text: "Partnership Ready – Open to commission-based or long-term collaborations.",
                },
              ].map(({ icon, text }, i) => (
                <motion.div
                  key={i}
                  className="col-12 col-md-4 mb-4 d-flex align-items-start justify-content-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="card p-4 shadow-lg rounded-3"
                    style={{
                      background: "#001f3d", // Darker background for better contrast
                      width: "100%",
                      maxWidth: "350px",
                      textAlign: "left",
                      border: "1px solid #003f63", // Subtle dark border to match background
                      position: "relative",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)", // Soft shadow
                    }}
                  >
                    <div
                      className="card-body d-flex align-items-center gap-3"
                      style={{
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <div>{icon}</div>
                      <p style={{ margin: 0, color: "#e0f7fa" }}>{text}</p>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="card-glow"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "120%",
                        height: "120%",
                        background:
                          "linear-gradient(135deg, rgb(9 17 18), rgb(4 7 6))",
                        filter: "blur(20px)",
                        zIndex: 0,
                        borderRadius: "12px",
                        transform: "translate(-50%, -50%)",
                        opacity: "0.2", // Reduced opacity for subtler glow
                        transition: "opacity 0.3s ease",
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Our Works Section */}
        <PortfolioSection />
        <Footer />
        {/* Floating Navigation */}
        <FloatingNav />
      </div>
    </>
  );
};

export default Home;
