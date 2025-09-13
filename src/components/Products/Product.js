import { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";
// import rope from "../../assets/Product/Swinging Rope.gif"
import rope from "../../assets/Product/rope.png"
import "./lamp.css"

const Product = () => {
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
          Smart Products. Real Impact.
          <br />
          Where innovation meets purpose.
        </h1>

        <p
          style={{
            fontSize: "16px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "#000",
          }}
        >
          Explore our curated suite of digital solutions designed to solve
          real-world challenges with simplicity, scalability, and smart
          technology at their core.
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
          top: "200px",
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
    </div>
  );
};

export default Product;
