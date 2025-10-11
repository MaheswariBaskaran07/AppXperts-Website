import img from "../../assets/Contact/Frame 1000009048.png";

const ContactForm = () => {
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
        <form style={formStyle}>
          <div className="name-row" style={nameRowStyle}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Phone Number" style={inputStyle} />
          <input type="text" placeholder="Subject" style={inputStyle} />
          <textarea
            placeholder="Message"
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
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
