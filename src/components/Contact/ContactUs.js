import people from "../../assets/Contact/Business merger-bro 1.png";
import { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import rope from "../../assets/Product/rope.png"
import "../../components/Products/lamp.css"

const ContactUs = () => {
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
             "top": "-180px",
             "right": "60px",
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
          style={{ width: "200px", height: "700px", objectFit: "contain", userSelect: "none" }}
        />
        {/* <span style={{ fontSize: "18px", color: "#bfa13b", marginLeft: "250px", fontWeight: 600 }}>Click on Rope</span> */}
      </div>

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
            fontSize: "35px",
            fontWeight: "bold",
            margin: "20px 0",
            color: "#000",
          }}
        >
        "Let’s Connect & Create
         Something Amazing"
        </h1>

        <p
          style={{
            fontSize: "16px",
            maxWidth: "3200px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
       "Whether you’re looking for a cutting-edge app, a strong digital presence, or just want to explore ideas, our team is ready to connect. Share your vision, and let’s make it a reality—together."
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

  );
};

export default ContactUs;
