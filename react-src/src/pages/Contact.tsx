import React, { useState, useEffect } from "react";
import Header from "../components/HeaderHome";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SvgIcon from "@mui/material/SvgIcon";

const SyncTrioRestUrl = window.SyncTrioRest || {};
console.log(SyncTrioRestUrl, "rest url");

// Custom Viber Icon

// Custom Viber Icon
const ViberIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="#7360F2"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967s-.47-.149-.668.149-.767.967-.941 1.168c-.173.2-.347.223-.644.075s-1.26-.464-2.4-1.475c-.888-.791-1.488-1.767-1.664-2.065-.173-.297-.019-.457.13-.605.134-.134.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.668-1.611-.916-2.21-.242-.579-.487-.5-.668-.51h-.571c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 6.423h-.004a9.87 9.87 0 01-5.301-1.537l-.381-.238-3.934 1.037 1.05-3.827-.248-.394a9.86 9.86 0 01-1.51-5.285c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 012.896 6.987c-.003 5.451-4.437 9.884-9.888 9.884M20.487 3.515A11.815 11.815 0 0012.05 0C5.495 0 .16 5.336.157 11.891c0 2.096.547 4.142 1.588 5.934L0 24l6.306-1.655a11.88 11.88 0 005.732 1.458h.005c6.554 0 11.889-5.336 11.892-11.891a11.823 11.823 0 00-3.448-8.397"
    />
  </SvgIcon>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    queryType: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | "">(
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: (document.getElementById("name") as HTMLInputElement)?.value || "",
      email:
        (document.getElementById("email") as HTMLInputElement)?.value || "",
      queryType:
        (document.getElementById("queryType") as HTMLInputElement)?.value || "",
      projectType:
        (document.getElementById("projectType") as HTMLSelectElement)?.value ||
        "",
      budget:
        (document.getElementById("budget") as HTMLInputElement)?.value || "",
      message:
        (document.getElementById("message") as HTMLTextAreaElement)?.value ||
        "",
    };

    console.log("Submitting data: ", formData);

    try {
      setLoading(true);
      const response = await fetch(SyncTrioRestUrl.api_base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMsg(`✅ Thanks for connecting with SyncTrio Tech!
We’ve got your message and we’re on it.
Till then, chill and let the tech vibes flow ✨`);

        setResponseType("success");
        setFormData({
          name: "",
          email: "",
          queryType: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setResponseMsg(result?.message || "❌ Failed to send message.");
        setResponseType("error");
      }
    } catch (error) {
      console.error("Send Error", error);
      setResponseMsg("❌ There was an error sending the message.");
      setResponseType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponseMsg("");
        setResponseType("");
      }, 6000);
    }
  };

  return (
    <>
      {/* ✅ Full-Width Hero Banner */}
      <div className="contactpage">
        <section
          className="w-100 py-5 text-center"
          style={{
            background:
              "linear-gradient(90deg, rgb(0, 0, 0), rgb(38 63 66), rgb(5 21 15))",
            color: "#ffffff",
          }}
        >
          <div className="container">
            <h1
              className="display-4 fw-bold mb-3"
              style={{
                fontSize: "3.2rem",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #00e0ff, #40ffba)",
                textShadow: "0 0 10px rgba(0, 224, 255, 0.3)",
              }}
            >
              Get in Touch
            </h1>
            <p className="lead" style={{ maxWidth: "700px", margin: "0 auto" }}>
              We're here to turn your vision into reality — start the
              conversation and let’s grow together!
            </p>
          </div>
        </section>

        {/* ✅ Contact Info + Form Section */}
        <div
          className="container-fluid py-5"
          style={{
            background: "linear-gradient(135deg, #0a0a0a, #0f2027, #2c5364)",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col-md-5 mb-4">
                <h4 className="mb-3 text-white">Contact Information</h4>

                <p className="d-flex align-items-center gap-2 mb-3">
                  <Email className="text-info" />
                  hello@synctriotech.com
                </p>

                <p className="d-flex align-items-center gap-2 mb-3">
                  <Phone className="text-info" />
                  <a
                    href="tel:+9771234567890"
                    className="text-decoration-none text-light"
                  >
                    +977-1234567890
                  </a>
                </p>

                <p className="d-flex align-items-center gap-2 mb-3">
                  <a
                    href="https://wa.me/9771234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-2 text-decoration-none text-light"
                  >
                    <WhatsAppIcon style={{ color: "#25D366" }} />
                    WhatsApp Chat
                  </a>
                </p>

                <p className="d-flex align-items-center gap-2 mb-3">
                  <a
                    href="viber://add?number=9771234567890"
                    className="d-flex align-items-center gap-2 text-decoration-none text-light"
                    onClick={(e) => {
                      // Optional: Check for browser/device support
                      if (!navigator.userAgent.includes("Mobile")) {
                        alert(
                          "Viber link only works if Viber app is installed."
                        );
                      }
                    }}
                  >
                    <ViberIcon />
                    Viber Call
                  </a>
                </p>

                <p className="d-flex align-items-center gap-2">
                  <LocationOn className="text-info" />
                  Kathmandu, Nepal
                </p>
              </div>

              {/* Contact Form */}
              <div className="col-md-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="queryType"
                      className="form-label text-white"
                    >
                      What can we help you with?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="projectType"
                      className="form-label text-white"
                    >
                      Project Type
                    </label>
                    <select
                      className="form-select"
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">-- Select a project type --</option>
                      <option>Website Development</option>
                      <option>Website Maintenance</option>
                      <option>Website Design</option>
                      <option>Redesign / Rebuild</option>
                      <option>Features Addition</option>
                      <option>E-commerce Development</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label text-white">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-white">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="hero-button align-items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send />
                  </button>
                </form>
                {responseMsg && (
                  <div
                    className={`alert mt-4 ${
                      responseType === "success"
                        ? "alert-success"
                        : "alert-danger"
                    } fade show`}
                    role="alert"
                    style={{
                      borderLeft: "5px solid",
                      borderColor:
                        responseType === "success" ? "#00e0ff" : "#ff4d4f",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    {responseMsg}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
