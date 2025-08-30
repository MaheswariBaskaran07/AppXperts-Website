import React, { useState } from "react";

const BookingSection = () => {

    const [isHovered, setIsHovered] = useState(false);

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
        Book Your Demo Now
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
        "See our solutions in action and discover how AppXperts can simplify, scale, and supercharge your business. In this personalized session, our experts will walk you through the features that matter most to you — and answer all your questions in real time." 
      </p>

      {/* Button */}
       <button
      className="submit-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
       onClick={() => window.location.href = "/contact"}
    >
      Contact Us Now
    </button>
    </div>
  );
};

export default BookingSection;
