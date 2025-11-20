import React, { useState } from "react";
import "./Portfolio.css"; // <-- import CSS file

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

  return (
    <div className="portfolio-wrapper">
  

      {/* Hero Section */}
      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>Showcasing 216+ successful projects across industries</p>
      </section>

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
          <div className="portfolio-card" key={index}>
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
