import React from 'react'
import logo from "../assets/images/AX-LOGO.png"
import mail from "../assets/Footer/mail.png"
import linkedIn from "../assets/Footer/linkedin-in.png"
import location from "../assets/Footer/location_on.png"
import call from "../assets/Footer/call.png"
import fb from "../assets/Footer/1.png"
import insta from "../assets/Footer/2.png"


const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(90deg, #f8fafc 60%, #eaf6fb 100%)",
      borderTop: "1px solid #e3e8ee",
      padding: "40px 0 0 0",
      fontFamily: "inherit",
      color: "#222",
      fontSize: 15,
      marginTop: 60
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 40px 32px 40px",
        borderBottom: "1px solid #e3e8ee"
      }}>
        {/* Left: Logo and Description */}
        <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
          <img 
            src={logo} 
            alt="AppXperts Logo" 
            style={{ 
              width: 'auto',
              maxWidth: 220,
              objectFit: 'contain',
              display: 'block',
              marginBottom: 14,
              marginLeft: 0
            }} 
          />
          <div style={{ color: '#555', fontSize: 14, marginBottom: 8, textAlign: 'justify', maxWidth: 220, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: '#222' }}>Smart Solutions. Real Results.</span><br />
            We craft intelligent digital products and services that power business growth globally.
          </div>
        </div>
        {/* Center: Quick Links */}
        <div style={{ flex: 2, minWidth: 320, display: 'flex', justifyContent: 'center', gap: 60 }}>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Quick Links</div>
            <div style={{ display: 'flex', gap: 40 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#1a3fa6', fontWeight: 500 }}>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>About</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Products</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Clients</a></li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#1a3fa6', fontWeight: 500 }}>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Career</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#" style={{ color: '#1a3fa6', textDecoration: 'none' }}>Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right: Get in Touch */}
        <div style={{ flex: 2, minWidth: 260 }}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Get in Touch</div>
          <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={call} alt="call" style={{ width: 20, verticalAlign: 'middle' }} />
            IND +91 88255 28905 | SG +65 84399317 | UAE +971 508554043
          </div>
          <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src={mail} alt="mail" style={{ width: 20, verticalAlign: 'middle' }} />
            info@appxes.com
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <img src={location} alt="location" style={{ width: 20, marginTop: 2 }} />
            <span>No 32, 2nd Floor, Swathika Flats,<br />Rukmani Nagar, Perumbakkam, Chennai - 600100</span>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '18px 40px 24px 40px',
        fontSize: 14,
        color: '#888'
      }}>
        <div>© 2025 AppXperts. All rights reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="#" aria-label="Facebook"><img src={fb} alt="fb" style={{ width: 32, height: 32, borderRadius: '50%', background: '#f2f6fa', padding: 4 }} /></a>
          <a href="#" aria-label="Instagram"><img src={insta} alt="insta" style={{ width: 32, height: 32, borderRadius: '50%', background: '#f2f6fa', padding: 4 }} /></a>
          <a href="#" aria-label="LinkedIn"><img src={linkedIn} alt="linkedin" style={{ width: 32, height: 32, borderRadius: '50%', background: '#f2f6fa', padding: 4 }} /></a>
        </div>
        <a href="#top" style={{
          background: 'linear-gradient(90deg, #1a3fa6 60%, #2ecbfa 100%)',
          color: '#fff',
          padding: '8px 28px',
          borderRadius: 22,
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(26,63,166,0.08)',
          marginLeft: 18
        }}>
          Back to Top <span style={{ fontSize: 18, marginLeft: 6 }}>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer