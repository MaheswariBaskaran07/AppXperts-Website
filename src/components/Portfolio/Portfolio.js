
import React, { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";
import rope from "../../assets/Product/rope.png";
import "./Portfolio.css";
import B2B from "../../assets/Portfolio/B2B.png"
import ERP from "../../assets/Portfolio/erp.png"
import Ecommerce from "../../assets/Portfolio/ecommerce.png"
import beauty from "../../assets/Portfolio/beauty.png"
import vsb from "../../assets/Portfolio/vsb.png"
import altraclean from "../../assets/Portfolio/jpb1.png"
import skp from "../../assets/Portfolio/skp.png"
import networkcourier from "../../assets/Portfolio/networkcourier.png"
import jpb from "../../assets/Portfolio/jpb.png"
import tvk from "../../assets/Portfolio/tvk.png"
import B2C from "../../assets/Portfolio/mob.png"

const categories = ["All", "Websites", "Web", "Mobile"];

const projects = [
  // Websites
  {
    title: "Parveen Beauty Parlour",
    category: "Websites",
    description: "Professional beauty parlour website with booking system",
    tech: ["React", "CSS3", "Node.js"],
    image: beauty,
    link: "#",
  },
  {
    title: "VSB Building Website",
    category: "Websites",
    description: "Corporate website for building construction company",
    tech: ["React", "Bootstrap", "Express"],
    image: vsb,
    link: "#",
  },
  {
    title: "Altraclean",
    category: "Websites",
    description: "Cleaning services website with service bookings",
    tech: ["React", "CSS3", "Firebase"],
    image: altraclean,
    link: "#",
  },
  {
    title: "SKP Singapore Hardware",
    category: "Websites",
    description: "Hardware store website with product catalog",
    tech: ["React", "Tailwind CSS", "MongoDB"],
    image: skp,
    link: "#",
  },
  {
    title: "NetworkCourier",
    category: "Websites",
    description: "Courier service website with tracking system",
    tech: ["React", "Node.js", "MySQL"],
    image: networkcourier,
    link: "#",
  },
  
  // Web Applications
  {
    title: "ERP System",
    category: "Web",
    description: "Enterprise Resource Planning solution for business management",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: ERP,
    link: "#",
  },
  {
    title: "JPB Maid Agency",
    category: "Web",
    description: "Dual platform for maid agency management and client portal",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    image: jpb,
    link: "#",
  },
  {
    title: "CatchyFive",
    category: "Web",
    description: "Full-featured e-commerce platform with payment integration",
    tech: ["React", "Node.js", "Stripe", "Redis"],
    image: Ecommerce,
    link: "#",
  },
  {
    title: "TVK Political Platform",
    category: "Web",
    description: "Political party website with admin dashboard and analytics",
    tech: ["React", "Node.js", "MySQL", "Chart.js"],
    image: tvk,
    link: "#",
  },
  {
    title: "B2B Platform",
    category: "Web",
    description: "Business-to-business marketplace and management system",
    tech: ["React", "Express", "MongoDB", "Elasticsearch"],
    image: B2B,
    link: "#",
  },
  {
    title: "B2C Platform",
    category: "Web",
    description: "Business-to-consumer e-commerce solution",
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    image: B2C,
    link: "#",
  },
  {
    title: "E-commerce Platform",
    category: "Web",
    description: "Scalable online marketplace with real-time inventory",
    tech: ["React", "GraphQL", "MongoDB", "Kubernetes"],
    image: Ecommerce,
    link: "#",
  },
  {
    title: "Hotel ERP",
    category: "Web",
    description: "Complete hotel management system with booking and POS",
    tech: ["React", "Python", "PostgreSQL", "Docker"],
    image: ERP,
    link: "#",
  },
  // Mobile Applications
  {
    title: "Mobile ERP",
    category: "Mobile",
    description: "Mobile ERP solution for on-the-go business management",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    image: ERP,
    link: "#",
  },
  {
    title: "Mobile CMS",
    category: "Mobile",
    description: "Content Management System mobile application",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    image: B2C,
    link: "#",
  },
  {
    title: "B2B Mobile App",
    category: "Mobile",
    description: "Business-to-business mobile platform for trade management",
    tech: ["React Native", "Express", "MongoDB", "AWS"],
    image: B2B,
    link: "#",
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
            {/* Project Image */}
            {project.image ? (
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
            ) : (
              <div className="card-header">
                <span className="card-initial">
                  {project.title.substring(0, 2)}
                </span>
              </div>
            )}

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

              {/* View Project Link */}
             {/* {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  View Project →
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>

 
    </div>
  );
};

export default Portfolio;
