import React from "react";
import ClintBanner from "../../assets/Client/OurClientsBanner.png";

// Example logo imports (add your logos inside assets/Client/Logos folder)
import Logo1 from "../../assets/Client/Clint-Logos/Logo 1.png";
import Logo2 from "../../assets/Client/Clint-Logos/Logo 2.png";
import Logo3 from "../../assets/Client/Clint-Logos/Logo 3.png";
import Logo4 from "../../assets/Client/Clint-Logos/Logo 4.png";
import Logo5 from "../../assets/Client/Clint-Logos/Logo 5.png";
import Logo6 from "../../assets/Client/Clint-Logos/Logo 6.png";
import Logo7 from "../../assets/Client/Clint-Logos/Logo 7.png";
import Logo8 from "../../assets/Client/Clint-Logos/Logo 8.png";
import Logo9 from "../../assets/Client/Clint-Logos/Logo 9.png";
import Logo10 from "../../assets/Client/Clint-Logos/Logo 10.png";
import Logo11 from "../../assets/Client/Clint-Logos/Logo 11.png";
import Logo12 from "../../assets/Client/Clint-Logos/Logo 12.png";
import Logo13 from "../../assets/Client/Clint-Logos/Logo 13.png";
import Logo14 from "../../assets/Client/Clint-Logos/Logo 14.png";
import Logo15 from "../../assets/Client/Clint-Logos/Logo 15.png";
import Logo16 from "../../assets/Client/Clint-Logos/Logo 16.png";
import Logo17 from "../../assets/Client/Clint-Logos/Logo 17.png";
import Logo18 from "../../assets/Client/Clint-Logos/Logo 18.png";
import Logo19 from "../../assets/Client/Clint-Logos/Logo 19.png";
import Logo20 from "../../assets/Client/Clint-Logos/Logo 20.png";
import Logo21 from "../../assets/Client/Clint-Logos/Logo 21.png";
import Logo22 from "../../assets/Client/Clint-Logos/Logo 22.png";
import Logo23 from "../../assets/Client/Clint-Logos/Logo 23.png";
import Logo24 from "../../assets/Client/Clint-Logos/Logo 24.png";
import Logo25 from "../../assets/Client/Clint-Logos/Logo 25.png";
import Logo26 from "../../assets/Client/Clint-Logos/Logo 26.png";
import Logo27 from "../../assets/Client/Clint-Logos/Logo 27.png";

import Testimonials from "./Testimonial";

const ClientLogoSction = () => {
  // Put all logos in an array for easier rendering
  const clientLogos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
    Logo16,
    Logo17,
    Logo18,
    Logo19,
    Logo20,
    Logo21,
    Logo22,
    Logo23,
    Logo24,
    Logo25,
    Logo26,
    Logo27,
  ];

  return (
    <section
      style={{
        background: "#fff", // outer background same as Figma
        padding: "80px 60px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* White Container */}
      {/* <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 60px",
          }}
        > */}
      {/* Heading + Description Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {/* Left Heading */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "#1a1a1a",
            flex: "1 1 40%",
            margin: 0,
          }}
        >
          Our Clients
        </h2>

        {/* Right Description */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000A1",
            lineHeight: 1.6,
            maxWidth: "600px",
            flex: "1 1 55%",
            margin: 0,
          }}
        >
          Building strong relationships with brands that inspire us — and
          empowering them to achieve more.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "24px",
        }}
      >
        {clientLogos.map((logo, index) => (
          <div
            className="card"
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              width: "140px", // ✅ Reduced width
              height: "140px", // ✅ Increased height slightly
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
            }}
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "140px",
                backfaceVisibility: "hidden",
                background: "linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)",
                color: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                transform: "rotateY(180deg)",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Project {index + 1}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
    .card:hover {
      transform: rotateY(180deg);
    }
  `}
      </style>
    </section>
  );
};

export default ClientLogoSction;
