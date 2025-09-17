import { useState } from "react";
import Blog from "../../assets/Home/Blog.png";
import mindGate from "../../assets/Home/Group 389.png";
import erp from "../../assets/Home/erp.png";
import TS from "../../assets/Home/skills/typescript.png";
import ReactJS from "../../assets/Home/skills/atom.png";
import NodeJS from "../../assets/Home/skills/node-js (1).png";
import Python from "../../assets/Home/skills/python.png";
import Flutter from "../../assets/Home/skills/flutter (1).png";
import Angular from "../../assets/Home/skills/programing.png";
import UIUX from "../../assets/Home/skills/ui-design.png";
import JS from "../../assets/Home/skills/java-script (1).png";
import AI from "../../assets/Home/skills/generative.png";
import Java from "../../assets/Home/skills/Frame (2) (1).png";
import HTML from "../../assets/Home/skills/browser.png";
import CSS from "../../assets/Home/skills/css.svg";
import native from "../../assets/Home/skills/react native.svg";
import BookNowPopup from "../BookNowPopup";
import dot from "../../assets/Home/skills/net.svg";
import "./ClientSays.css";

const testimonials = [
  {
    company: "Mindgate Solutions",
    text: "AppXperts provided skilled professionals who integrated smoothly with our team, ensuring project success with reliability and expertise.",
    author: "Vaidevi | Manager",
    logo: mindGate,
  },
  {
    company: "Celeste Birch",
    text: "AppXperts delivered talented professionals who seamlessly aligned with our workflows, bringing consistency, expertise, and dedication to achieve project success.",
    author: "Dennis | Founder",
    logo: erp,
  },
];

const ClientsSay = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="clients-section">
        {/* Title + Description */}
        <div className="clients-header">
          <h2>What Our Clients Are Saying</h2>
          <p>
            Our clients are at the heart of everything we do. <br />
            Each testimonial reflects our commitment to delivering value. <br />
            From concept to execution, we walk the journey with them. <br />
            Read what they have to say about working with us.
          </p>
        </div>

        {/* Testimonials + Image */}
        <div className="clients-content">
          {/* Testimonials */}
          <div className="clients-testimonials">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-text">
                  <div className="company">{t.company}</div>
                  <div className="text">{t.text}</div>
                  <div className="author">{t.author}</div>
                </div>
                <img src={t.logo} alt="Company Logo" />
              </div>
            ))}
          </div>

          {/* Blog Image */}
          <div className="clients-image">
            <img src={Blog} alt="Clients Illustration" />
          </div>
        </div>
      </section>

      {/* --- Skills Floating Section --- */}
      <section
        style={{
          minHeight: "420px",
          background: "linear-gradient(90deg, #def7ff 0%, #35cfff 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "50px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Skill Bubbles */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {[
            {
              label: "React JS",
              color: "#61dafb",
              top: 8,
              left: "10%",
              icon: ReactJS,
            },
            {
              label: "Flutter",
              color: "#42a5f5",
              top: 32,
              left: "20%",
              icon: Flutter,
            },
            {
              label: "Node JS",
              color: "#8cc84b",
              top: 60,
              left: "6%",
              icon: NodeJS,
            },
            {
              label: "Python",
              color: "#3776ab",
              top: 18,
              left: "30%",
              icon: Python,
            },
            { label: "AI", color: "#512bd4", top: 65, left: "38%", icon: AI },
            {
              label: "Angular",
              color: "#dd0031",
              top: 70,
              left: "28%",
              icon: Angular,
            },
            { label: "CSS", color: "#2965f1", top: 65, left: "15%", icon: CSS },
            {
              label: "React Native",
              color: "#00d8ff",
              top: 50,
              right: "35%",
              icon: native,
            },
            {
              label: ".NET",
              color: "#512bd4",
              top: 14,
              right: "10%",
              icon: dot,
            },
            {
              label: "HTML",
              color: "#e34c26",
              top: 40,
              right: "2%",
              icon: HTML,
            },
            { label: "JS", color: "#f7df1e", top: 68, right: "6%", icon: JS },
            {
              label: "UI/UX",
              color: "#ffb300",
              top: 30,
              right: "18%",
              icon: UIUX,
            },
            {
              label: "TypeScript",
              color: "#3178c6",
              top: 60,
              right: "24%",
              icon: TS,
            },
            {
              label: "Java",
              color: "#e76f00",
              top: 80,
              right: "12%",
              icon: Java,
            },
          ].map((skill, index) => (
            <div
              key={skill.label}
              className={`bubble-wrapper bubble-${index}`} // ✅ added classes for responsive control
              style={{
                position: "absolute",
                top: `${skill.top}%`,
                left: skill.left,
                right: skill.right,
                animation: `floatAnimX${index % 6} ${
                  8 + index * 2
                }s ease-in-out infinite`,
              }}
            >
              <div className="bubble">
                <img src={skill.icon} alt={skill.label} />
                {skill.label}
              </div>
            </div>
          ))}

          {/* Animations + Styling */}
          <style>
            {`
        .bubble {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(173,216,230,0.25) 70%);
          box-shadow: inset -5px -5px 15px rgba(255,255,255,0.5), 0 0 15px rgba(135,206,250,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 13px;
          color: #222;
          user-select: none;
          gap: 4px;
          border: none; /* ✅ border removed */
        }
        .bubble img {
          width: 28px;
          height: 28px;
        }

        /* ✅ Mobile responsive size */
       @media (max-width: 768px) {
  .bubble-wrapper {
    margin-left: 10px;
    margin-right: 10px;
  }

  /* ✅ Restrict bubble area height ku */
  .bubble-container {
    height: 250px; /* bubbles only top area occupy pannum */
    overflow: hidden;
  }

  /* ✅ bubble size reduce */
  .bubble {
    width: 65px;
    height: 65px;
    font-size: 11px;
    gap: 3px;
  }

  .bubble img {
    width: 20px;
    height: 20px;
  }

  /* ✅ show only first 6 bubbles */
  .bubble-wrapper:nth-child(n+10) {
    display: none !important;
  }
}


        @keyframes floatAnimX0 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(20px, -30px); }
          50%  { transform: translate(-15px, -60px); }
          75%  { transform: translate(10px, -30px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatAnimX1 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-25px, -40px); }
          50%  { transform: translate(20px, -70px); }
          75%  { transform: translate(-10px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatAnimX2 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(15px, -20px); }
          50%  { transform: translate(-20px, -60px); }
          75%  { transform: translate(25px, -30px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatAnimX3 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-20px, -30px); }
          50%  { transform: translate(20px, -80px); }
          75%  { transform: translate(-15px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatAnimX4 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(25px, -40px); }
          50%  { transform: translate(-20px, -80px); }
          75%  { transform: translate(15px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes floatAnimX5 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-30px, -50px); }
          50%  { transform: translate(25px, -90px); }
          75%  { transform: translate(-20px, -60px); }
          100% { transform: translate(0, 0); }
        }
      `}
          </style>
        </div>

        {/* Section Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            marginTop: 0,
            maxWidth: 500,
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
            Let’s build something great.
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            Your idea, our craft.
          </p>
          <button onClick={() => setIsOpen(true)} className="submit-button">
            Book a meeting →
          </button>
          <BookNowPopup open={isOpen} setOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default ClientsSay;
