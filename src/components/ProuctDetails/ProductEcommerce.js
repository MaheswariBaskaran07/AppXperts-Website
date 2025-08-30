import React, { useState } from "react";
import Ecommerce from "../../assets/ProductDetails/E-commerce.png";
import BookNowPopup from "../BookNowPopup";

const ProductEcommerce = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
     <>
   <div style={{ marginLeft: "50px" }}>
     <button
          className="submit-button"
          style={{ marginTop: "16px" }}
          onClick={() => window.location.href = "/products"}
        >
          Go Back
        </button>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f9f9f9",
        borderRadius: "12px",
        maxWidth: "1000px",
        margin: "0 auto",
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
          Ecommerce – Smart <br /> Online Store Management
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          Streamline Your Online Sales with Intelligent Ecommerce Solutions
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our Ecommerce system is designed to give you complete control over your
          online store – from product listings and inventory to secure payments
          and customer orders. With real-time analytics, integrated shipping, and
          customizable storefronts, you can create seamless shopping experiences,
          boost conversions, and scale your business effortlessly.
        </p>
        <a
             onClick={() => setIsOpen(true)}
        className="submit-button"
        >
          Book a Demo Today →
        </a>
      </div>
 <BookNowPopup open={isOpen} setOpen={setIsOpen} />
      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={Ecommerce}
          alt="Ecommerce"
          style={{
            height: "420px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
    </>
  );
};

export default ProductEcommerce;
