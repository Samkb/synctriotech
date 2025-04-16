import React from "react";
import { useEffect, useRef } from "react";
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
import Header from "../components/Header"; // Import your Header component here
import Typewriter from "typewriter-effect";
import MouseIcon from "@mui/icons-material/Mouse";
import BuildIcon from "@mui/icons-material/Build";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentsIcon from "@mui/icons-material/Payments";
import HandshakeIcon from "@mui/icons-material/Handshake";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/MarkEmailUnread";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Home: React.FC = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const line = timelineRef.current;

    const animateLine = () => {
      const rect = line.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = line.scrollHeight;
      const visible = Math.min(windowHeight - rect.top, totalHeight);
      const progress = Math.max(0, Math.min(1, visible / totalHeight));
      line.style.transform = `scaleY(${progress})`;
    };

    animateLine();
    window.addEventListener("scroll", animateLine);
    return () => window.removeEventListener("scroll", animateLine);
  }, []);

  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <section
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
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title mb-3"
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              background: "linear-gradient(90deg, #00e0ff, #40ffba)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(0,255,255,0.2)",
              letterSpacing: "1px",
            }}
          >
            <span className="typewriter-wrapper">
              <Typewriter
                options={{
                  strings: [
                    "Your Concept, We Build",
                    "Grow with Technology",
                    "Achieve with SyncTrio",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 110,
                  deleteSpeed: 50,
                  // pauseFor: 2000,
                  cursor: "",
                }}
              />
            </span>
          </motion.h1>

          <div className="hero-icons d-flex justify-content-center gap-4 mt-5">
            {[Code, Cloud, Security, Devices].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                className="text-light fs-2"
              >
                <Icon style={{ fontSize: "2.3rem" }} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/contact" className="hero-button fw-semibold">
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
            // transition={{
            //   repeat: Infinity,
            //   duration: 1.5,
            //   ease: "easeInOut",
            // }}

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
          background: "linear-gradient(135deg, #004e92, #000428)",
          padding: "4rem 0",
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
          padding: "4rem 0",
          background: "linear-gradient(135deg, #0c3c29, #0f5132)",
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
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    icon: <BusinessCenter fontSize="inherit" />,
                    color: "rgb(0, 209, 178)",
                  },
                  { icon: <LaptopMac fontSize="inherit" />, color: "#007bff" },
                  { icon: <ShowChart fontSize="inherit" />, color: "#28a745" },
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
                      fontSize: "9rem", // Large icon size
                      color: item.color,
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      }}
                    >
                      <span className="fs-3">{item.icon}</span>
                    </div>
                    <div>
                      <h5 className="text-light fw-bold">{item.title}</h5>
                      <p className="text-light opacity-75 mb-0">{item.text}</p>
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
                icon: <RocketLaunch sx={{ fontSize: 40, color: "#ffc107" }} />,
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
                icon: <RocketLaunch sx={{ fontSize: 40, color: "#00e676" }} />,
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
        className="why-choose-us-section text-center"
        style={{
          background: "linear-gradient(135deg, #000814, #001d3d)",
          padding: "4rem 0",
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
            At SyncTrio Tech, we go beyond coding. We build lasting partnerships
            that fuel innovation, efficiency, and real business growth.
          </motion.p>

          <div className="row justify-content-center">
            {[
              {
                icon: <BuildIcon sx={{ color: "#00e676", fontSize: 28 }} />,
                text: "Tailored Solutions – Custom-built for startups and businesses to fit unique needs.",
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
                icon: <PeopleAltIcon sx={{ color: "#ffd54f", fontSize: 28 }} />,
                text: "Experienced Team – Professionals committed to excellence at every step.",
              },
              {
                icon: (
                  <TrendingUpIcon sx={{ color: "#00bfa5", fontSize: 28 }} />
                ),
                text: "Growth-Focused – We scale with you, driving success long-term.",
              },
              {
                icon: <PaymentsIcon sx={{ color: "#ff8a65", fontSize: 28 }} />,
                text: "Flexible Payments – Installment options that fit your budget.",
              },
              {
                icon: <HandshakeIcon sx={{ color: "#ab47bc", fontSize: 28 }} />,
                text: "Partnership Ready – Open to commission-based or long-term collaborations.",
              },
            ].map(({ icon, text }, i) => (
              <motion.div
                key={i}
                className="col-12 col-md-6 mb-4 d-flex align-items-start justify-content-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
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
      <section
        className="portfolio-section py-5"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
          color: "#fff",
        }}
      >
        <div className="container">
          <motion.h2
            className="fw-bold text-center mb-4 display-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </motion.h2>
          <p className="text-center mb-5 text-light fs-5">
            Explore some of our featured projects that demonstrate innovation,
            reliability, and growth-focused results.
          </p>

          <div className="row g-4">
            {[
              {
                image:
                  "/wp-content/themes/synctriotech/react-src/public/assets/client1.png",
                title: "E-Commerce App",
                subtitle: "Mobile-first design & conversion-focused UI",
              },
              {
                image:
                  "/wp-content/themes/synctriotech/react-src/public/assets/client2.png",
                title: "CRM Dashboard",
                subtitle: "Real-time analytics and automation",
              },
              {
                image:
                  "/wp-content/themes/synctriotech/react-src/public/assets/client3.png",
                title: "SaaS Platform",
                subtitle: "Robust backend and cloud-ready infrastructure",
              },
            ].map(({ image, title, subtitle }, index) => (
              <motion.div
                key={index}
                className="col-12 col-sm-6 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="project-card position-relative overflow-hidden rounded-4 shadow">
                  <div className="image-scroll-container">
                    <img
                      src={image}
                      alt={title}
                      className="scroll-img img-fluid"
                    />
                  </div>
                  <div className="overlay d-flex flex-column justify-content-end text-start p-3">
                    <h5 className="fw-bold text-white mb-1">{title}</h5>
                    <p className="text-light mb-0">{subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/portfolio"
              className="btn btn-outline-light btn-lg rounded-pill px-5"
            >
              See Our Work
            </Link>
          </div>
        </div>

        <style>{`
    .project-card {
      height: 100%;
      border: 1px solid #2f4f4f;
      transition: transform 0.4s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: scale(1.03);
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    }

    .project-card:hover .overlay {
  background: transparent;
  opacity: 0;
  transition: opacity 0.4s ease, background 0.4s ease;
}
    .image-scroll-container {
      height: 300px;
      overflow: hidden;
      position: relative;
    }

    .scroll-img {
      width: 100%;
      transition: transform 6s ease-in-out;
    }

    .project-card:hover .scroll-img {
      transform: translateY(-80%);
    }

 
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  transition: background 0.4s ease, opacity 0.4s ease;
}
    .overlay h5,
    .overlay p {
      margin: 0;
      opacity: 1;
      transition: opacity 0.4s ease, transform 0.4s ease;
    }

  .project-card:hover .overlay h5,
  .project-card:hover .overlay p {
    opacity: 0;
    transform: translateY(10px);
  }
  `}</style>
      </section>
      {/* Testimonial Section */}
      <section
        className="testimonials-section py-5"
        style={{
          background: "linear-gradient(to right, #1c1c1c, #2b2b2b)",
          color: "#fff",
          position: "relative",
        }}
      >
        <div className="container position-relative">
          <motion.h2
            className="fw-bold text-center mb-4 display-5 d-flex align-items-center justify-content-center gap-3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <i className="bi bi-chat-quote-fill text-cyan"></i>
            What Our Clients Say
          </motion.h2>
          <p className="text-center text-muted mb-5">
            Voices from visionaries — built, launched, and loved 🚀
          </p>

          <div className="timeline-wrapper">
            <div className="timeline-line" ref={timelineRef}></div>

            {[
              {
                quote:
                  "SyncTrio Tech transformed our business with seamless integration and a user-friendly platform!",
                name: "Aarav Sharma",
                logo: "/assets/clients/client1-logo.png",
                rating: 5,
                date: "2024-12-15 10:30 AM",
              },
              {
                quote:
                  "Their team delivered beyond expectations. We're seeing real results!",
                name: "Priya Desai",
                logo: "/assets/clients/client2-logo.png",
                rating: 4,
                date: "2025-01-10 03:45 PM",
              },
              {
                quote:
                  "We loved the collaboration and support throughout our SaaS build. Definitely recommended.",
                name: "Rajan Thapa",
                logo: "/assets/clients/client3-logo.png",
                rating: 5,
                date: "2025-02-25 12:15 PM",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <div className="node-dot"></div>

                <div className="testimonial-card p-4 text-center">
                  <img
                    src={
                      testimonial.logo ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        testimonial.name
                      )}&background=00ffff&color=ffffff&rounded=true&size=80`
                    }
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        testimonial.name
                      )}&background=00ffff&color=ffffff&rounded=true&size=80`;
                    }}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    width="70"
                    height="70"
                  />

                  <p className="fs-6 fst-italic text-light mb-3 position-relative">
                    <i className="bi bi-quote fs-4 text-cyan me-1"></i>
                    {testimonial.quote}
                  </p>
                  <div className="mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <h6 className="fw-bold text-white mb-0">
                    <i className="bi bi-person-circle me-2 text-info"></i>
                    {testimonial.name}
                  </h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          .text-cyan {
            color: #00ffff;
          }

          .timeline-wrapper {
            position: relative;
            padding: 2rem 0;
          }

          .timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background: #00ffff;
            transform-origin: top;
            transform: scaleY(0);
            transition: transform 0.3s ease-out;
            z-index: 1;
          }

          .timeline-item {
            position: relative;
            width: 100%;
            max-width: 46%;
            margin-bottom: 60px;
            z-index: 2;
          }

          .timeline-item.left {
            left: 0;
            text-align: right;
          }

          .timeline-item.right {
            left: 54%;
            text-align: left;
          }

          .node-dot {
            width: 20px;
            height: 20px;
            background: #00ffff;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: -10px;
            transform: translateX(-50%);
            animation: pulseDot 2s infinite;
            z-index: 3;
          }

          .testimonial-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.5rem;
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            transition: transform 0.3s ease;
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 40px rgba(0, 255, 255, 0.1);
          }

          @keyframes pulseDot {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.5);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(0, 255, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
            }
          }

          @media (max-width: 768px) {
            .timeline-line {
              left: 20px;
            }

            .timeline-item {
              max-width: 100%;
              left: 0 !important;
              padding-left: 40px;
              text-align: left;
            }

            .node-dot {
              left: 20px;
            }
          }
        `}</style>
      </section>

      <section
        className="py-5"
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
                Ready to build something awesome? Our team is excited to hear
                your ideas and collaborate on your success.
              </p>

              <ul className="list-unstyled fs-5">
                <li className="mb-3 d-flex align-items-center gap-3">
                  <EmailIcon className="text-cyan" />
                  <span>hello@synctriotech.com</span>
                </li>
                <li className="mb-3 d-flex align-items-center gap-3">
                  <PhoneIcon className="text-cyan" />
                  <span>+977-1234567890</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="btn fw-bold mt-3 px-4 py-2 gradient-btn"
              >
                Let’s Discuss Your Project!
              </a>

              <style>
                {`
    .gradient-btn {
      background: linear-gradient(135deg, #00ffff, #00bcd4);
      color: #0a0a0a;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
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
            </motion.div>

            {/* Right Column - Animated Visual with MUI Icons */}
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
                          transition: "all 0.3s ease",
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
      </section>
    </>
  );
};

export default Home;
