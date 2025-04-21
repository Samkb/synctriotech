import React from "react";
import { Link } from "react-router-dom";
import {
  DesignServices,
  Lan,
  IntegrationInstructions,
  RocketLaunch as RocketLaunchIcon,
  ShoppingCart,
  TrendingUp,
  Build,
  Handshake as HandshakeIcon,
  EmojiObjects,
  Code,
  Cloud,
} from "@mui/icons-material";

const Services: React.FC = () => {
  return (
    <div className="services-page position-relative overflow-hidden">
      {/* Floating Icons */}
      <EmojiObjects className="floating-icon top-10 start-10" />
      <Code className="floating-icon bottom-10 start-0" />
      <Cloud className="floating-icon top-50 end-0" />

      {/* 🔥 Hero Section */}
      <section
        className="text-white py-5 position-relative"
        style={{
          background: "linear-gradient(135deg, #000000, #004d40, #00e0ff)",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3 fade-in-animation">
            Our Services
          </h1>
          <p className="lead mb-4 fade-in-animation">
            From stunning websites to powerful APIs — we build solutions that
            drive real growth.
          </p>
          <Link
            to="/contact"
            className="btn btn-light px-4 py-2 fw-semibold rounded-pill fade-in-animation"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* 💼 Service Highlights */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fade-in-animation">What We Offer</h2>
            <p className="lead fade-in-animation">
              Custom services tailored to your business goals.
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Website Design",
                icon: <DesignServices fontSize="large" />,
                color: "#00e676",
              },
              {
                title: "Website Development",
                icon: <Lan fontSize="large" />,
                color: "#40c4ff",
              },
              {
                title: "E-commerce Solutions",
                icon: <ShoppingCart fontSize="large" />,
                color: "#ffc107",
              },
              {
                title: "API Integration",
                icon: <IntegrationInstructions fontSize="large" />,
                color: "#ff4081",
              },
              {
                title: "SEO Services",
                icon: <TrendingUp fontSize="large" />,
                color: "#9575cd",
              },
              {
                title: "Ongoing Maintenance",
                icon: <Build fontSize="large" />,
                color: "#ff8a65",
              },
            ].map(({ title, icon, color }, index) => (
              <div key={index} className="col-md-6 col-lg-4 fade-in-animation">
                <div
                  className="p-4 h-100 shadow text-center"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "15px",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div className="mb-3" style={{ color }}>
                    {icon}
                  </div>
                  <h5 className="fw-bold">{title}</h5>
                  <p className="small">
                    We deliver secure, scalable, and user-friendly{" "}
                    {title.toLowerCase()} solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠️ Why Choose Us */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #1a1a1a, #003c8f)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold text-center mb-4 fade-in-animation">
            Why Choose SyncTrio?
          </h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4 fade-in-animation">
              <HandshakeIcon fontSize="large" style={{ color: "#00FF88" }} />
              <h5 className="mt-3">Partnership Focus</h5>
              <p>We collaborate closely to deliver aligned solutions.</p>
            </div>
            <div className="col-md-4 mb-4 fade-in-animation">
              <RocketLaunchIcon fontSize="large" style={{ color: "#40ffba" }} />
              <h5 className="mt-3">Speed + Quality</h5>
              <p>Our agile process ensures fast & reliable output.</p>
            </div>
            <div className="col-md-4 mb-4 fade-in-animation">
              <TrendingUp fontSize="large" style={{ color: "#00e0ff" }} />
              <h5 className="mt-3">Growth-Oriented</h5>
              <p>Solutions crafted to help you scale confidently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #000000, #004e92, #000428)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3 fade-in-animation">
            Ready to Grow Your Business?
          </h2>
          <p className="lead mb-4 fade-in-animation">
            Let’s build something extraordinary together.
          </p>
          <Link
            to="/start-project"
            className="btn btn-lg fw-bold fade-in-animation"
            style={{
              backgroundColor: "#00FF88",
              color: "#000",
              borderRadius: "30px",
              padding: "0.75rem 2rem",
            }}
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* Floating Icon Styles */}
      <style>{`
        .floating-icon {
          position: absolute;
          opacity: 0.05;
          font-size: 100px;
          z-index: 0;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .top-10 { top: 10%; }
        .bottom-10 { bottom: 10%; }
        .top-50 { top: 50%; transform: translateY(-50%); }
        .start-0 { left: 0; }
        .start-10 { left: 10%; }
        .end-0 { right: 0; }

        .fade-in-animation {
          opacity: 0;
          animation: fadeIn 1s ease-in-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
