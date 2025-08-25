import React, { useState } from "react";
import "./Cards.css";
import eclipse from "../../assets/Product/Ellipse 4.png";
import software from "../../assets/Product/Frame 1000009024.png";
import { Link } from "react-router-dom";

const products = [
  { title: "ERP Softwares", desc: "Streamline enterprise operations." },
  { title: "CRM Softwares", desc: "Customized tools to boost your sales pipeline, improve communication, and drive stronger customer loyalty." },
  { title: "Hospital Management", desc: "All-in-one platform for inventory, finance, and operations helping you make confident, data-driven decisions." },
  { title: "E-Commerce Platform", desc: "Boost online sales." },
  { title: "HRMS Softwares", desc: "Simplify HR and payroll." },
  { title: "School Management", desc: "Manage admissions & academics." },
];

const Card = ({ title, desc, index, activeIndex, setActiveIndex }) => {
  const isFlipped = activeIndex === index;

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setActiveIndex(isFlipped ? null : index)}
      style={{ position: 'relative' }}
    >
      <div className="card-inner">
        <div className="card-front" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#222",
              marginBottom: 8,
              paddingBottom: 40,
              paddingLeft: 30,
              zIndex: 1,
              position: "relative",
            }}
          >
            {title}
          </div>
          {/* Read More bottom left */}
          <Link to="/products/product-details">
            <span
              style={{
                color: "#888",
                fontSize: 15,
                fontWeight: 400,
                position: "absolute",
                left: 18,
                bottom: 18,
                zIndex: 2,
                cursor: "pointer",
              }}
            >
              Read More
            </span>
          </Link>
          {/* Arrow bottom right */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #eaf6fb 0%, #b3e7f7 100%)",
              color: "#1a3fa6",
              fontWeight: 700,
              fontSize: 18,
              boxShadow: "0 1px 4px #b3e7f722",
              position: 'absolute',
              right: 18,
              bottom: 18,
              zIndex: 2,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11L11 5"
                stroke="#222"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.5 5H11V8.5"
                stroke="#222"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <img
            src={eclipse}
            alt="eclipse"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 120,
              opacity: 0.52,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="card-back" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', boxSizing: 'border-box', padding: 20 }}>
          <h3 style={{ margin: 0, fontWeight: 600, fontSize: 20 }}>{title}</h3>
          <p style={{ margin: '12px 0 0 0', fontSize: 15 }}>{desc}</p>
          <img src={software} alt={title} style={{ width: 50, maxHeight: 50, marginTop: 10, objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
};

const Softwares = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ padding: "50px 20px" }}>
      {/* Heading + Subtext */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
        <h2 style={{ fontSize: 40, fontWeight: 500, marginLeft: 60, color: "#111", lineHeight: 1.1 }}>
          Digital Solutions,<br />Tailored to Perform
        </h2>
        <div
          style={{
            maxWidth: 400,
            fontWeight: 400,
            color: "#888",
            fontSize: 16,
            marginTop: 30,
            marginRight: 60,
            textAlign: "right",
            lineHeight: 1.6,
          }}
        >
          From streamlining operations to boosting engagement — our products are built to deliver results, faster.
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {products.map((p, index) => (
          <Card
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title={p.title}
            desc={p.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Softwares;
