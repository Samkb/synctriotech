import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PortfolioSingle = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${window.SyncTrioRest.root}wp/v2/synctrio-work?slug=${slug}&_embed`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const post = data[0];
          setProject({
            title: post.title.rendered,
            content: post.content.rendered,
            image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
            website: post.meta?.website_url || "",
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (!project)
    return <div className="text-center py-5">Project not found</div>;

  return (
    <>
      {/* Hero Section */}
      <section
        className="portfolio-hero d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: "40vh",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
        <h1 className="position-relative z-1 fw-bold display-4">
          {project.title}
        </h1>
      </section>

      {/* Case Study Section */}
      <section
        className="py-5"
        style={{ background: "#0f2027", color: "#fff" }}
      >
        <div className="container">
          <div
            dangerouslySetInnerHTML={{ __html: project.content }}
            className="mb-4"
          />
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Visit Website
            </a>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioSingle;
