// ContactInfo.jsx
import logo from "../../assets/Client/Testimonials Card Bg.png";
import mail from "../../assets/Footer/mail.png";
import linkedIn from "../../assets/Footer/linkedin-in.png";
import call from "../../assets/Footer/call.png";
import fb from "../../assets/Footer/1.png";
import insta from "../../assets/Footer/2.png";

const ContactInfo = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "32px 4px",
        fontFamily: "Poppins",
        position: "relative",
        background: "linear-gradient(135deg, #f8fdff 0%, #1a8fff 100%)",
        boxSizing: "border-box"
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <img
          src={logo}
          alt="bg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#fff",
          borderRadius: "12px",
          padding: "18px 8px",
          maxWidth: "1100px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 600,
            margin: 0,
            textAlign: "center",
            color: "#1a1a1a",
          }}
        >
          Contact Information
        </h2>

        {/* Grid for locations */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "12px",
          }}
        >
          {/* India */}
          <div style={cardStyle("linear-gradient(135deg,#e0f7fa,#b2ebf2)")}>
            <h3 style={titleStyle}>India</h3>
            <div style={infoRow}>
              <img src={call} alt="call" style={iconStyle} />
              <span style={textStyle}>+91 88255 28905</span>
            </div>
            <div style={labelStyle}>Email</div>
            <div style={infoRow}>
              <img src={mail} alt="mail" style={iconStyle} />
              <span style={textStyle}>info@appxes.com</span>
            </div>
            <div style={labelStyle}>Socials</div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.facebook.com/AppXes" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={fb} alt="fb" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.instagram.com/appxperts.solutions" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={insta} alt="insta" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={linkedIn} alt="linkedin" style={{ width: 20, height: 20 }} />
              </a>
            </div>
          </div>

          {/* Dubai */}
          <div style={cardStyle("linear-gradient(135deg,#fce4ec,#f8bbd0)")}>
            <h3 style={titleStyle}>Dubai</h3>
            <div style={infoRow}>
              <img src={call} alt="call" style={iconStyle} />
              <span style={textStyle}>+971 508554043</span>
            </div>
             <div style={labelStyle}>Email</div>
            <div style={infoRow}>
              <img src={mail} alt="mail" style={iconStyle} />
              <span style={textStyle}>info@appxes.com</span>
            </div>
            <div style={labelStyle}>Socials</div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.facebook.com/AppXes" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={fb} alt="fb" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.instagram.com/appxperts.solutions" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={insta} alt="insta" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={linkedIn} alt="linkedin" style={{ width: 20, height: 20 }} />
              </a>
            </div>
          </div>

          {/* Singapore */}
          <div style={cardStyle("linear-gradient(135deg,#e3f2fd,#bbdefb)")}>
            <h3 style={titleStyle}>Singapore</h3>
            <div style={infoRow}>
              <img src={call} alt="call" style={iconStyle} />
              <span style={textStyle}>+65 84399317</span>
            </div>
             <div style={labelStyle}>Email</div>
            <div style={infoRow}>
              <img src={mail} alt="mail" style={iconStyle} />
              <span style={textStyle}>info@appxes.com</span>
            </div>
            <div style={labelStyle}>Socials</div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.facebook.com/AppXes" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={fb} alt="fb" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.instagram.com/appxperts.solutions" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={insta} alt="insta" style={{ width: 40, height: 40 }} />
              </a>
              <a href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" target="_blank" rel="noreferrer" style={socialStyle}>
                <img src={linkedIn} alt="linkedin" style={{ width: 20, height: 20 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Shared Styles
const cardStyle = (bg) => ({
  padding: "10px",
  borderRadius: "12px",
  background: bg,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
});

const titleStyle = { fontSize: "18px", fontWeight: 600, color: "#1a1a1a" };
const infoRow = { display: "flex", alignItems: "center", gap: 6 };
const iconStyle = { width: 14, height: 14 };
const textStyle = { fontSize: 13, color: "#1a1a1a" };
const labelStyle = { fontWeight: 500, fontSize: 13, marginTop: 6, color: "#374151" };

const socialStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#fff",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
};

export default ContactInfo;
