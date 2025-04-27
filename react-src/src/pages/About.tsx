import React, { useState, useEffect } from "react";
import {
  EmojiObjects as EmojiObjectsIcon,
  TrendingUp as TrendingUpIcon,
  RocketLaunch as RocketLaunchIcon,
  Group as GroupIcon,
  Handshake as HandshakeIcon,
  Build as BuildIcon,
  EmojiEmotions as CheersIcon,
  TrendingUp as ProgressIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import handshakeAnim from "../assets/lotties/handshake.json";
import progressAnim from "../assets/lotties/progress.json";
import celebrationAnim from "../assets/lotties/celebration.json";
import CtaSection from "../components/CtaSection";
const About: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg, rgb(0 0 0), rgb(31 33 37), rgb(46 109 80))",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">About SyncTrio Tech</h1>
          <p className="lead mt-3">
            We help every startup and enterprise business. Let us handle your
            tech so you can focus on growing your business.
          </p>
          <p className="mt-3 fs-5">
            We believe in partnership, growth, and celebrating milestones
            together.
          </p>
        </div>
      </section>
      {/* Animations Section */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa", // Light background for contrast
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center g-5">
            <div className="col-md-4">
              <div style={{ width: 300, height: 300, margin: "0 auto" }}>
                <Lottie animationData={handshakeAnim} loop={true} />
              </div>
              <h5 className="mt-3">Partnership</h5>
            </div>
            <div className="col-md-4">
              <div style={{ width: 300, height: 300, margin: "0 auto" }}>
                <Lottie animationData={progressAnim} loop={true} />
              </div>
              <h5 className="mt-3">Growth</h5>
            </div>
            <div className="col-md-4">
              <div style={{ width: 300, height: 300, margin: "0 auto" }}>
                <Lottie animationData={celebrationAnim} loop={true} />
              </div>
              <h5 className="mt-3">Celebration</h5>
            </div>
          </div>
        </div>
      </section>
      {/* Core Section */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, rgb(28, 28, 28), rgb(9 15 21), rgb(25 180 142))",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row text-center about-section">
            {/* Item 1 */}
            <div className="col-md-4 mb-4 fade-on-hover">
              <EmojiObjectsIcon style={{ fontSize: 60, color: "#00FF88" }} />
              <h3 className="mt-3">Digitalize Your Ideas</h3>
              <p>
                We turn your vision into scalable digital products, transforming
                your business into a future-ready brand.
              </p>
            </div>

            {/* Item 2 */}
            <div className="col-md-4 mb-4 fade-on-hover">
              <TrendingUpIcon style={{ fontSize: 60, color: "#00FF88" }} />
              <h3 className="mt-3">Sustainable Growth Strategy</h3>
              <p>
                From planning to execution, we work closely with you to ensure
                your digital presence evolves with your goals.
              </p>
            </div>

            {/* Item 3 */}
            <div className="col-md-4 mb-4 fade-on-hover">
              <RocketLaunchIcon style={{ fontSize: 60, color: "#00FF88" }} />
              <h3 className="mt-3">Ready, Set, Launch!</h3>
              <p>
                We don’t stop at delivery. SyncTrio Tech offers ongoing support,
                updates, and optimization for your solutions.
              </p>
            </div>

            {/* Item 4 */}
            <div className="col-md-4 mb-4 fade-on-hover">
              <GroupIcon style={{ fontSize: 60, color: "#00FF88" }} />
              <h3 className="mt-3">People First. Team Always.</h3>
              <p>
                Behind every success story is a great team. We believe in
                collaboration, transparency, and open communication.
              </p>
            </div>

            {/* Item 5 */}
            <div className="col-md-4 mb-4 fade-on-hover">
              <HandshakeIcon style={{ fontSize: 60, color: "#00FF88" }} />
              <h3 className="mt-3">Partner with SyncTrio Tech</h3>
              <p>
                Let's create something extraordinary together. Start your
                journey with a reliable tech partner.
              </p>
            </div>

            {/* Item 6 - Start a Project */}
            <div className="col-md-4 mb-4 project-hover">
              <a
                href="/start-project"
                className="text-decoration-none text-white d-block h-100"
              >
                <div className="start-project-box rounded">
                  <BuildIcon style={{ fontSize: 60, color: "#00FF88" }} />
                  <h3 className="mt-3">Start a Project</h3>
                  <p>
                    Ready to bring your ideas to life? Let’s collaborate and
                    create something amazing together.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default About;
