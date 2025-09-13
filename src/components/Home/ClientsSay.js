import {useState} from "react";
import Blog from "../../assets/Home/Blog.png";
import mindGate from "../../assets/Home/Group 389.png";
import erp from "../../assets/Home/erp.png"
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

const testimonials = [
  {
    company: "Mindgate Solutions",
    text: "AppXperts provided skilled professionals who integrated smoothly with our team, ensuring project success with reliability and expertise.",
    author: "Vaidevi | Manager",
    logo: mindGate
  },
  {
    company: "Celeste Birch",
    text: "AppXperts delivered talented professionals who seamlessly aligned with our workflows, bringing consistency, expertise, and dedication to achieve project success.",
    author: "Dennis | Founder",
    logo: erp
  }
];

const ClientsSay = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <><section
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(120deg, #f8fafc 65%, #eaf6fb 100%)",
        padding: "80px 60px",
        fontFamily: "Poppins",
        gap: "48px"
      }}
    >
      {/* Title and paragraph spread across top */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: 10 }}>
        <h2
          style={{
            fontSize: 60,
            fontWeight: 200,
            color: "#222",
            lineHeight: 1.2,
            minWidth: 400,
            maxWidth: 600,
            margin: 0,
            textAlign: "left"
          }}
        >
          What Our Clients Are Saying
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#444",
            lineHeight: 1.7,
            margin: 0,
            textAlign: "left",
            maxWidth: 480,
            flex: 1
          }}
        >
          Our clients are at the heart of everything we do. <br />
          Each testimonial reflects our commitment to delivering value. <br />
          From concept to execution, we walk the journey with them. <br />
          Read what they have to say about working with us.
        </p>
      </div>

      {/* Testimonials and blog image in same row */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 48 }}>
        {/* Testimonials */}
        <div style={{ flex: 1, maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                padding: "26px 28px",
                display: "flex",
                alignItems: "center",
                gap: 22
              }}
            >
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 28, color: "#1a3fa6", marginBottom: 8 }}>
                  {t.company}
                </div>
                <div style={{ fontSize: 17, color: "#222", marginBottom: 12 }}>
                  {t.text}
                </div>
                <div style={{ fontSize: 12, color: "#666", fontWeight: 500 }}>{t.author}</div>
              </div>
              <img
                src={t.logo}
                alt="Company Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  objectFit: "contain",
                  background: "#f8fafc",
                  boxShadow: "0 2px 8px #1a3fa611"
                }} />
            </div>
          ))}
        </div>
        {/* Blog image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={Blog}
            alt="Clients Illustration"
            style={{
              width: 480,
              maxWidth: "100%",
              borderRadius: 22,
              boxShadow: "0 4px 32px #1a3fa611",
              background: "#fff",
              padding: 8
            }} />
        </div>
      </div>
    </section>
    
    {/* --- Skills Floating Section --- */}
    <section
      style={{
        minHeight: "420px",
        background: "linear-gradient(90deg, #fff 40%, #97e5fd 100%)",
        padding: "0",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "50px",
        position: "relative"
      }}
    >
      {/* Floating Skills Bubbles */}
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
        {/* Floating bubbles for all skills with icons */}
        {[
          { label: "React JS", color: "#61dafb", top: 8, left: "10%", icon: ReactJS },
          { label: "Flutter", color: "#42a5f5", top: 32, left: "20%", icon: Flutter },
          { label: "Node JS", color: "#8cc84b", top: 60, left: "6%", icon: NodeJS },
          { label: "Python", color: "#3776ab", top: 18, left: "30%", icon: Python },
          { label: "AI", color: "#512bd4", top: 65, left: "38%", icon: AI },
          { label: "Angular", color: "#dd0031", top: 70, left: "28%", icon: Angular },
          { label: "CSS", color: "#6db33f", top: 65, left: "15%", icon: CSS },
          { label: "React Native", color: "#00d8ff", top: 50, right: "35%", icon: native },
          { label: ".NET", color: "#2965f1", top: 14, right: "10%", icon: CSS },
          { label: "HTML", color: "#e34c26", top: 40, right: "2%", icon: HTML },
          { label: "JS", color: "#f7df1e", top: 68, right: "6%", icon: JS },
          { label: "UI/UX", color: "#ffb300", top: 30, right: "18%", icon: UIUX },
          { label: "TypeScript", color: "#3178c6", top: 60, right: "24%", icon: TS },
          { label: "Java", color: "#e76f00", top: 80, right: "12%", icon: Java },
        ].map((skill, i) => (
          <div
            key={skill.label}
            style={{
              position: "absolute",
              top: `${skill.top}%`,
              left: skill.left,
              right: skill.right,
              animation: `floatAnimX${i % 6} ${8 + (i % 6) * 2}s ease-in-out infinite`,
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), ${skill.color}33 40%, ${skill.color}22 70%, ${skill.color}11 100%)`,
                boxShadow:
                  "inset -5px -5px 15px rgba(255,255,255,0.6), 0 0 15px rgba(135,206,250,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                fontWeight: 600,
                fontSize: "20px",
                color: "#222",
                letterSpacing: 1,
                border: `2.5px solid ${skill.color}`,
                pointerEvents: "auto",
                userSelect: "none",
                gap: "8px"
              }}
            >
              <img src={skill.icon} alt={skill.label} style={{ width: "38px", height: "38px", marginBottom: "2px" }} />
              {skill.label}
            </div>
          </div>
        ))}
        <style>
          {`
            @keyframes floatAnimX0 {
              0%   { transform: translate(0, 0) scale(1); }
              25%  { transform: translate(20px, -40px) scale(1.05); }
              50%  { transform: translate(-15px, -60px) scale(0.95); }
              75%  { transform: translate(10px, -40px) scale(1.1); }
              100% { transform: translate(0, 0) scale(1); }
            }
            @keyframes floatAnimX1 {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(-25px, -50px); }
              50%  { transform: translate(20px, -70px); }
              75%  { transform: translate(-10px, -40px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes floatAnimX2 {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(15px, -30px); }
              50%  { transform: translate(-20px, -60px); }
              75%  { transform: translate(25px, -40px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes floatAnimX3 {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(-20px, -40px); }
              50%  { transform: translate(20px, -80px); }
              75%  { transform: translate(-15px, -50px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes floatAnimX4 {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(25px, -60px); }
              50%  { transform: translate(-20px, -80px); }
              75%  { transform: translate(15px, -50px); }
              100% { transform: translate(0, 0); }
            }
            @keyframes floatAnimX5 {
              0%   { transform: translate(0, 0); }
              25%  { transform: translate(-30px, -70px); }
              50%  { transform: translate(25px, -100px); }
              75%  { transform: translate(-20px, -60px); }
              100% { transform: translate(0, 0); }
            }
          `}
        </style>
      </div>

      {/* Section Content */}
      <div style={{ position: "relative", zIndex: 3, margin: "0 auto", marginTop: 80, maxWidth: 500 }}>
        <h2>Let’s build something great.</h2>
        <p>Your idea, our craft.</p>
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
