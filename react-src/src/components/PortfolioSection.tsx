import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Add this import

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const apiUrl = `${window.SyncTrioRest.root}wp/v2/synctrio-work?_embed`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const formattedProjects = data.map((post) => ({
          title: post.title.rendered,
          subtitle:
            post._embedded?.["wp:term"]
              ?.flat()
              .map((term) => term.name)
              .join(", ") || "",
          image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          website: post.meta?.website_url || "",
          slug: post.slug,
        }));
        setProjects(formattedProjects);
      })
      .catch((err) => console.error("Failed to fetch API posts", err));
  }, []);

  // Set itemsPerSlide based on window width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 576) setItemsPerSlide(1);
      else if (width < 992) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Chunk array into slide groups
  const chunkProjects = () => {
    const chunks = [];
    for (let i = 0; i < projects.length; i += itemsPerSlide) {
      chunks.push(projects.slice(i, i + itemsPerSlide));
    }
    return chunks;
  };

  const slides = chunkProjects();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section
      id="portfolio"
      className="portfolio-section py-5"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-4 display-5">Our Work</h2>
        <p className="mb-5 text-light fs-5">
          Explore some of our featured projects that demonstrate innovation,
          reliability, and growth-focused results.
        </p>

        {slides.length > 0 && (
          <>
            <div className="row g-4 justify-content-center">
              {slides[currentSlide].map((project, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div className="project-card position-relative overflow-hidden rounded-4 shadow h-100">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {/* <Link to={`/portfolio/${project.slug}`} className="text-decoration-none"></Link> */}
                      <div className="image-scroll-container">
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
                        <h5 className="fw-bold text-white mb-1">
                          {project.title}
                        </h5>
                        <p className="text-light mb-0">{project.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls d-flex justify-content-center gap-3 mt-4">
              <button
                className="btn btn-gradient-hover d-flex align-items-center gap-2 px-4"
                onClick={prevSlide}
              >
                <ChevronLeft />
                Prev
              </button>
              <button
                className="btn btn-gradient-hover d-flex align-items-center gap-2 px-4"
                onClick={nextSlide}
              >
                Next
                <ChevronRight />
              </button>
            </div>
          </>
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
.btn-gradient-hover {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
}

.btn-gradient-hover:hover {
  border-image: linear-gradient(45deg, #28a745, #00bcd4) 1;
  color: #28a745;
  background-color: rgba(255, 255, 255, 0.05);
}

/* Icon slide effect */
.btn-gradient-hover svg {
  transition: transform 0.3s ease;
}

.btn-gradient-hover:hover svg:first-child {
  transform: translateX(-4px); /* left arrow slides left */
}

.btn-gradient-hover:hover svg:last-child {
  transform: translateX(4px); /* right arrow slides right */
}

 
`}</style>
    </section>
  );
};

export default PortfolioSection;
