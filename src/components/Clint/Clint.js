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

import { FaStar } from "react-icons/fa";
import Testimonials from "./Testimonial";

const Clients = () => {
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
    <>
      <section
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
          padding: "0",
          margin: "0", // remove margin gap
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // start from top
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Banner Section */}
        {/* Banner Section */}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%", // top half overlay
            background:
              "linear-gradient(to bottom, rgba(159,171,255,0.85) 0%, rgba(162,231,255,0.65) 70%, rgba(162,231,255,0) 100%)",
            pointerEvents: "none",
            zIndex: 2, // make sure it's above the image
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "600px", // reduced from 700px
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginTop: "-85px", // move more upwards
            zIndex: 3,
          }}
        >
          {/* Banner Image */}
          <img
            src={ClintBanner}
            alt="Clients Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top", // shows top part of image first
            }}
          />

          {/* Floating Logos */}
          <div
            style={{
              position: "absolute",
              top: 80,
              left: 10,
              right: 10,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            {[Logo1, Logo2, Logo3].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Floating Logo ${index}`}
                style={{
                  position: "absolute",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  opacity: 0.6,
                  animation: `floatAnimX${index} ${
                    8 + index * 3
                  }s ease-in-out infinite`,
                  top: `${10 + index * 12}%`, // keep at top side
                  left: `${5 + index * 8}%`, // cluster top-left
                }}
              />
            ))}
            {[Logo4, Logo5, Logo6].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Floating Logo ${index}`}
                style={{
                  position: "absolute",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  opacity: 0.6,
                  animation: `floatAnimX${index + 3} ${
                    9 + index * 3
                  }s ease-in-out infinite`,
                  top: `${15 + index * 10}%`, // top region only
                  right: `${5 + index * 8}%`, // cluster top-right
                }}
              />
            ))}
          </div>

          {/* Overlay Content */}
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#000",
              textAlign: "center",
              maxWidth: "800px",
              padding: "0 20px",
              zIndex: 3,
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 500,
                marginBottom: "20px",
                color: "#1a1a1a",
                lineHeight: 1.3,
              }}
            >
              Trusted by Visionaries, <br /> Powered by Partnerships
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#444",
                marginBottom: "240px",
                lineHeight: 1.6,
              }}
            >
              From startups to global enterprises, our clients choose AppXperts
              for innovative solutions, reliable delivery, and lasting results.
            </p>
          </div>

          {/* Clients Badge */}
          <div
            style={{
              position: "absolute",
              right: "12%",
              bottom: "35%",
              background: "#1a3fa6",
              color: "#fff",
              fontWeight: 500,
              fontSize: "16px",
              width: "110px",
              height: "110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(26,63,166,0.25)",
              fontFamily: "'Poppins', sans-serif",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            Clients <br /> 300+
          </div>
        </div>

        <style>
          {`
    @keyframes floatAnimX0 {
      0%   { transform: translate(0, 0) scale(1); }
      25%  { transform: translate(20px, -40px) scale(1.05); }
      50%  { transform: translate(-15px, -60px) scale(0.95); }
      75%  { transform: translate(10px, -40px) scale(1.1); }
      100% { transform: translate(0, 0) scale(1); }
    }
    @keyframes floatAnimX1 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(-25px, -50px); }
      50%  { transform: translate(20px, -70px); }
      75%  { transform: translate(-10px, -40px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes floatAnimX2 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(15px, -30px); }
      50%  { transform: translate(-20px, -60px); }
      75%  { transform: translate(25px, -40px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes floatAnimX3 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(-20px, -40px); }
      50%  { transform: translate(20px, -80px); }
      75%  { transform: translate(-15px, -50px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes floatAnimX4 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(25px, -60px); }
      50%  { transform: translate(-20px, -80px); }
      75%  { transform: translate(15px, -50px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes floatAnimX5 {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(-30px, -70px); }
      50%  { transform: translate(25px, -100px); }
      75%  { transform: translate(-20px, -60px); }
      100% { transform: translate(0, 0); }
    }
  `}
        </style>
      </section>

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
        {/* </div> */}
      </section>
      <Testimonials />
    </>
  );
};

export default Clients;
