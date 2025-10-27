import { useState }  from "react";
import people from "../../assets/Client/OurClientsBanner.png";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import rope from "../../assets/Product/rope.png"
import "./lamp.css"

import { motion } from "framer-motion";
// Example logo imports (add your logos inside assets/Client/Logos folder)
import Logo1 from "../../assets/Client/Clint-Logos/Logo 1.png";
import Logo2 from "../../assets/Client/Clint-Logos/Logo 2.png";
import Logo3 from "../../assets/Client/Clint-Logos/Logo 3.png";
import Logo4 from "../../assets/Client/Clint-Logos/Logo 4.png";
import Logo5 from "../../assets/Client/Clint-Logos/Logo 5.png";
import Logo6 from "../../assets/Client/Clint-Logos/Logo 6.png";
import "../../components/Products/lamp.css"
const Clients = () => {
   const [lamp1On, setLamp1On] = useState(false);
  const [lamp2On, setLamp2On] = useState(false);

  // Handler to toggle both lamps at once
  const handleRopeClick = () => {
    setLamp1On((prev) => !prev);
    setLamp2On((prev) => !prev);
  };

  // Determine if both lamps are on
  const bothLampsOn = lamp1On && lamp2On;
  return (

     <div
      style={{
        position: "relative",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
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

   <div className="lamps-row">
  <motion.div className={`lamp ${lamp1On ? "lamp-on" : ""}`}>
    <img src={lamp} alt="Lamp1" style={{ width: "100%" }} />
    {lamp1On && (<><div className="lamp-light-beam-left"></div><div className="lamp-light-beam-right"></div></>)}
  </motion.div>

  <motion.div className={`lamp ${lamp2On ? "lamp-on" : ""}`}>
    <img src={lamp} alt="Lamp2" style={{ width: "100%" }} />
    {lamp2On && (<><div className="lamp-light-beam-left"></div><div className="lamp-light-beam-right"></div></>)}
  </motion.div>
</div>

      {/* 🔹 Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          marginTop: "50px",
        }}
      >
        <h1
          className="client-heading"
          >
            Trusted by Visionaries, <br /> Powered by Partnerships
          </h1>
          <p
           className="client-sub"
          >
            From startups to global enterprises, our clients choose <strong>AppXperts (Xperts Software Solutions Private Limited)</strong>
            for innovative solutions, reliable delivery, and lasting results.
          </p>
      </div>

      {/* 🔹 People Illustration */}
      <img
        src={people}
        alt="People"
        className="about-people-img"
        style={{
          position: "absolute",
          bottom: "0",
          top: "250px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1500px",
          zIndex: 1,
        }}
      />
        <style>{` .about-people-img {
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
        }`}</style>
      <div
          style={{
            position: "absolute",
            top: 100,
            left: 10,
            right: 10,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {[Logo1, Logo2, Logo3].map((logo, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${10 + index * 12}%`,
                left: `${5 + index * 8}%`,
                animation: `floatAnimX${index} ${
                  8 + index * 3
                }s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173,216,230,0.5) 40%, rgba(135,206,235,0.3) 70%, rgba(173,216,230,0.1) 100%)",
                  boxShadow:
                    "inset -5px -5px 15px rgba(255,255,255,0.6), 0 0 15px rgba(135,206,250,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={logo}
                  alt={`Floating Logo ${index}`}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}

          {[Logo4, Logo5, Logo6].map((logo, index) => (
            <div
              key={index + 3}
              style={{
                position: "absolute",
                top: `${15 + index * 10}%`,
                right: `${5 + index * 8}%`,
                animation: `floatAnimX${index + 3} ${
                  9 + index * 3
                }s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173,216,230,0.5) 40%, rgba(135,206,235,0.3) 70%, rgba(173,216,230,0.1) 100%)",
                  boxShadow:
                    "inset -5px -5px 15px rgba(255,255,255,0.6), 0 0 15px rgba(135,206,250,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={logo}
                  alt={`Floating Logo ${index + 3}`}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
        className="client-circle"
        >
          Clients <br /> 300+
        </div>
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

  );
};

export default Clients;
