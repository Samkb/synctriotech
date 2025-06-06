import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Changed
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
              <EmailIcon /> hello@synctrio.com
            </p>
            <a
              href="https://wa.me/9779808119388"
              className="d-flex align-items-center gap-2 mb-2 text-white text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon style={{ color: "#25D366" }} />
              Chat with us on WhatsApp
            </a>
          </div>

          <h5>Connect With Us</h5>
          <div className="d-flex gap-3 mt-2">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:hello@synctrio.com" className="text-white">
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
