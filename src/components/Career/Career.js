import React from "react";
import ClintBanner from "../../assets/Career/Frame 1000009072.png";

const Career = () => {
  return (
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
          height: "120%", // top half overlay
          background:
          "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
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
          marginTop: "-12px", // move more upwards
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
            Shape the Future of Technology <br /> and Your Career With Us
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
            At AppXperts, we’re more than just a workplace — we’re a community
            of innovators, problem-solvers, and dreamers. Join us to create
            cutting-edge digital solutions while building a career that inspires
            you every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
