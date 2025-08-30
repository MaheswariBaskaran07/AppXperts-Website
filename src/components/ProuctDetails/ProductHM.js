import React from "react";
import HM from '../../assets/ProductDetails/Hospital.png'

const ProductHM = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f9f9f9",
        borderRadius: "12px",
        padding: "40px",
        maxWidth: "1000px",
        margin: "40px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left Content */}
      <div style={{ flex: 1, paddingRight: "30px" }}>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#111",
            lineHeight: "1.3",
          }}
        >
          HMS – Hospital <br /> Management System
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          Streamline Healthcare Operations with Smart HMS Solutions
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our Hospital Management System is designed to bring all your
          healthcare operations into one intelligent platform – from patient
          registration, doctor scheduling, and electronic medical records to
          billing, pharmacy, and laboratory management. With real-time insights
          and automation, hospitals can improve patient care, reduce
          administrative workload, minimize errors, and optimize overall
          efficiency.
        </p>
        <a
          href="#"
         className="submit-button"
        >
          Book a Demo Today →
        </a>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={HM}   // 👈 replace with your image path or imported image
          alt="Hospital Management"
          style={{
            height: "420px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductHM;
