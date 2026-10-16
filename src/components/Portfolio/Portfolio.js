
import React, { useState } from "react";
import { motion } from "framer-motion";
import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";
import rope from "../../assets/Product/rope.png";
import "./Portfolio.css";
import B2B from "../../assets/Portfolio/B2BImage.png"
import B2BMobile from "../../assets/Portfolio/B2BMobile.jpeg"
import ERP from "../../assets/Portfolio/ERPImage.png"
import HotelERP from "../../assets/Portfolio/HotelErp.png"
import Ecommerce from "../../assets/Portfolio/EcommerceImage.png"
import beauty from "../../assets/Portfolio/PraveenBeauty.png"
import CMSMobile from "../../assets/Portfolio/CMSMobile.jpeg"
import ERPMobile from "../../assets/Portfolio/ERPMobile.jpeg"
import vsb from "../../assets/Portfolio/vsb.png"
import altraclean from "../../assets/Portfolio/AltraClean.png"
import skp from "../../assets/Portfolio/SKPERP.png"
import Advocate from "../../assets/Portfolio/Advocateimage.png"
import ars from "../../assets/Portfolio/ARS.png"
import Dhanas from "../../assets/Portfolio/DhanasImage.png"
import networkcourier from "../../assets/Portfolio/networkcourier.png"
import jpb from "../../assets/Portfolio/jpb.png"
import tvk from "../../assets/Portfolio/TMK.png"
import B2C from "../../assets/Portfolio/B2CImage.png"
import appxpertsCard from '../../assets/Portfolio/appxpertsCard.jpg'
import appxpertsCardBack from '../../assets/Portfolio/appxpertsCardBack.jpg'
import visitingCard from "../../assets/Portfolio/ui/ux/Business Card Vijaya Devi Page 1.png"
import visitingCardBack from "../../assets/Portfolio/ui/ux/Page 2 Business Card.png"
import visitingCard1 from "../../assets/Portfolio/advocatecard.jpg"
import visitingCardBack1 from "../../assets/Portfolio/advocatecardBack.jpg"
import visitingCard2 from "../../assets/Portfolio/alankarnacard.jpg"
import visitingCardBack2 from "../../assets/Portfolio/alankarnacardBack.jpg"
import visitingCard3 from "../../assets/Portfolio/arscard.jpg"
import visitingCardBack3 from "../../assets/Portfolio/arscardBack.jpg"
import NB from "../../assets/Portfolio/ui/ux/NISHABALA 3.png"
import cal1 from "../../assets/Portfolio/ui/ux/Calendar 1.png"
import cal2 from "../../assets/Portfolio/ui/ux/CALENDAR 3.png"
import zune from "../../assets/Portfolio/ui/ux/PNG Zune Ventures.png"
import shiv from "../../assets/Portfolio/ui/ux/Shivedha spaces Final Logo with out Background.png" 
import Alankarna from "../../assets/Portfolio/AlankarnaLogo.jpeg"
import ARSLogo from "../../assets/Portfolio/ArsLogo.jpeg"
import JaiMakeup from "../../assets/Portfolio/JaiLogo.jpeg"
import FutureBiologics from '../../assets/Portfolio/FuturLogo.jpeg'

const categories = ["All", "Websites", "Web", "Mobile", "UI/UX"];

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
    title: "Malar Legal Chambers",
    category: "Websites",
    description:
      "Professional advocate website showcasing legal services, practice areas, and legal consultation for clients.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: Advocate,
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
    title: "ARS Uniforms",
    category: "Websites",
    description:
      "Professional uniform website showcasing a wide range of uniforms, product collections, and customized apparel solutions.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: ars,
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
    title: "Dhanas E-commerce",
    category: "Websites",
    description:
      "E-commerce website featuring a seamless online shopping experience with product listings, product details, shopping cart, and an easy checkout process.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: Dhanas,
    link: "#",
  },
  // {
  //   title: "JPB Maid Agency",
  //   category: "Web",
  //   description: "Dual platform for maid agency management and client portal",
  //   tech: ["React", "Express", "MongoDB", "Socket.io"],
  //   image: jpb,
  //   link: "#",
  // },
  // {
  //   title: "CatchyFive",
  //   category: "Web",
  //   description: "Full-featured e-commerce platform with payment integration",
  //   tech: ["React", "Node.js", "Stripe", "Redis"],
  //   image: "",
  //   link: "#",
  // },
  {
    title: "TMK Political Platform",
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
    image: HotelERP,
    link: "#",
  },
  // Mobile Applications
  {
    title: "Mobile ERP",
    category: "Mobile",
    description: "Mobile ERP solution for on-the-go business management",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    image: ERPMobile,
    link: "#",
  },
  {
    title: "Mobile CMS",
    category: "Mobile",
    description: "Content Management System mobile application",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    image: CMSMobile,
    link: "#",
  },
  {
    title: "B2B Mobile App",
    category: "Mobile",
    description: "Business-to-business mobile platform for trade management",
    tech: ["React Native", "Express", "MongoDB", "AWS"],
    image: B2BMobile,
    link: "#",
  },
  
  // UI/UX Design
  {
    title: "Visiting Card Design",
    category: "UI/UX",
    description: "Professional business card design for Mohamed Aasif",
    tech: ["Adobe Illustrator", "Photoshop", "Print Design"],
    image: appxpertsCard,
    backImage: appxpertsCardBack,
    link: "#",
    aspectRatio: "rectangle",
  },
  {
    title: "Visiting Card Design",
    category: "UI/UX",
    description: "Professional business card design for Vijaya Devi",
    tech: ["Adobe Illustrator", "Photoshop", "Print Design"],
    image: visitingCard,
    backImage: visitingCardBack,
    link: "#",
    aspectRatio: "rectangle",
  },
  {
    title: "Visiting Card Design",
    category: "UI/UX",
    description: "Professional business card design for Dr.V.Malarvizhi",
    tech: ["Adobe Illustrator", "Photoshop", "Print Design"],
    image: visitingCard1,
    backImage: visitingCardBack1,
    link: "#",
    aspectRatio: "rectangle",
  },
  {
    title: "Visiting Card Design",
    category: "UI/UX",
    description: "Professional business card design for Revathy sivakumar",
    tech: ["Adobe Illustrator", "Photoshop", "Print Design"],
    image: visitingCard2,
    backImage: visitingCardBack2,
    link: "#",
    aspectRatio: "rectangle",
  },
  {
    title: "Visiting Card Design",
    category: "UI/UX",
    description: "Professional business card design for Revathy sivakumar",
    tech: ["Adobe Illustrator", "Photoshop", "Print Design"],
    image: visitingCard3,
    backImage: visitingCardBack3,
    link: "#",
    aspectRatio: "rectangle",
  },
  {
    title: "Zune Ventures Logo",
    category: "UI/UX",
    description: "Modern logo design for Zune Ventures brand",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: zune,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Shivedha Spaces Logo",
    category: "UI/UX",
    description: "Corporate logo design for Shivedha Spaces real estate company",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: shiv,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Alankarna Brand Design",
    category: "UI/UX",
    description: "Brand identity and logo design for Alakarna",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: Alankarna,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "ARS Brand Design",
    category: "UI/UX",
    description: "Brand identity and logo design for ARS",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: ARSLogo,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Jai Makeup Brand Design",
    category: "UI/UX",
    description: "Brand identity and logo design for Jai Makeup",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: JaiMakeup,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Future Biologics Brand Design",
    category: "UI/UX",
    description: "Brand identity and logo design for Future Biologics",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: FutureBiologics,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Nishabala Brand Design",
    category: "UI/UX",
    description: "Brand identity and logo design for Nishabala",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    image: NB,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Calendar Design 2024",
    category: "UI/UX",
    description: "Custom calendar design with modern aesthetics",
    tech: ["Adobe InDesign", "Photoshop", "Print Design"],
    image: cal1,
    link: "#",
    aspectRatio: "square",
  },
  {
    title: "Calendar Design Collection",
    category: "UI/UX",
    description: "Creative calendar design with unique layout",
    tech: ["Adobe InDesign", "Illustration", "Print Design"],
    image: cal2,
    link: "#",
    aspectRatio: "square",
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
              <div
                className={`card-image ${project.aspectRatio === 'rectangle' ? 'rectangle-aspect' : project.aspectRatio === 'square' ? 'square-aspect' : ''} ${project.backImage ? 'double-sided' : ''}`}
                tabIndex={project.backImage ? 0 : undefined}
                aria-label={project.backImage ? `${project.title}, focus or hover to view the back` : undefined}
              >
                <img src={project.image} alt={project.title} />
                {project.backImage && (
                  <img
                    className="card-image-back"
                    src={project.backImage}
                    alt={`${project.title} back`}
                  />
                )}
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
