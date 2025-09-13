import img from "../../assets/Contact/Frame 1000009048.png";

const ContactForm = () => {
  return (
    <section style={sectionStyle}>
      {/* Left Column */}
      <div style={leftColStyle}>
        <h2 style={headingStyle}>We’re Just a Message Away</h2>
        <p style={descStyle}>
          Have a project in mind, a question about our services, or simply want
          to say hello? Our team is here to listen, guide, and bring your ideas
          to life. Reach out today—let’s start creating something remarkable
          together.
        </p>
        <img src={img} alt="Contact Us" style={imgStyle} />
      </div>

      {/* Right Column - Form */}
      <div style={formWrapperStyle}>
        <h3 style={formHeadingStyle}>Fill the following details</h3>
        <form style={formStyle}>
          <div style={nameRowStyle}>
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
  gap: "50px",
  padding: "50px",
  fontFamily: "Poppins, sans-serif",
  flexWrap: "wrap", // ✅ allows stacking
};

const leftColStyle = {
  flex: "1 1 45%",
  minWidth: "300px",
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
  padding: "32px",
  borderRadius: "12px",
  minWidth: "300px",
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
  gap: "16px",
  flexWrap: "wrap", // ✅ stack on mobile
};

const inputStyle = {
  flex: 1,
  minWidth: "140px", // prevents inputs from collapsing
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
};

const buttonStyle = {
  width: "200px",
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
