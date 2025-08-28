import React, { useState } from "react";
import BookNowPopup from "../BookNowPopup";


const CallToAction = () => {

    const [isHovered, setIsHovered] = useState(false);
     const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        padding: "60px 20px",
        background: "linear-gradient(to right, #dff6ff, #00b4ff)",
        textAlign: "center",
        fontFamily: "Poppins",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "15px",
          color: "#000",
        }}
      >
        Let’s Talk About Your Next Big Move
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "16px",
          color: "#333",
          marginBottom: "25px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}
      >
        Whether you’re starting from scratch or scaling up, we’re here to build
        solutions that fit your vision...
      </p>

      {/* Button */}
       <button
      style={{
        padding: "12px 28px",
        background: isHovered
          ? "linear-gradient(90deg, #1a3fa6 0%, #2ecbfa 100%)"
          : "linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "500",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(true)}
    >
      Book a meeting
    </button>
    
    <BookNowPopup open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default CallToAction;
