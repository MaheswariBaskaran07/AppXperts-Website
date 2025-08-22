import React, { useEffect, useState , useRef} from "react";
import aboutBanner from "../assets/About/AboutBanner.png"; // background image
import image from '../assets/About/ERP.png'
import Quality from '../assets/About/Quality.png'
import Frame from '../assets/About/Frame.png'
import CEO from '../assets/About/CEO.png'
import Flutter from '../assets/About/FlutterDev.png'
import UIUX from '../assets/About/UIUX.png'
import BackEndDev from '../assets/About/BackEndDev.png'
import FrontEndDev from '../assets/About/FrontEndDev.png'


const About = () => {
  const slides = [
    { id: 1, img: FrontEndDev, title: "Frontend Developer" },
    { id: 2, img: BackEndDev, title: "Backend Developer" },
    { id: 3, img: CEO, title: "CEO" },
    { id: 4, img: Flutter, title: "Flutter Developer" },
    { id: 5, img: UIUX, title: "UI/UX Designer" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // auto slide every 3 sec
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
    <div
      style={{
        position: "relative",
        textAlign: "center",
        padding: "40px 20px 100px", // 👈 less padding on top
        fontFamily: "Poppins",
        backgroundImage: `url(${aboutBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // 👈 align content to top
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Radial Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", marginTop: "50px" }}>
        {/* Badge */}
        <span
          style={{
            display: "block",          // 👈 force block so margins apply properly
            background: "#003399",
            color: "white",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "500",
            transform: "rotate(-20deg)",
            marginBottom: "-25px",      // 👈 now this will work
            marginLeft: "100px", 
            width: "fit-content"       // 👈 keeps background only around text
          }}
        >
          About Us
        </span>
        {/* Heading */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            margin: "20px 0",
            color: "#000",
          }}
        >
          Innovating Tomorrow,
          <br />
          Today.
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          At AppXperts, we blend cutting-edge technology with innovative design
          to build software that powers your business growth. From custom
          applications to enterprise solutions, we help businesses digitally
          transform with confidence.
        </p>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        fontFamily: "Poppins",
        minHeight: "300px",
        // background: "#bcd7f1ff", // ✅ Solid light blue
      }}
    >
      {/* Left Column */}
      <div style={{ flex: 1, paddingRight: "40px", color: "#000" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          Who are we?
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
          We're a close-knit team of UI/UX designers, developers, and strategists who
          believe in blending creativity with functionality. At our core, we’re thinkers
          and doers — constantly learning, adapting, and delivering with purpose.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
          Whether it’s designing enterprise-grade systems or crafting elegant brand
          identities, our goal remains the same: to empower businesses with tech that
          works and design that speaks.
        </p>

        <button
          style={{
            background: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "12px 28px",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Read more →
        </button>
      </div>

      {/* Right Column */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <div
          style={{
            width: "390px",
            height: "220px",
            backgroundColor: "#ccc",
            borderRadius: "30% / 50%", // oval shape
            margin: "0 auto 20px",
          }}
        >
          {/* If you want image instead of gray shape */}
          {/* <img src={aboutImg} alt="About" style={{ width: "100%", height: "100%", borderRadius: "50% / 30%", objectFit: "cover" }} /> */}
        </div>

        <p style={{ fontSize: "14px", color: "#000" }}>
          AppXperts: We don’t just build digital products. We build experiences.
        </p>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 80px",
        background: "linear-gradient(to bottom right, #f9f9f9, #eaf1ff)",
        fontFamily: "Poppins",
      }}
    >
      {/* Left Section */}
        <div style={{ flex: 1.5, paddingRight: "40px" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Turning Ideas into <br /> Real-World Impact
          </h2>

          {/* Floating pill badge */}
          <span
            style={{
              position: "absolute",
              top: "-8px",          // ⬅️ increase to move further DOWN
              right: "-45px",        // ⬅️ adjust horizontal position
              display: "inline-block",
              background: "#004aad",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
              transform: "rotate(20deg)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            What we do?
          </span>
        </div>
        <div
          style={{
            position: "relative",
            background: `url(${image}) no-repeat center center / cover`,
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            minHeight: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // push content to bottom
          }}
        >
          {/* Small Card at Bottom */}
         <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#0000000A", // transparent effect
              backdropFilter: "blur(61.886817932128906px)", // glass effect
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 1)",
              minWidth: "95px",
              fontFamily: "Poppins",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#ffffff", margin: 0 }}>320+</h3>
            <p style={{ fontSize: "12px", color: "#ffffff", margin: 0 }}>
              Projects Successfully
            </p>
            <p style={{ fontSize: "12px", color: "#ffffff", margin: 0 }}>Delivered</p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "#0000000A",
              backdropFilter: "blur(61.886817932128906px)",
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left", // ✅ make consistent
              boxShadow: "0 4px 20px rgba(255, 255, 255, 1)",
              minWidth: "95px",
              fontFamily: "Poppins",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#ffffff", margin: 0 }}>92.1%</h3>
            <p style={{ fontSize: "12px", color: "#ffffff", margin: 0 }}>
              Client Satisfaction
            </p>
            <p style={{ fontSize: "12px", color: "#ffffff", margin: 0 }}>Rate</p>
          </div>
        </div>
        </div>
      </div>

      {/* Right Section */}
        <div style={{ flex: 1, paddingLeft: "40px" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "40px" }}>
            <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          At AppXperts, we bridge creativity with functionality. Whether you’re
          launching a product, building a platform, or crafting your brand story
          — we help you bring your vision to life with precision, clarity, and
          style.
        </p>
          </div>
        

        {/* Feature Boxes */}
        <div
          style={{
            background: "#dadbe2ff",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Quality} // 👉 replace with your image path
            alt="icon"
            style={{
                width: "35px",   // same size as fontSize before
                height: "35px",
                marginRight: "12px",
                marginBottom: "35px", // 👈 adjust for better alignment
              }}
          />
          <div>
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Innovative Builds
            </h4>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Building the apps and infrastructure that your business runs on.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#dadbe2ff",
            borderRadius: "12px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={Quality} // 👉 replace with your image path
            alt="icon"
            style={{
              width: "35px",   // same size as fontSize before
              height: "35px",
              marginRight: "12px",
              marginBottom: "15px", // 👈 adjust for better alignment
            }}
          />
          <div>
            <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Seamless Execution
            </h4>
            <p style={{ fontSize: "16px", color: "#666" }}>
              Delivering your vision with precision and speed.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Poppins",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#111",
        }}
      >
        Why Choose Us?
      </h2>
      <p
        style={{
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.6",
          maxWidth: "700px",
          margin: "0 auto 50px auto",
        }}
      >
        At AppXperts, we don’t just build digital products — we craft solutions
        that <br/>matter. Here’s why businesses trust us:
      </p>

      {/* Features */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          textAlign: "left",
          marginBottom: "30px",
        }}
      >
        {[
          {
            title: "End-to-End Expertise",
            desc: "From branding and UI/UX to full-stack development and marketing — we handle it all under one roof.",
          },
          {
            title: "Customized Solutions",
            desc: "We tailor every project to your specific business needs, not a one-size-fits-all template.",
          },
          {
            title: "Creative + Technical Blend",
            desc: "Our team merges creative vision with engineering precision, ensuring aesthetic yet functional outcomes.",
          },
          {
            title: "On-Time, On-Point Delivery",
            desc: "We value your time. That’s why we meet deadlines with quality intact, every single time.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "15px",
              padding: "20px",
              border: "1px solid #eee",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)")
            }
          >
            <img
              src={Quality}
              alt="icon"
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
            />
            <div>
              <p style={{ fontWeight: "600", fontSize: "20px", margin: "0 0 8px" }}>
                {item.title}
              </p>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <img
          src={Frame}
          alt="Why Choose Us"
          style={{ width: "100%", display: "block" }}
        />
      </div>
    </div>
    
    <div
      style={{
        background: "linear-gradient(to right, #f8f9fa, #eef5f9)",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "Poppins",
      }}
    >
      {/* Label */}
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "4px 12px",
          marginBottom: "10px",
          marginLeft: "-400px", 
          transform: "rotate(-20deg) translateY(30px)", // ⬇️ rotation + move down
        }}
      >
        Our Team
      </span>

      {/* Heading */}
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          margin: "10px 0 40px 0",
          color: "#222",
        }}
      >
        The Brains Behind <br /> the Build
      </h2>

      {/* Team Cards */}
      <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        margin: "auto",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <div style={{ display: "flex", gap: "20px", transition: "all 0.5s" }}>
        {slides.map((slide, index) => {
          // Distance from current slide
          const offset = (index - current + slides.length) % slides.length;

          // Adjust scaling and position
          let scale = 0.7;
          let opacity = 0.5;
          if (offset === 0) {
            scale = 1.2; // center image bigger
            opacity = 1;
          } else if (offset === 1 || offset === slides.length - 1) {
            scale = 0.9; // sides slightly bigger
            opacity = 0.8;
          }

          return (
            <div
              key={slide.id}
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: "transform 0.5s, opacity 0.5s",
                textAlign: "center",
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                style={{
                  width: "160px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: offset === 0 ? "0 8px 20px rgba(0,0,0,0.3)" : "none",
                }}
              />
              <p style={{ marginTop: "10px", fontWeight: "600" }}>{slide.title}</p>
            </div>
          );
        })}
      </div>
    </div>

    </div>
    </>
  );
};

export default About;
