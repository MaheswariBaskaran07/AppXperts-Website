// ContactInfo.jsx
import logo from "../../assets/Client/Testimonials Card Bg.png";
import mail from "../../assets/Footer/mail.png";
import linkedIn from "../../assets/Footer/linkedin-in.png";
import call from "../../assets/Footer/call.png";
import fb from "../../assets/Footer/1.png";
import insta from "../../assets/Footer/2.png";

const ContactInfo = () => {
  const locations = [
    {
      name: "India",
      phone: "+91 88255 28905",
      bg: "linear-gradient(135deg,#e0f7fa,#b2ebf2)",
    },
    {
      name: "Dubai",
      phone: "+971 508554043",
      bg: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
    },
    {
      name: "Singapore",
      phone: "+65 84399317",
      bg: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
    },
  ];

  return (
    <section
      className="contact-section"
      style={{
        width: "100%",
        padding: "48px 18px",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* background image */}
      <div className="contact-bg">
        <img src={logo} alt="bg" />
      </div>

      <div className="contact-wrap">
        <h2 className="contact-title">Contact Information</h2>

        {/* Top: three location cards */}
        <div className="contact-grid">
          {locations.map((loc) => (
            <div key={loc.name} className="contact-card" style={{ ["--card-bg"]: loc.bg }}>
              <h3 className="contact-card-title">{loc.name}</h3>

              <div className="contact-label">Phone</div>
              <div className="contact-row">
                <img src={call} alt="call" className="contact-icon" />
                <span className="contact-text">{loc.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: common card with Gmail and socials */}
        <div className="contact-bottom">
          <div className="contact-email">
            <img src={mail} alt="mail" className="contact-mail-icon" />
            <div>
              <div className="contact-email-title">General Enquiries</div>
              <a href="mailto:info@appxes.com" className="contact-email-link">info@appxes.com</a>
            </div>
          </div>

          <div className="contact-socials">
            <div className="contact-follow">Follow Us</div>

            <a href="https://www.facebook.com/AppXes" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
              <img style={{ width: "48px", height: "48px" }} src={fb} alt="fb" />
            </a>

            <a href="https://www.instagram.com/appxperts.solutions" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
              <img style={{ width: "48px", height: "48px" }} src={insta} alt="insta" />
            </a>

            <a href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <img style={{ width: "24px", height: "24px" }} src={linkedIn} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Nice CSS for layout + responsive */}
      <style>{`
        /* page background -> stronger blue gradient */
        .contact-section {
          background: linear-gradient(180deg,  #0f76ff  10%,  #2ecbfa 100%);
          color: #000000;
          padding: 36px 18px;
        }

        .contact-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          z-index: 0;
          opacity: 0.06;
          pointer-events: none;
        }
        .contact-bg img { width:100%; height:100%; object-fit:cover; filter: saturate(1.05) contrast(0.98); }

        .contact-wrap {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 8px 12px;
        }

        .contact-title {
          font-size: 30px;
          font-weight: 800;
          margin: 0;
          text-align: center;
          color: #042a4b;
          letter-spacing: -0.2px;
        }
        .contact-title:after{
          content: "";
          display: block;
          height: 6px;
          width: 72px;
          margin: 12px auto 0;
          border-radius: 6px;
          background: linear-gradient(90deg,#2ecbfa,#ffffff);
          box-shadow: 0 8px 18px rgba(15,118,255,0.12);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          align-items: stretch;
        }

        /* compact card with consistent blue tint */
        .contact-card {
          padding: 14px 16px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,0.94), rgba(238,249,255,0.88));
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 10px 22px rgba(8,56,120,0.06);
          transition: transform .16s ease, box-shadow .16s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100px;
          overflow: hidden;
        }
        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(8,56,120,0.10);
        }

        .contact-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #042a4b;
          margin: 0 0 8px 0;
        }

        .contact-label {
          font-weight: 600;
          font-size: 12px;
          color: #35546e;
          margin-bottom: 6px;
        }

        .contact-row {
          display:flex;
          align-items:center;
          gap:8px;
          color:#08304f;
          font-size:13px;
        }
        .contact-icon {
          width:14px;
          height:14px;
          opacity:0.95;
          filter: none;
        }
        .contact-text {
          color:#0b63f2;
          font-weight:600;
          font-size:13px;
        }

        /* bottom common card: match cards but elongated and aligned */
        .contact-bottom {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(240,249,255,0.96));
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 12px 28px rgba(11,37,70,0.06);
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          border: 1px solid rgba(15,118,255,0.06);
        }

        .contact-email { display:flex; gap:12px; align-items:center; min-width: 240px; }
        .contact-mail-icon { width:22px; height:22px; }
        .contact-email-title { font-size:14px; font-weight:700; color:#042a4b; }
        .contact-email-link { color:#0f76ff; font-size:13px; text-decoration:none; display:block; margin-top:2px; font-weight:600; }

        .contact-socials { display:flex; gap:12px; align-items:center; justify-self: end; }

        .contact-follow { font-weight:700; color:#0f76ff; margin-right:8px; font-size:13px; }

        /* circular social buttons slightly smaller to match compact layout */
        .social-btn {
          width:40px;
          height:40px;
          border-radius:50%;
          background: #fff;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          box-shadow: 0 8px 18px rgba(11,37,70,0.06);
          transition: transform .14s ease, box-shadow .14s ease, background .14s ease;
          border: 1px solid rgba(15,118,255,0.07);
        }
        .social-btn img { width:16px; height:16px; display:block; opacity:0.95; }

        .social-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(15,118,255,0.12);
          background: linear-gradient(180deg,#fff,#f3f8ff);
        }

        /* responsive tweaks */
        @media (max-width: 900px) {
          .contact-wrap { padding: 6px; }
          .contact-title { font-size: 24px; }
          .contact-bottom { padding: 10px 12px; }
          .contact-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px; }
        }
        @media (max-width: 560px) {
          .contact-section { padding: 24px 12px; }
          .contact-title { font-size: 20px; }
          .social-btn { width:36px; height:36px; }
          .contact-card { padding: 12px; min-height: 90px; }
          .contact-bottom { padding: 10px; gap:8px; }
        }
      `}</style>
    </section>
  );
};

// Shared Styles
const cardStyle = (bg) => ({
  padding: "12px",
  borderRadius: "12px",
  background: bg,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  transition: "transform 0.18s ease, box-shadow 0.18s ease",
});

const titleStyle = { fontSize: 18, fontWeight: 600, color: "#1a1a1a" };
const infoRow = { display: "flex", alignItems: "center", gap: 8 };
const iconStyle = { width: 14, height: 14 };
const textStyle = { fontSize: 13, color: "#1a1a1a" };
const labelStyle = { fontWeight: 600, fontSize: 13, marginTop: 6, color: "#374151" };

const socialStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "#fff",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

export default ContactInfo;
