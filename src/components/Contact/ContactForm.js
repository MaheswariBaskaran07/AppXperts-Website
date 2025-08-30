import img from "../../assets/Contact/Frame 1000009048.png";

const ContactForm = () => {
  return (
    <section style={{ display: "flex", alignItems: "center", gap: "50px", padding: "50px", fontFamily: "Poppins" }}>
      
      {/* Left Column */}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>
          We’re Just a Message Away
        </h2>
        <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px" }}>
          Have a project in mind, a question about our services, or simply want to say hello? Our team is here to listen, guide, and bring your ideas to life. Reach out today—let’s start creating something remarkable together.
        </p>
        <img src={img} alt="Contact Us" style={{ width: "100%", maxWidth: "450px" }} />
      </div>

      {/* Right Column - Form */}
      <div style={{ flex: 1, backgroundColor: "#f9fafb", padding: "32px", borderRadius: "12px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>Fill the following details</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Phone Number" style={inputStyle} />
          <input type="text" placeholder="Subject" style={inputStyle} />
          <textarea placeholder="Message" rows={4} style={{ ...inputStyle, resize: "none" }} />
          <button type="submit" style={{ width: 200 }} className="submit-button">Submit</button>
        </form>
      </div>

    </section>
  );
};

// Styles
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
};

export default ContactForm;
