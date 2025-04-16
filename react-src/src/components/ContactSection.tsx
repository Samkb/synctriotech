import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactSection: React.FC = () => {
  return (
    <section
      className="container py-5"
      style={{ background: "#0f2027", color: "#fff" }}
    >
      <div className="row">
        {/* Left Column - Contact Info */}
        <div className="col-md-5 mb-4">
          <h2 className="mb-3">Contact Us</h2>
          <p className="lead">Let’s Discuss Your Project!</p>

          <div className="mb-4">
            <p className="d-flex align-items-center gap-2 mb-2">
              <EmailIcon /> hello@synctriotech.com
            </p>
            <p className="d-flex align-items-center gap-2 mb-2">
              <PhoneIcon /> +977-1234567890
            </p>
          </div>

          <h5>Connect With Us</h5>
          <div className="d-flex gap-3 mt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:hello@synctriotech.com" className="text-white">
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Right Column - Inquiry Form */}
        <div className="col-md-7">
          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-info fw-bold text-dark">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
