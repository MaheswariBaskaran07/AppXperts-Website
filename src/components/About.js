import  { useEffect, useState } from "react";
import aboutBanner from "../assets/About/AboutBanner.png";
import image from '../assets/About/ERP.png';
import Quality from '../assets/About/Quality.png';
import Frame from '../assets/About/Frame.png';
import CEO from '../assets/About/AASIF.png';
import Flutter from '../assets/About/Joe.png';
import BackEndDev from '../assets/About/Rajeshwari.png';
import Maheswari  from '../assets/About/Maheshwari.png';
import Keerthana from '../assets/About/Maheshwari (1).png';
import Karthi from '../assets/About/Karthi.png';
import Prakash from '../assets/About/Prakash.png';
import Rabi from '../assets/About/Rabi.png';
import Karthika from '../assets/About/Resh.png';
import ved from "../assets/About/about.mp4";
import lamp from "../assets/Product/freepik--Lamps--inject-229.png"
import rope from "../assets/Product/rope.png";
import "../components/Products/lamp.css";
import { motion } from "framer-motion";
import people from "../assets/About/Group 2188.png";
import Roadmap from "./roadmap";

const About = () => {
  // Fix: Define slides array for team slider
  const slides = [
    { img: CEO,       title: "Mohammed Aasif",   role: "Founder & CEO",         about: "Leads strategy and delivery. Passionate about building products that scale and delight customers." },
    { img: Rabi,      title: "Mohammed Rabi",    role: "Backend Engineer",      about: "Designs APIs and services. Focus on reliability, performance and clean architecture." },
    { img: BackEndDev,title: "Rajeshwari",       role: "Backend Engineer",      about: "Database modeling and integrations. Loves solving complex data problems." },
    { img: Flutter,   title: "NagaJothika",      role: "Mobile Developer",      about: "Crafts smooth mobile experiences using Flutter and native capabilities." },
    { img: Maheswari, title: "Maheswari",        role: "Web Developer",         about: "Builds accessible, fast web apps with modern tooling and patterns." },
    { img: people,    title: "Fathima",          role: "Business Specialist",   about: "Bridges business goals and product execution with a customer-first approach." },
    { img: Karthi,    title: "Karthik",          role: "Web Developer",         about: "Frontend engineering, state management and design systems." },
    { img: Keerthana, title: "Keerthana",        role: "Web Developer",         about: "UI implementation and pixel-perfect layouts with responsive behavior." },
    { img: Karthika,  title: "Reshma",           role: "UI/UX Designer",        about: "Designs intuitive user journeys and clean visual interfaces." },
    { img: Prakash,   title: "Prakash",          role: "QA Engineer",           about: "Owns quality strategy, automation and release confidence." },
    { img: people,    title: "Karthika",         role: "Frontend Developer",    about: "Components, accessibility and performance optimization." },
    { img: people,    title: "Keerthana",        role: "Backend Developer",     about: "APIs, security and platform observability." },
  ];

  // Fix: aboutBadgeVisible for About Us badge animation
  const [aboutBadgeVisible, setAboutBadgeVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setAboutBadgeVisible(true), 400);
  }, []);
   const [lamp1On, setLamp1On] = useState(false);
  const [lamp2On, setLamp2On] = useState(false);

  // Handler to toggle both lamps at once
  const handleRopeClick = () => {
    setLamp1On((prev) => !prev);
    setLamp2On((prev) => !prev);
  };

  // Determine if both lamps are on
  const bothLampsOn = lamp1On && lamp2On;

  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setWhatWeDoVisible(true), 600);
  }, []);
  return (
    <>
    <div
      className="about-main"
      style={{
        position: "relative",
        textAlign: "center",
        padding: "40px 20px 100px", // 👈 less padding on top
        fontFamily: "Poppins, sans-serif",
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        background: bothLampsOn
          ? "radial-gradient(circle at 50% 0%, #ffe066 0%, #fff7b2 40%, #fffbe6 80%, #fff 100%)"
          : "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* 🔹 Lamps Row */}
      {/* Rope at top-right corner */}
     
    
          <div
        className="people-float"
        style={{
          position: "absolute",
          top: "-180px",
          right: "60px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={handleRopeClick}
      >
        <img
          src={rope}
          alt="Rope"
          className="product-rope-img"
          style={{ width: "200px", height: "700px", objectFit: "contain", userSelect: "none" }}
        />
      </div>
      {/* Responsive rope image styles */}
      <style>{`
        @media (max-width: 1100px) {
          .product-rope-img {
            width: 120px !important;
            height: 350px !important;
          }
          .people-float {
            top: -80px !important;
            right: 20px !important;
          }
        }
        @media (max-width: 700px) {
          .product-rope-img {
            position: static !important;
            width: 55px !important;
            height: 110px !important;
            margin: 0 auto !important;
            display: block !important;
            z-index: 100 !important;
          }
          .people-float {
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            width: 60px !important;
            height: auto !important;
            z-index: 10 !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}</style>

      <div
        className="about-lamps-row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "120px",
          top:"-30px",
          position: "relative",
          zIndex: 9
        }}
      >
        {/* Lamp 1 */}
        <motion.div
          className={`lamp-float ${lamp1On ? "lamp-on" : ""}`}
          style={{ position: "relative", width: "220px", height: "auto" }}
        >
          <img src={lamp} alt="Lamp1" style={{ width: "100%" }} />
          {lamp1On && (
            <>
              <div className="lamp-light-beam-left lamp-light-float"></div>
              <div className="lamp-light-beam-right lamp-light-float"></div>
            </>
          )}
        </motion.div>

        {/* Lamp 2 */}
        <motion.div
          className={`lamp-float ${lamp2On ? "lamp-on" : ""}`}
          style={{ position: "relative", width: "220px", height: "auto" }}
        >
          <img src={lamp} alt="Lamp2" style={{ width: "100%" }} />
          {lamp2On && (
            <>
              <div className="lamp-light-beam-left lamp-light-float"></div>
              <div className="lamp-light-beam-right lamp-light-float"></div>
            </>
          )}
        </motion.div>
      </div>
      {/* 🔹 Radial Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
  <div className="about-content" style={{ position: "relative", zIndex: 2, maxWidth: "1300px" }}>
        {/* Badge */}
        <span
          className="about-badge"
          style={{
            display: "block",
            background: 'linear-gradient(180deg, #46cff8ff 0%, #0d48eaff 100%)',
            color: "white",
            padding: "2px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "500",
            transform: `rotate(-20deg) translateY(${aboutBadgeVisible ? '0' : '-40px'})`,
            opacity: aboutBadgeVisible ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
            marginBottom: "-20px",
            /* Clamp the horizontal offset so it never pushes content beyond the viewport on small screens */
            marginLeft: "clamp(0px, 20vw, 290px)",
            width: "fit-content"
          }}
        >
          About Us
        </span>
        {/* Heading */}
        <h1
          className="about-heading"
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            top:"35px",
            color: "#000",
          }}
        >
          Innovating Tomorrow, Today.
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            maxWidth: "2100px",
            margin: "0 auto",
            lineHeight: "1.6",
            // background: "rgba(255, 255, 255, 0.38)",
            color: "#333",
            paddingBottom: "30px"
          }}
        >
          At AppXperts, we blend cutting-edge technology with innovative design
          to build software that powers your business growth. From custom
          applications to enterprise solutions, we help businesses digitally
          transform with confidence.
        </p>
      </div>
        <img
          src={people}
          alt="People"
          className="about-people-img"
          style={{
            position: "absolute",
            bottom: "0",
            top: "240px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1500px",
            zIndex: 1,
          }}
        />
    </div>
    <div
      className="about-who-row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        fontFamily: "Poppins, sans-serif",
        minHeight: "300px",
        // background: "#bcd7f1ff", // ✅ Solid light blue
      }}
    >
      {/* Left Column */}
      <div style={{ flex: 1, paddingRight: "40px", color: "#000" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          Who are we?
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px", textAlign: "justify" }}>
          AppXperts Enterprise Solutions is a Software Development company which offers next-generation IT Services that could empower your businesses to become self-reliant and sufficient. It’s what we do, and we do it well. We address our clients’ unique needs with a healthy mix of tried and true methods, and progressive, innovative technologies evinced by our team of expert software developers. We pride ourselves in our ability to turn the most complex business requirements into intuitive software solutions, empowering our clients with the tools they need to seamlessly support and enhance their business operations. Whether a project requires
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px", textAlign: "justify" }}>
          Whether it’s designing enterprise-grade systems or crafting elegant brand
          identities, our goal remains the same: to empower businesses with tech that
          works and design that speaks. We address our clients’ unique needs with a healthy mix of tried and true methods, and progressive, innovative technologies evinced by our team of expert software developers.
  </p>

        <button
          className="submit-button"
          onClick={() => window.location.href = "/services"} // Navigate to Services page
        >
          Read more →
        </button>
      </div>

      {/* Right Column */}
      <div style={{ flex: 1, textAlign: "center" }}>
      <div
          style={{
            width: "390px",
            height: "220px",
            borderRadius: "30% / 50%",
            overflow: "hidden",
            margin: "0 auto 20px",
            backgroundColor: "#000"
          }}
        >
          <video
            src={ved}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30% / 50%"
            }}
          />
        </div>

        <p style={{ fontSize: "14px", color: "#000" }}>
          AppXperts: We don’t just build digital products. We build experiences.
        </p>
      </div>
    </div>
    <div
      className="about-ideas-row"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 80px",
        background: "linear-gradient(to bottom right, #f9f9f9, #eaf1ff)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Left Section */}
        <div style={{ flex: 1.5, paddingRight: "40px" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Turning Ideas into <br /> Real-World Impact
          </h2>

          {/* Floating pill badge */}
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-45px",
              display: "inline-block",
              background: 'linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)',
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
              transform: `rotate(20deg)`,
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
              animation: 'floatY 2.2s ease-in-out infinite',
            }}
          >
            What we do?
            <style>
              {`
                @keyframes floatY {
                  0% { transform: rotate(20deg) translateY(0); }
                  50% { transform: rotate(20deg) translateY(-18px); }
                  100% { transform: rotate(20deg) translateY(0); }
                }
              `}
            </style>
          </span>
        </div>
        <div
          style={{
            position: "relative",
            background: `url(${image}) no-repeat center center / cover`,
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            minHeight: "370px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // push content to bottom
          }}
        >
          {/* Small Card at Bottom */}
         <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.7)",
              minWidth: "95px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#000000", margin: 0 }}>320+</h3>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>
              Projects Successfully
            </p>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>Delivered</p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.7)",
              minWidth: "95px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#000000", margin: 0 }}>92.1%</h3>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>
              Client Satisfaction
            </p>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>Rate</p>
          </div>
        </div>
        </div>
      </div>

      {/* Right Section */}
        <div style={{ flex: 1, paddingLeft: "40px" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "40px" }}>
            <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          At AppXperts, we bridge creativity with functionality. Whether you’re
          launching a product, building a platform, or crafting your brand story
          — we help you bring your vision to life with precision, clarity, and
          style.
        </p>
          </div>
        

        {/* Feature Boxes */}
        <div
          style={{
            background: "#dadbe2ff",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Quality} // 👉 replace with your image path
            alt="icon"
            style={{
                width: "35px",   // same size as fontSize before
                height: "35px",
                marginRight: "12px",
                marginBottom: "35px", // 👈 adjust for better alignment
              }}
          />
          <div>
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Innovative Builds
            </h4>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Building the apps and infrastructure that your business runs on.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#dadbe2ff",
            borderRadius: "12px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Quality} // 👉 replace with your image path
            alt="icon"
            style={{
              width: "35px",   // same size as fontSize before
              height: "35px",
              marginRight: "12px",
              marginBottom: "15px", // 👈 adjust for better alignment
            }}
          />
          <div>
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Seamless Execution
            </h4>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Delivering your vision with precision and speed.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="about-why-row"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#111",
        }}
      >
        Why Choose Us?
      </h2>
      <p
        style={{
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 50px auto",
        }}
      >
        At AppXperts, we don’t just build digital products — we craft solutions
        that <br/>matter. Here’s why businesses trust us:
      </p>

      {/* Features */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          textAlign: "left",
          marginBottom: "30px",
        }}
      >
        {[
          {
            title: "End-to-End Expertise",
            desc: "From branding and UI/UX to full-stack development and marketing — we handle it all under one roof.",
          },
          {
            title: "Customized Solutions",
            desc: "We tailor every project to your specific business needs, not a one-size-fits-all template.",
          },
          {
            title: "Creative + Technical Blend",
            desc: "Our team merges creative vision with engineering precision, ensuring aesthetic yet functional outcomes.",
          },
          {
            title: "On-Time, On-Point Delivery",
            desc: "We value your time. That’s why we meet deadlines with quality intact, every single time.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "15px",
              padding: "20px",
              border: "1px solid #eee",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)")
            }
          >
            <img
              src={Quality}
              alt="icon"
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
            />
            <div>
              <p style={{ fontWeight: "600", fontSize: "20px", margin: "0 0 8px" }}>
                {item.title}
              </p>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <img
          src={Frame}
          alt="Why Choose Us"
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
<Roadmap/>
    <div
      className="about-team-row"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #eef5f9)",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "4px 12px",
          marginBottom: "10px",
          marginLeft: "-400px",
          animation: "wiggleTilt 2.2s ease-in-out infinite",
        }}
      >
        Our Team
        <style>
          {`
            @keyframes wiggleTilt {
              0% { transform: rotate(-20deg) translateY(30px) scale(1); }
              50% { transform: rotate(-15deg) translateY(28px) scale(1.04); }
              100% { transform: rotate(-20deg) translateY(30px) scale(1); }
            }
          `}
        </style>
      </span>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          margin: "10px 0 40px 0",
          color: "#222",
        }}
      >
        The Brains Behind <br /> the Build
      </h2>

      {/* Team Grid (6 per row on desktop) */}
      <div className="team-grid">
        {slides.map((m, i) => (
          <div
            className="team-card"
            key={i}
            tabIndex={0}
            aria-label={`${m.title} - ${m.role}`}
            onClick={(e) => e.currentTarget.classList.toggle("is-flipped")}
          >
            <div className="card-inner">
              {/* Front */}
              <div className="card-face card-front">
                <img className="team-photo" src={m.img} alt={m.title} />
                <div className="team-info">
                  <h3 className="team-name">{m.title}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              </div>
              {/* Back */}
              <div className="card-face card-back">
                <h3 className="team-name">{m.title}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-about">{m.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid + flip styles */}
      <style>{`
        .team-grid {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 20px;
        }

        /* Card container provides height via aspect-ratio */
        .team-card {
          background: transparent;
          border-radius: 14px;
          perspective: 1000px;
          cursor: pointer;
          aspect-ratio: 3 / 4;
          outline: none;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform .6s cubic-bezier(.2,.6,.3,1);
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }
        .team-card:hover .card-inner,
        .team-card:focus-within .card-inner,
        .team-card.is-flipped .card-inner {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #fff;
        }

        .card-front .team-photo {
          width: 100%;
          height: 72%;
          object-fit: cover;
          display: block;
        }
        .team-info {
          padding: 10px 12px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
          justify-content: center;
          height: 28%;
        }
        .team-name {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #111;
        }
        .team-role {
          margin: 0;
          font-size: 13px;
          color: #666;
        }

        .card-back {
          transform: rotateY(180deg);
          background: linear-gradient(180deg, #f8fbff 0%, #eaf4ff 100%);
          padding: 16px;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
        }
        .team-about {
          margin: 10px 0 0;
          font-size: 12.5px;
          line-height: 1.55;
          color: #334155;
        }

        /* Hover elevation */
        .team-card:hover .card-inner {
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        /* Breakpoints */
        @media (max-width: 1300px) { .team-grid { grid-template-columns: repeat(5, 1fr); } }
        @media (max-width: 1100px) { .team-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 900px)  { .team-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px)  { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 380px)  { .team-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>

    {/* Responsive About Styles */}
    <style>{`
      /* Global guards to prevent horizontal scrolling on this page */
      :root, html, body, #root {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }
      .about-main, .about-content, .about-who-row, .about-ideas-row, .about-why-row, .about-team-row {
        box-sizing: border-box;
        overflow-x: hidden;
        width: 100%;
      }
      img, video { max-width: 100%; height: auto; }
      @media (max-width: 1100px) {
        .about-main {
          padding: 24px 8px 60px 8px !important;
        }
        .about-content {
          max-width: 900px !important;
        }
        .about-heading {
          font-size: 32px !important;
        }
        .about-lamps-row {
          gap: 40px !important;
        }
        .about-who-row, .about-ideas-row {
          padding: 40px 12px !important;
        }
        .about-why-row {
          padding: 32px 8px !important;
        }
        .about-team-row {
          padding: 32px 8px !important;
        }
      }
      @media (max-width: 700px) {
        .about-main {
          padding: 12px 0 24px 0 !important;
        }
        .about-content {
          max-width: 100% !important;
        }
        .about-heading {
          font-size: 22px !important;
          margin-top: 12px !important;
        }
        /* Keep the badge centered and inside the viewport on phones */
        .about-badge {
          margin-left: 0 !important;
          margin-right: 0 !important;
          left: 0 !important; right: 0 !important;
          transform: rotate(-12deg) translateY(0) !important;
          text-align: center !important;
          display: inline-block !important;
        }
        .about-lamps-row {
          flex-direction: column !important;
          gap: 12px !important;
          align-items: center !important;
        }
        .about-who-row, .about-ideas-row {
          flex-direction: column !important;
          padding: 18px 4px !important;
        }
        .about-why-row {
          padding: 18px 4px !important;
        }
        .about-team-row {
          padding: 18px 4px !important;
        }
        .about-why-row h2, .about-team-row h2 {
          font-size: 22px !important;
        }
        .about-why-row p, .about-team-row p {
          font-size: 13px !important;
        }
        .about-ideas-row > div, .about-who-row > div {
          width: 100% !important;
          padding: 0 !important;
        }
        .about-ideas-row img, .about-content img, .about-main img {
          max-width: 100% !important;
          height: auto !important;
        }
        .about-lamps-row .lamp-float {
          width: 60px !important;
        }
        .about-rope-img {
         position: static !important;
         top: unset !important;
         right: unset !important;
         left: unset !important;
         width: 55px !important;
         height: 110px !important;
         margin: 0 auto !important;
         display: block !important;
         z-index: 100 !important;
         background: #fff3cd !important;
         border: 2px solid #bfa13b !important;
        }
        .about-people-img {
          position: static !important;
          top: unset !important;
          right: unset !important;
          left: unset !important;
          transform: none !important;
          width: 100% !important;
          max-width: 1500px !important;
          margin: 12px auto 0 auto !important;
          display: block !important;
          z-index: 1 !important;
        }
      }
    `}</style>
    </>
  );
};

export default About;
