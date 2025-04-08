import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Your Concept, We Build to Reality</h1>
        <p>
          Empowering startups and businesses with seamless technology solutions.
        </p>
        <Link to="/contact" className="cta-button">
          Get Started Today
        </Link>
      </section>

      {/* About SyncTrio Tech Section */}
      <section className="about-section">
        <h2>About SyncTrio Tech</h2>
        <p>
          We are a technology-driven company focused on delivering quality IT
          services with smooth synchronization between business processes and
          technology. Whether you're a startup or an established business, we
          help you grow with tailored tech solutions.
        </p>
        <p className="tagline">
          Business, Technology & Growth – Let's Grow Together!
        </p>
        <img src="https://via.placeholder.com/400x300" alt="SyncTrio Tech" />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>We provide end-to-end solutions, from ideation to execution:</p>
        <div className="service-card">
          <h3>Requirement Analysis</h3>
          <p>Understanding your needs for the best tech strategy.</p>
        </div>
        {/* Add more service cards here */}
        <Link to="/services" className="cta-button">
          Explore Our Services
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <div className="feature-card">
          <span>✅</span>
          <div>
            <h4>Tailored Solutions</h4>
            <p>Custom-built for startups and businesses to fit unique needs.</p>
          </div>
        </div>
        {/* Add more feature cards here */}
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2>Our Work</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of the project and its impact.</p>
        </div>
        {/* Add more project cards here */}
        <Link to="/portfolio" className="cta-button">
          See Our Work
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <p>
          "SyncTrio Tech transformed our business with seamless integration and
          a user-friendly platform!"
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>
          Let’s discuss how we can help your business grow with our tech
          solutions.
        </p>
        <Link to="/contact" className="cta-button">
          Let’s Discuss Your Project!
        </Link>
      </section>
    </div>
  );
};

export default Home;
