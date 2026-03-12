import React from "react";
import logo from "../assets/images/Side icon.png";
import mail from "../assets/Footer/mail.png";
import linkedIn from "../assets/Footer/linkedin-in.png";
import call from "../assets/Footer/call.png";
import fb from "../assets/Footer/1.png";
import insta from "../assets/Footer/2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
        borderTop: "2px solid #e2e8f0",
        padding: "60px 0 0 0",
        fontFamily: "Poppins, sans-serif",
        color: "#334155",
        fontSize: 15,
        marginTop: 80,
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
        position: "relative"
      }}
    >
      {/* Top Row */}
      <div
        className="footer-top-row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 40px 50px 40px",
          gap: 60,
          flexWrap: "wrap",
        }}
      >
        {/* Left: Logo and Description */}
        <div
          className="footer-logo-desc"
          style={{
            flex: "1 1 300px",
            maxWidth: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <img
            src={logo}
            alt="AppXperts Logo"
            style={{
              width: "auto",
              maxWidth: 200,
              objectFit: "contain",
              display: "block",
              marginBottom: 20,
            }}
          />
          <div 
            className="footer-tagline" 
            style={{
              marginBottom: 12,
              fontSize: 13,
              fontWeight: 600,
              color: "#1a3fa6",
              letterSpacing: "0.5px"
            }}
          >
            We make IT possible, your IT xperts
          </div>
          <p
            style={{
              color: "#64748b",
              fontSize: 14,
              marginBottom: 20,
              textAlign: "left",
              lineHeight: 1.7,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1e293b", display: "block", marginBottom: 8 }}>
              Smart Solutions. Real Results.
            </span>
            We craft intelligent digital products and services that power
            business growth globally.
          </p>
          
          {/* Social Media Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
            <a 
              href="https://www.facebook.com/AppXes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 42, 
                height: 42, 
                borderRadius: '50%', 
                background: '#f1f5f9',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
            >
              <img src={fb} alt="Facebook" style={{ width: 38, height: 38 }} />
            </a>
            <a 
              href="https://www.instagram.com/appxperts.solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 42, 
                height: 42, 
                borderRadius: '50%', 
                background: '#f1f5f9',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
            >
              <img src={insta} alt="Instagram" style={{ width: 38, height: 38 }} />
            </a>
            <a 
              href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: 42, 
                height: 42, 
                borderRadius: '50%', 
                background: '#f1f5f9',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
            >
              <img src={linkedIn} alt="LinkedIn" style={{ width: 20, height: 20 }} />
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div
          className="footer-quick-links"
          style={{
            flex: "0 1 200px",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h4 style={{ 
            fontSize: 17, 
            fontWeight: 700, 
            marginBottom: 20,
            color: "#1e293b",
            letterSpacing: "0.3px"
          }}>
            Quick Links
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li>
              <a href="/" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Home</a>
            </li>
            <li>
              <a href="/about" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>About</a>
            </li>
            <li>
              <a href="/services" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Services</a>
            </li>
            <li>
              <a href="/products" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Products</a>
            </li>
            <li>
              <a href="/clients" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Clients</a>
            </li>
            <li>
              <a href="/career" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Career</a>
            </li>
            <li>
              <a href="/contact" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div
          className="footer-legal-links"
          style={{
            flex: "0 1 200px",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h4 style={{ 
            fontSize: 17, 
            fontWeight: 700, 
            marginBottom: 20,
            color: "#1e293b",
            letterSpacing: "0.3px"
          }}>
            Legal
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <li>
              <a href="/terms" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Privacy Policy</a>
            </li>
            <li>
              <a href="/refund" className="footer-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, transition: "color 0.3s ease" }}>Refund Policy</a>
            </li>
          </ul>
        </div>

        {/* Right: Get in Touch */}
        <div className="footer-get-in-touch" style={{ 
          fontFamily: "Poppins, sans-serif", 
          flex: "1 1 320px",
          maxWidth: 380
        }}>
          <h4 style={{ 
            fontSize: 17, 
            fontWeight: 700, 
            marginBottom: 20,
            color: "#1e293b",
            letterSpacing: "0.3px"
          }}>
            Get in Touch
          </h4>
          
          {/* Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* India */}
            <div style={{ 
              background: '#f8fafc',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <img src={call} alt="call" style={{ width: 18, height: 18 }} />
                <span style={{ fontWeight: 600, color: '#1a3fa6', fontSize: 14 }}>India</span>
              </div>
              <div style={{ color: '#475569', marginLeft: 28, fontSize: 14 }}>+91 88255 28905</div>
            </div>
            
            {/* Singapore */}
            <div style={{ 
              background: '#f8fafc',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <img src={call} alt="call" style={{ width: 18, height: 18 }} />
                <span style={{ fontWeight: 600, color: '#1a3fa6', fontSize: 14 }}>Singapore</span>
              </div>
              <div style={{ color: '#475569', marginLeft: 28, fontSize: 14 }}>+65 84399317</div>
            </div>
            
            {/* UAE */}
            <div style={{ 
              background: '#f8fafc',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <img src={call} alt="call" style={{ width: 18, height: 18 }} />
                <span style={{ fontWeight: 600, color: '#1a3fa6', fontSize: 14 }}>UAE</span>
              </div>
              <div style={{ color: '#475569', marginLeft: 28, fontSize: 14 }}>+971 508554043</div>
            </div>
            
            {/* Email */}
            <div style={{ 
              background: '#f8fafc',
              padding: '14px 16px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={mail} alt="mail" style={{ width: 18, height: 18 }} />
                <a href="mailto:info@appxes.com" style={{ color: '#1a3fa6', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
                  info@appxes.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        style={{
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc'
        }}
      >
        <div
          className="footer-bottom-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1240,
            margin: "0 auto",
            padding: "24px 40px",
            fontSize: 14,
            color: "#64748b",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ fontSize: "14px", color: "#475569" }}>
            © {currentYear} <span style={{ fontWeight: 600, color: "#1e293b" }}>AppXperts (Xperts)</span>. All rights reserved.
          </div>
          
          <a
            href="#top"
            className="back-to-top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              background: '#1a3fa6',
              color: 'white',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              border: 'none'
            }}
          >
            Back to Top <span style={{ fontSize: 16 }}>↑</span>
          </a>
        </div>
      </div>
      {/* Responsive Footer Styles */}
      <style>{`
        .footer-link:hover {
          color: #1a3fa6 !important;
          padding-left: 4px;
        }
        
        .social-icon:hover {
          background: #1a3fa6 !important;
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(26, 63, 166, 0.25);
        }
        
        .back-to-top:hover {
          background: #0f2d7a !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(26, 63, 166, 0.3);
        }
        
        @media (max-width: 1024px) {
          .footer-top-row {
            gap: 40px !important;
          }
          .footer-logo-desc {
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .footer-top-row {
            padding: 0 20px 40px 20px !important;
            gap: 32px !important;
          }
          .footer-bottom-row {
            padding: 20px 20px !important;
            justify-content: center !important;
            text-align: center;
          }
          .footer-logo-desc {
            align-items: center !important;
            text-align: center !important;
          }
          .footer-logo-desc p {
            text-align: center !important;
          }
          .footer-quick-links,
          .footer-legal-links {
            flex: 1 1 45% !important;
          }
          .footer-get-in-touch {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .footer-top-row {
            padding: 0 16px 32px 16px !important;
          }
          .footer-bottom-row {
            padding: 16px 16px !important;
            flex-direction: column;
            gap: 16px !important;
          }
          .footer-quick-links,
          .footer-legal-links {
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;