
import React, { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";
import rope from "../../assets/Product/rope.png";
import "./Portfolio.css";

const categories = ["All", "Web Apps", "Mobile Apps", "ERP", "Cloud"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Apps",
    description: "Full-featured online marketplace with real-time inventory",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare Management System",
    category: "ERP",
    description: "Comprehensive hospital management with patient records",
    tech: ["Angular", "PostgreSQL", "AWS"],
  },
  {
    title: "Delivery Tracking App",
    category: "Mobile Apps",
    description: "Real-time package tracking for logistics companies",
    tech: ["React Native", "Firebase", "Maps API"],
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud",
    description: "Enterprise infrastructure migration to AWS",
    tech: ["AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Financial Dashboard",
    category: "Web Apps",
    description: "Analytics platform for financial institutions",
    tech: ["Vue.js", "D3.js", "Python"],
  },
  {
    title: "Manufacturing ERP",
    category: "ERP",
    description: "Complete production planning and inventory system",
    tech: ["Java", "Spring", "Oracle"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);


  // Lamp state for hero section
  const [lamp1On, setLamp1On] = useState(false);
  const [lamp2On, setLamp2On] = useState(false);
  const handleRopeClick = () => {
    setLamp1On((prev) => !prev);
    setLamp2On((prev) => !prev);
  };
  const bothLampsOn = lamp1On && lamp2On;

  return (
    <div className="portfolio-wrapper">
      {/* Hero Section with Animated Lamps and Rope */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          minHeight: "40vh",
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

        {/* Hero Content */}
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
            Our Portfolio
            <br />
            <span style={{ fontSize: "28px", fontWeight: 400 }}>
              Showcasing successful projects across industries
            </span>
          </h1>
        </div>

        {/* People Illustration */}
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

      {/* Tabs */}
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div
            className={`portfolio-card${filteredProjects.length === 1 ? ' enlarged' : ''}`}
            key={index}
          >
            <div className="card-header">
              <span className="card-initial">
                {project.title.substring(0, 2)}
              </span>
            </div>

            <div className="card-content">
              <span className="card-category">{project.category}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech, idx) => (
                  <span className="tech-chip" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
};

export default Portfolio;
