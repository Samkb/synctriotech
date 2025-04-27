// components/CtaSection.tsx

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import thinkingAnim from "../assets/lotties/thinking.json"; // adjust the path as needed
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "#ffffff",
        color: "#111111",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Lottie Animation with Floating Effect */}
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{
                y: [0, -10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <div
                style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
              >
                <Lottie animationData={thinkingAnim} loop={true} />
              </div>
            </motion.div>
          </div>

          {/* Right Side - Text Content */}
          <div className="col-lg-8 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                Not Sure Where to Start?
              </h2>
              <p
                className="lead mb-3"
                style={{ fontSize: "1.25rem", color: "#333" }}
              >
                Are you looking for a reliable partner to build, manage, and
                maintain your digital presence?
              </p>
              <p
                className="lead mb-4"
                style={{ fontSize: "1.25rem", color: "#555" }}
              >
                Whether it's launching a website, maintaining technical
                operations, or scaling your digitalized business, we've got you
                covered.
              </p>

              <Link to="/contact" className="hero-button fw-semibold">
                Let’s Discuss Your Project!
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
