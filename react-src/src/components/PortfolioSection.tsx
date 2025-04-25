import React, { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";

const PortfolioSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalData, setModalData] = useState({ title: "", subtitle: "" });
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);
  const imageRef = useRef(null);
  const startYRef = useRef(null);

  const projects = [
    {
      image:
        "/wp-content/themes/synctriotech/react-src/public/assets/client1.png",
      title: "UK SANSAR",
      subtitle: "Design, Development",
    },
    {
      image:
        "/wp-content/themes/synctriotech/react-src/public/assets/client2.png",
      title: "UK SANSAR ESTATE AGENCY",
      subtitle: "Design, Develop, Properties API Integration",
    },
    {
      image:
        "/wp-content/themes/synctriotech/react-src/public/assets/client3.png",
      title: "DOKO HOMES",
      subtitle: "Design, Development",
    },
  ];

  const openModal = ({ image, title, subtitle }) => {
    setModalImage(image);
    setModalData({ title, subtitle });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setScrollProgress(0);
  };

  useEffect(() => {
    if (showModal && imageRef.current) {
      imageRef.current.style.animation = "scrollUp 12s linear forwards";
    }
  }, [showModal]);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.animation = "none";
        imageRef.current.style.transform = "translateY(0%)";
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrolled);
      if (scrolled >= 99) setTimeout(closeModal, 1000);
    };

    const handleTouchStart = (e) => {
      startYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (Math.abs(endY - startYRef.current) > 100) closeModal();
    };

    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      scrollEl.addEventListener("touchstart", handleTouchStart);
      scrollEl.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", handleScroll);
        scrollEl.removeEventListener("touchstart", handleTouchStart);
        scrollEl.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [showModal]);

  return (
    <section
      id="portfolio"
      className="portfolio-section py-5"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <div className="container">
        <h2 className="fw-bold text-center mb-4 display-5">Our Work</h2>
        <p className="text-center mb-5 text-light fs-5">
          Explore some of our featured projects that demonstrate innovation,
          reliability, and growth-focused results.
        </p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="project-card position-relative overflow-hidden rounded-4 shadow">
                <div
                  className="image-scroll-container"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="scroll-img img-fluid"
                  />
                  <div className="centered-overlay">
                    <span>Click to View</span>
                  </div>
                </div>

                <div className="overlay d-flex flex-column justify-content-end text-start p-3">
                  <h5 className="fw-bold text-white mb-1">{project.title}</h5>
                  <p className="text-light mb-0">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="custom-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={closeModal}>
                <Close style={{ fontSize: "2rem", color: "#fff" }} />
              </span>

              <div className="scroll-wrapper" ref={scrollRef}>
                <img
                  ref={imageRef}
                  src={modalImage}
                  alt="scroll-preview"
                  className="modal-scroll-img"
                />
              </div>

              {/* Fixed footer overlay */}
              <div className="modal-footer-overlay">
                <div className="modal-scroll-hint">
                  Scroll or swipe to explore
                </div>
                <div className="scroll-progress-bar">
                  <div
                    className="progress-filled"
                    style={{ width: `${scrollProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
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

    .image-scroll-container {
      height: 300px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }

    .scroll-img {
      width: 100%;
    }

    .click-to-view {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 0.9rem;
      background: rgba(0, 0, 0, 0.6);
      padding: 4px 8px;
      border-radius: 5px;
    }

    .centered-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(100, 100, 100, 0.5); /* gray overlay */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 1.1rem;
      font-weight: bold;
      transition: background 0.3s ease;
      opacity: 0;
      cursor: pointer;
    }

    .image-scroll-container:hover .centered-overlay {
      opacity: 1;
    }

    .custom-modal {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      overflow: hidden;
      border-radius: 1rem;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 2rem;
      color: #fff;
      cursor: pointer;
      z-index: 10001;
    }

    .scroll-wrapper {
      overflow-y: auto;
      max-height: 80vh;
      position: relative;
    }

    .modal-scroll-img {
      width: 100%;
      animation: scrollUp 12s linear forwards;
    }

    .modal-overlay-content {
      position: absolute;
      bottom: 20px;
      left: 20px;
      background: rgba(255, 255, 255, 0.9);
      color: #000;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      max-width: 80%;
      z-index: 9999;
    }

    .modal-scroll-hint {
      position: absolute;
      bottom: 10px;
      right: 20px;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      font-size: 0.85rem;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      z-index: 10001;
      backdrop-filter: blur(4px);
      animation: fadeInHint 2s ease-in-out;
      pointer-events: none;
    }

    .modal-footer-overlay {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 10001;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .scroll-progress-bar {
      width: 100%;
      height: 5px;
      background: rgba(255, 255, 255, 0.2);
    }

    .progress-filled {
      height: 100%;
      background: #00ffc6;
      transition: width 0.3s ease;
    }

    @keyframes fadeInHint {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scrollUp {
      0% { transform: translateY(0%); }
      100% { transform: translateY(-80%); }
    }
`}</style>
    </section>
  );
};

export default PortfolioSection;
