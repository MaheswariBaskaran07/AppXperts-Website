import React, { useState } from "react";
import { toast } from "react-toastify";
import img from "../../assets/Contact/Frame 1000009048.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow digits and limit to 15 characters
    if (name === "phone") {
      const phoneValue = value.replace(/[^0-9]/g, "").slice(0, 15);
      setFormData({ ...formData, [name]: phoneValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Phone validation (min 6, max 15 digits)
    if (formData.phone.length < 6 || formData.phone.length > 15) {
      toast.error("Phone number must be between 6 and 15 digits");
      return false;
    }

    if (!/^[0-9]+$/.test(formData.phone)) {
      toast.error("Phone number must contain only digits");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("https://emailapi.appxes-erp.in/api/booking/AddBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FirstName: formData.firstName,
          LastName: formData.lastName,
          EmailId: formData.email,
          MobileNo: formData.phone,
          Subject: formData.subject,
          Message: formData.message,
          Type: "Contact",
        }),
      });

      const data = await response.json();
      if (data.Status === true) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <section className="contact-form-section" style={sectionStyle}>
      <style>{`
        @media (max-width: 700px) {
          .contact-form-section { padding: 16px !important; flex-wrap: wrap !important; }
          .contact-form-left, .contact-form-right {
            flex: 1 1 100% !important;
            min-width: 0 !important;
          }
          .contact-form-right { padding: 12px !important; }
          .contact-form-section h2 { font-size: 24px !important; }
          .contact-form-section h3 { font-size: 18px !important; }
          .contact-form-section p  { font-size: 14px !important; }
          .contact-form-section input,
          .contact-form-section textarea { width: 100% !important; min-width: 0 !important; }
          .contact-form-section button { width: 100% !important; align-self: stretch !important; }
          .contact-form-img { max-width: 100% !important; }
          .name-row { display: grid !important; grid-template-columns: 1fr !important; gap: 10px !important; }
        }
      `}</style>
      {/* Left Column */}
      <div className="contact-form-left" style={leftColStyle}>
        <h2 style={headingStyle}>We’re Just a Message Away</h2>
        <p style={descStyle}>
          Have a project in mind, a question about our services, or simply want
          to say hello? Our team is here to listen, guide, and bring your ideas
          to life. Reach out today—let’s start creating something remarkable
          together.
        </p>
        <img src={img} alt="Contact Us" style={imgStyle} className="contact-form-img" />
      </div>

      {/* Right Column - Form */}
      <div className="contact-form-right" style={formWrapperStyle}>
        <h3 style={formHeadingStyle}>Fill the following details</h3>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div className="name-row" style={nameRowStyle}>
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              style={inputStyle}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              style={inputStyle}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number" 
            style={inputStyle}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            style={inputStyle}
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" style={buttonStyle} className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

// Base Styles
const sectionStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "clamp(16px, 4vw, 50px)",
  padding: "clamp(16px, 4vw, 50px)",
  fontFamily: "Poppins, sans-serif",
  flexWrap: "nowrap", // keep side-by-side on laptop/desktop
  maxWidth: "1100px",
  margin: "0 auto",
  boxSizing: "border-box",
};

const leftColStyle = {
  flex: "1 1 45%",
  minWidth: "min(300px, 100%)",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: 700,
  marginBottom: "16px",
};

const descStyle = {
  fontSize: "16px",
  color: "#4b5563",
  marginBottom: "32px",
  lineHeight: "1.6",
};

const imgStyle = {
  width: "100%",
  maxWidth: "450px",
  marginTop: "20px",
};

const formWrapperStyle = {
  flex: "1 1 45%",
  backgroundColor: "#f9fafb",
  padding: "clamp(16px, 3.2vw, 32px)",
  borderRadius: "12px",
  minWidth: "min(300px, 100%)",
};

const formHeadingStyle = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "16px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const nameRowStyle = {
  display: "flex",
  gap: "clamp(8px, 2.5vw, 16px)",
  flexWrap: "wrap", // ✅ stack on mobile
};

const inputStyle = {
  flex: 1,
  minWidth: "min(140px, 100%)", // prevents inputs from overflowing small screens
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "min(200px, 100%)",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  alignSelf: "flex-start",
  transition: "all 0.3s ease",
};

// Hover effect for button
buttonStyle[":hover"] = {
  backgroundColor: "#1d4ed8",
};

export default ContactForm;
