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
     className="submit-button"
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
