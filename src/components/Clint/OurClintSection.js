import React from "react";
import ClintBanner from "../../assets/Client/OurClientsBanner.png";

// Example logo imports (add your logos inside assets/Client/Logos folder)
import Logo1 from "../../assets/images/gallery/gallery-1-1.jpg";
import Logo2 from "../../assets/images/gallery/gallery-1-10.jpg";
import Logo3 from "../../assets/images/gallery/gallery-1-2.jpg";
import Logo4 from "../../assets/images/gallery/gallery-1-3.jpg";
import Logo5 from "../../assets/images/gallery/gallery-1-4.jpg";
import Logo6 from "../../assets/images/gallery/gallery-1-5.jpg";
import Logo7 from "../../assets/images/gallery/gallery-1-6.jpg";
import Logo8 from "../../assets/images/gallery/gallery-1-7.jpg";
import Logo9 from "../../assets/images/gallery/gallery-1-8.jpg";
import Logo10 from "../../assets/images/gallery/gallery-1-9.jpg";
import Logo11 from "../../assets/images/gallery/gallery1-11.jpg";
import Logo12 from "../../assets/images/gallery/gallery1-12.jpg";
import Logo13 from "../../assets/images/gallery/gallery1-13.jpg";
import Logo14 from "../../assets/images/gallery/gallery1-14.jpg";
import Logo15 from "../../assets/images/gallery/gallery1-15.jpg";
import Logo16 from "../../assets/images/gallery/gallery1-16.jpg";
import Logo17 from "../../assets/images/gallery/gallery1-17.jpg";
import Logo18 from "../../assets/images/gallery/gallery1-18.jpg";
import Logo19 from "../../assets/images/gallery/gallery1-19.jpg";
import Logo20 from "../../assets/images/gallery/gallery1-20.jpg";
import Logo21 from "../../assets/images/gallery/gallery1-21.jpg";
import Logo22 from "../../assets/images/gallery/gallery1-22.jpg";

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

        {/* Logos Grid */}
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
                height: "120px",
                transformStyle: "preserve-3d",
                transition: "transform 0.8s",
              }}
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "120px",
                  backfaceVisibility: "hidden",
                  background: "#1a3fa6",
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
