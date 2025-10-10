// ContactInfo.jsx
import logo from "../../assets/Client/Testimonials Card Bg.png";
import mail from "../../assets/Footer/mail.png";
import linkedIn from "../../assets/Footer/linkedin-in.png";
import call from "../../assets/Footer/call.png";
import fb from "../../assets/Footer/1.png";
import insta from "../../assets/Footer/2.png";
import India from "../../assets/Contact/world.png";
import Dubai from "../../assets/Contact/united-arab-emirates.png";
import Singapore from "../../assets/Contact/singapore.png";

const ContactInfo = () => {
  const locations = [
    { name: "India", phone: "+91 88255 28905", flag: India },
    { name: "Dubai", phone: "+971 508554043", flag: Dubai },
    { name: "Singapore", phone: "+65 84399317", flag: Singapore },
  ];

  return (
    <section className="contact-section">
      {/* background */}
      <div className="contact-bg">
        <img src={logo} alt="bg" />
      </div>

      <div className="contact-wrap">
        <h2 className="contact-title">Contact Information</h2>

        {/* cards */}
        <div className="contact-grid">
          {locations.map((loc) => (
            <div key={loc.name} className="contact-card">
              <div className="contact-card-content">
                <div className="contact-card-body">
                  <h3 className="contact-card-title">{loc.name}</h3>
                  <div className="contact-label">Phone</div>
                  <div className="contact-row">
                    <img src={call} alt="call" className="contact-icon" />
                    <span className="contact-text">{loc.phone}</span>
                  </div>
                </div>

                {/* circular flag on right */}
                <div className="contact-flag-circle">
                  <img src={loc.flag} alt={loc.name} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom mail/socials */}
        <div className="contact-bottom">
          <div className="contact-email">
            <img src={mail} alt="mail" className="contact-mail-icon" />
            <div>
              <div className="contact-email-title">General Enquiries</div>
              <a href="mailto:info@appxes.com" className="contact-email-link">
                info@appxes.com
              </a>
            </div>
          </div>

          <div className="contact-socials">
            <div className="contact-follow">Follow Us</div>

            <a
              href="https://www.facebook.com/AppXes"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Facebook"
            >
              <img style={{ width: "48px", height: "48px" }} src={fb} alt="fb" />
            </a>

            <a
              href="https://www.instagram.com/appxperts.solutions"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              <img style={{ width: "48px", height: "48px" }} src={insta} alt="insta" />
            </a>

            <a
              href="https://www.linkedin.com/company/appxperts-enterprise-solutions/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <img style={{ width: "24px", height: "24px" }} src={linkedIn} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .contact-section {
          background: linear-gradient(180deg, #0f76ff 10%, #2ecbfa 100%);
          padding: 36px 18px;
          position: relative;
          color: #000;
        }

        .contact-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          opacity: 0.06;
          pointer-events: none;
        }

        .contact-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-wrap {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-title {
          font-size: 30px;
          font-weight: 800;
          text-align: center;
          color: #042a4b;
        }

        .contact-title:after {
          content: "";
          display: block;
          height: 6px;
          width: 72px;
          margin: 12px auto 0;
          border-radius: 6px;
          background: linear-gradient(90deg, #2ecbfa, #ffffff);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .contact-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 18px;
          border: 1px solid rgba(15,118,255,0.08);
          box-shadow: 0 10px 22px rgba(8,56,120,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 30px rgba(8,56,120,0.12);
        }

        .contact-card-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-card-body {
          flex: 1;
        }

        .contact-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #042a4b;
        }

        .contact-label {
          font-weight: 600;
          font-size: 12px;
          color: #35546e;
          margin-bottom: 4px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .contact-icon {
          width: 14px;
          height: 14px;
        }

        .contact-text {
          color: #0b63f2;
          font-weight: 600;
          font-size: 13px;
        }

        /* circular flag on right */
        .contact-flag-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(15,118,255,0.2);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .contact-flag-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .contact-bottom {
          background: #ffffff;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 12px 28px rgba(11,37,70,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .contact-email {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-mail-icon {
          width: 22px;
          height: 22px;
        }

        .contact-email-title {
          font-size: 14px;
          font-weight: 700;
          color: #042a4b;
        }

        .contact-email-link {
          color: #0f76ff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-follow {
          font-weight: 700;
          color: #0f76ff;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 18px rgba(11,37,70,0.06);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(15,118,255,0.12);
        }

        @media (max-width: 600px) {
          .contact-flag-circle {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactInfo;
