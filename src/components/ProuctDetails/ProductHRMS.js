import React, { useState } from "react";
import HRMS from '../../assets/ProductDetails/HRMS.png'
import BookNowPopup from "../BookNowPopup";

const ProductHRMS = () => {
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
          HRMS – Human Resource <br /> Management System
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          Streamline HR Operations with Smarter HRMS Solutions
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our HRMS software is designed to bring all your human resource functions under one
          intelligent platform – from recruitment and onboarding to payroll, attendance,
          performance management, and compliance. With automation and real-time insights,
          you can reduce manual work, improve employee satisfaction, and make data-driven
          workforce decisions.
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
          src={HRMS}
          alt="HRMS"
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

export default ProductHRMS;
