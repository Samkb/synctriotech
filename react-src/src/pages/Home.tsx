import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaLaptopCode, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";
import SparkleCanvas from "../components/SparkleCanvas"; // Adjust the path as needed

const Home: React.FC = () => {
  return (
    <>
      {/* Full-width Hero Section */}
      <section className="hero full-width-hero">
        <SparkleCanvas />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="hero-title text-5xl md:text-7xl font-bold text-center text-gradient"
        >
          Your Concept, <span className="text-blue-500">We Build</span> to
          Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hero-subtitle text-xl md:text-2xl font-medium text-center text-gray-200"
        >
          Empowering startups and businesses with seamless technology solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        <Link to="/contact" className="hero-button">
          Get Started Today
        </Link>
      </section>

      {/* New Business Goal Section with Animated Icon */}
      <section className="business-goal-section py-20 bg-light-gray flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Left side: Business Goal Idea */}
          <div className="left-side w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-4xl font-semibold text-gradient"
            >
              Our Mission: Empowering Your Business to Thrive
            </motion.h2>
            <p className="mt-4 text-lg text-gray-700">
              At SyncTrio Tech, we believe in creating seamless solutions that
              bridge the gap between technology and business growth. Our goal is
              to transform your ideas into reality with tailor-made solutions
              that scale as your business grows.
            </p>
          </div>

          {/* Right side: Animated Icon */}
          <motion.div
            className="right-side w-full md:w-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="icon-animation"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0.2, 0.6, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <FaBuilding className="icon business text-6xl text-blue-500 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section: Business, Technology, Growth */}
      <section className="core-pillars-section-light py-20 text-center">
        <h2 className="section-title-light">Our Core Pillars</h2>
        <div className="pillars-container-light">
          {/* Business */}
          <motion.div whileHover={{ scale: 1.1 }} className="pillar-light">
            <motion.div
              className="icon-animation"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0.2, 0.6, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <FaBuilding className="icon business" />
            </motion.div>
            <p className="pillar-title-light">Business</p>
          </motion.div>

          {/* Technology */}
          <motion.div whileHover={{ scale: 1.1 }} className="pillar-light">
            <motion.div
              className="icon-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <FaLaptopCode className="icon technology" />
            </motion.div>
            <p className="pillar-title-light">Technology</p>
          </motion.div>

          {/* Growth */}
          <motion.div whileHover={{ scale: 1.1 }} className="pillar-light">
            <motion.div
              className="icon-animation"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaSeedling className="icon growth" />
            </motion.div>
            <p className="pillar-title-light">Growth</p>
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections */}
      {/* About SyncTrio Tech, Services, Portfolio, Testimonials, Contact Us */}
      {/* Continue with your existing sections here */}
    </>
  );
};

export default Home;
