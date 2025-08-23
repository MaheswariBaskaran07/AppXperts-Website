import React from "react";
import logo from "../assets/images/AX-LOGO.png";
import mail from "../assets/Footer/mail.png";
import linkedIn from "../assets/Footer/linkedin-in.png";
import location from "../assets/Footer/location_on.png";
import call from "../assets/Footer/call.png";
import fb from "../assets/Footer/1.png";
import insta from "../assets/Footer/2.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #fff 0%, #b5e2f0ff 70%)",
        borderTop: "1px solid #e3e8ee",
        padding: "40px 0 0 0",
        fontFamily: "Poppins",
        color: "#222",
        fontSize: 15,
        marginTop: 60,
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px 32px 40px",
          borderBottom: "1px solid #e3e8ee",
          flexWrap: "wrap",
          
        }}
      >
        {/* Left: Logo and Description */}
        <div
          style={{
            flex: 1,
            minWidth: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontFamily: "Poppins",
          }}
        >
          <img
            src={logo}
            alt="AppXperts Logo"
            style={{
              width: "auto",
              maxWidth: 220,
              objectFit: "contain",
              display: "block",
              marginBottom: 14,
            }}
          />
          <p
            style={{
              color: "#555",
              fontSize: 14,
              marginBottom: 8,
              textAlign: "justify",
              maxWidth: 220,
              lineHeight: 1.6,
              fontFamily: "Poppins",
            }}
          >
            <span style={{ fontSize:16, fontWeight: 400, color: "#222" }}>
              Smart Solutions. Real Results.
            </span>
            <br />
            We craft intelligent digital products and services that power
            business growth globally.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div
          style={{
            flex: 2,
            minWidth: 320,
            display: "flex",
            justifyContent: "center",
            
            fontFamily: "Poppins",
          }}
        >
          <div>
            <h4 style={{ fontSize:20, fontWeight: 400, marginBottom: 10 }}>Quick Links</h4>
            <div style={{ display: "flex", gap: 40 }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#1a3fa6",
                  fontWeight: 400,
                  fontSize:16,
                }}
              >
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Home</a>
                </li>
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>About</a>
                </li>
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Services</a>
                </li>
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Products</a>
                </li>
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Clients</a>
                </li>
                  <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Career</a>
                </li>
                <li>
                  <a href="#" style={{ color: "#1a3fa6", textDecoration: "none" }}>Contact Us</a>
                </li>
              </ul>
            
            </div>
          </div>
        </div>

        {/* Right: Get in Touch - Split by Country */}
        <div style={{ flex: 2.5, minWidth: 260 }}>
          <h4 style={{ fontSize:20, fontWeight: 400, marginBottom: 10 }}>Get in Touch</h4>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'nowrap', minWidth: 540 }}>
            {/* India */}
            <div style={{ minWidth: 180, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <img src={call} alt="call" style={{ width: 20 }} />
                <span style={{ fontWeight: 400, color: '#1a3fa6' }}>India</span>
              </div>
              <div style={{ color: '#222', marginBottom: 4, marginLeft: 28 }}>+91 88255 28905</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginLeft: 0 }}>
                <img src={location} alt="location" style={{ width: 20, marginTop: 2 }} />
                <span style={{ color: '#555' }}>
                  No 32, 2nd Floor, Swathika Flats,<br />
                  Rukmani Nagar, Perumbakkam, Chennai - 600100
                </span>
              </div>
            </div>
            {/* Singapore */}
            <div style={{ minWidth: 180, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <img src={call} alt="call" style={{ width: 20 }} />
                <span style={{ fontWeight: 400, color: '#1a3fa6' }}>Singapore</span>
              </div>
              <div style={{ color: '#222', marginLeft: 28 }}>+65 84399317</div>
            </div>
            {/* UAE - now in same row */}
            <div style={{ minWidth: 180, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <img src={call} alt="call" style={{ width: 20 }} />
                <span style={{ fontWeight: 400, color: '#1a3fa6' }}>UAE</span>
              </div>
              <div style={{ color: '#222', marginLeft: 28 }}>+971 508554043</div>
            </div>
          </div>
          {/* Common Mail */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
            <img src={mail} alt="mail" style={{ width: 20 }} />
            <span style={{ color: '#222' }}>info@appxes.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 40px 24px 40px",
          fontSize: 14,
          color: "#888",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>© 2025 AppXperts. All rights reserved.</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
       <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={fb} alt="fb" style={{ width: 40, height: 40 }} /></a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={insta} alt="insta" style={{ width: 40, height: 40 }} /></a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={linkedIn} alt="linkedin" style={{ width: 18, height: 18 }} /></a>
     
        </div>
        <a
          href="#top"
          style={{
            background: 'linear-gradient(180deg, #1a3fa6 60%, #2ecbfa 100%)',
            color: "#fff",
            padding: "8px 28px",
            borderRadius: 22,
            fontWeight: 400,
            fontSize: 15,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(26,63,166,0.08)",
            marginLeft: 18,
          }}
        >
          Back to Top <span style={{ fontSize: 18, marginLeft: 6 }}>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
