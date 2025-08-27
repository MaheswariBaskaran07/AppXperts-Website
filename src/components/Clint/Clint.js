import React from "react";
import ClintBanner from "../../assets/Client/OurClientsBanner.png";

// Example logo imports (add your logos inside assets/Client/Logos folder)
import Logo1 from "../../assets/Client/Clint-Logos/Logo 1.png";
import Logo2 from "../../assets/Client/Clint-Logos/Logo 2.png";
import Logo3 from "../../assets/Client/Clint-Logos/Logo 3.png";
import Logo4 from "../../assets/Client/Clint-Logos/Logo 4.png";
import Logo5 from "../../assets/Client/Clint-Logos/Logo 5.png";
import Logo6 from "../../assets/Client/Clint-Logos/Logo 6.png";

const Clients = () => {
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
        marginBottom: "50px",
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
          minHeight: "700px", // 👈 let it expand naturally
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginTop: "-110px", // move more upwards
          zIndex: 3,
        }}
      >
        <img
          src={ClintBanner}
          alt="Clients Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // fills but maintains ratio
            objectPosition: "center", // 👈 balanced top & bottom
          }}
        />

        {/* Floating Logos */}
        {/* Floating Logos */}
        <div
          style={{
            position: "absolute",
            top: 100,
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
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${10 + index * 12}%`,
                left: `${5 + index * 8}%`,
                animation: `floatAnimX${index} ${
                  8 + index * 3
                }s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173,216,230,0.5) 40%, rgba(135,206,235,0.3) 70%, rgba(173,216,230,0.1) 100%)",
                  boxShadow:
                    "inset -5px -5px 15px rgba(255,255,255,0.6), 0 0 15px rgba(135,206,250,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={logo}
                  alt={`Floating Logo ${index}`}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}

          {[Logo4, Logo5, Logo6].map((logo, index) => (
            <div
              key={index + 3}
              style={{
                position: "absolute",
                top: `${15 + index * 10}%`,
                right: `${5 + index * 8}%`,
                animation: `floatAnimX${index + 3} ${
                  9 + index * 3
                }s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(173,216,230,0.5) 40%, rgba(135,206,235,0.3) 70%, rgba(173,216,230,0.1) 100%)",
                  boxShadow:
                    "inset -5px -5px 15px rgba(255,255,255,0.6), 0 0 15px rgba(135,206,250,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={logo}
                  alt={`Floating Logo ${index + 3}`}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
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
  );
};

export default Clients;
