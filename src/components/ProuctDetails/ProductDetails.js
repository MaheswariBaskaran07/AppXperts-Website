import React from "react";
import ERP from '../../assets/ProductDetails/ERP.png'

const ProductDetails = () => {
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
          ERP – Enterprise <br /> Resource Planning
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          Streamline Your Business with Smart Celeste Birch
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our ERP system is designed to bring all your core business operations
          under one intelligent platform – from inventory and finance to
          operations and reporting. With real-time data insights and
          customization, you can cut down manual work, reduce errors, and make
          faster, more informed decisions.
        </p>
        <a
          href="#"
          style={{
            fontSize: "18px",
            color: "#007bff",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >
          Book a Demo Today →
        </a>
      </div>

      {/* Right Side - Two Image Placeholders */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={ERP}   // 👈 replace with your image path or imported image
          alt="ERP"
          style={{
            height: "420px",      // was 200 + 20 gap + 200 → adjust as you like
            width: "100%",
            objectFit: "cover",   // keeps aspect ratio while covering
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
