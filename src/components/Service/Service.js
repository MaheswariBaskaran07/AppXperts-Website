import people from "../../assets/Services/ServiceBanner.png";
import CallToAction from "./CallToAction";
import OurService from "./OurService";
import { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import rope from "../../assets/Product/rope.png"
import "../../components/Products/lamp.css"
import React from "react";

const Service = () => { 
  // Track window width for responsive rendering
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

    return (
<>
  <div
      style={{
        position: "relative",
        textAlign: "center",
        fontFamily: "Poppins",
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "120px",
          paddingTop: "20px",
          position: "relative",
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
                style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "20px 0",
                    color: "#000",
                }}
                >
                Smart Solutions, Seamless <br/>
                Experiences.
                </h1>

                {/* Description */}
                <p
                style={{
                    fontSize: "16px",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                    color: "#333",
                }}
                >
                From concept to execution, AppXperts delivers end-to-end digital services that power your growth. Whether it’s mobile apps, web platforms, UI/UX, or branding — we build future-ready solutions tailored to your vision.
                </p>
      </div>

      {/* 🔹 People Illustration */}
      <img
        src={people}
        alt="People"
        style={{
          position: "absolute",
          bottom: "0",
          top: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1500px",
          zIndex: 1,
        }}
      />
      
    </div>
   <OurService />
         <CallToAction />
         </>
    )
}
export default Service;
// Responsive rope image styles
<style>{`
  @media (max-width: 1100px) {
    .service-rope-img {
      width: 120px !important;
      height: 350px !important;
    }
  }
  @media (max-width: 700px) {
    .service-rope-img {
      display: none !important;
    }
    
  }
`}</style>