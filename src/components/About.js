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
import Keerthana from '../assets/About/Keerthana.png'
import Karthi from '../assets/About/Karthi.png'
import Prakash from '../assets/About/Prakash.png'
import Rabi from '../assets/About/Rabi.png'
import Karthika from '../assets/About/Karthika.png'
import HR from '../assets/About/HR.png'
import ved from "../assets/About/about.mp4";


const About = () => {
  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setWhatWeDoVisible(true), 600);
  }, []);
  const [aboutBadgeVisible, setAboutBadgeVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setAboutBadgeVisible(true), 200);
  }, []);
  const slides = [
    { id: 1, img: CEO, title: "Mohamed Aasif", description: "CEO" },
    { id: 2, img: Rabi, title: "Mohamed Rabi", description: "Backend Developer" },
    { id: 3, img: BackEndDev, title: "Rajeswari", description: "Backend Developer" },
    { id: 4, img: Flutter, title: "Nagajothika",description:"Flutter Developer" },
    { id: 5, img: FrontEndDev, title: "Maheswari", description: "Frontend Developer" },
    { id: 6, img: UIUX, title: "Merin Albert",description:"UI/UX Designer" },
    { id: 7, img: Keerthana, title: "Keerthana", description: "Frontend Developer" },
    { id: 8, img: Karthi, title: "Karthikeyan", description: "Frontend Developer" },
    { id: 9, img: Prakash, title: "Prakash", description: "QA Engineer" },
    { id: 10, img: Karthika, title: "Karthika",description:"UI/UX Designer" },
       { id: 11, img: HR, title: "Sunitha", description: "Human Resource Manager" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedSlides = [...slides, ...slides];

  const [offset, setOffset] = useState(0);
  const slideWidth = 250; // card width + margin

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 1;
        // reset when half list is scrolled
        return newOffset >= slides.length * slideWidth ? 0 : newOffset;
      });
    }, 15); // smaller = faster scroll

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
            display: "block",
            background: 'linear-gradient(180deg, #46cff8ff 0%, #0d48eaff 100%)',
            color: "white",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "500",
            transform: `rotate(-20deg) translateY(${aboutBadgeVisible ? '0' : '-40px'})`,
            opacity: aboutBadgeVisible ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
            marginBottom: "-25px",
            marginLeft: "100px",
            width: "fit-content"
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
          className="submit-button"
          onClick={() => window.location.href = "/services"} // Navigate to Services page
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
            borderRadius: "30% / 50%",
            overflow: "hidden",
            margin: "0 auto 20px",
            backgroundColor: "#000"
          }}
        >
          <video
            src={ved}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30% / 50%"
            }}
          />
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
              top: "-8px",
              right: "-45px",
              display: "inline-block",
              background: 'linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)',
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
              transform: `rotate(20deg)`,
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
              animation: 'floatY 2.2s ease-in-out infinite',
            }}
          >
            What we do?
            <style>
              {`
                @keyframes floatY {
                  0% { transform: rotate(20deg) translateY(0); }
                  50% { transform: rotate(20deg) translateY(-18px); }
                  100% { transform: rotate(20deg) translateY(0); }
                }
              `}
            </style>
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
            minHeight: "370px",
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
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.7)",
              minWidth: "95px",
              fontFamily: "Poppins",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#000000", margin: 0 }}>320+</h3>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>
              Projects Successfully
            </p>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>Delivered</p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderRadius: "12px",
              padding: "20px 25px",
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.7)",
              minWidth: "95px",
              fontFamily: "Poppins",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#000000", margin: 0 }}>92.1%</h3>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>
              Client Satisfaction
            </p>
            <p style={{ fontSize: "12px", color: "#000000", margin: 0 }}>Rate</p>
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
          background: "linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "4px 12px",
          marginBottom: "10px",
          marginLeft: "-400px",
          transform: "rotate(-20deg) translateY(30px)",
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

      {/* Infinite Auto Slider */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                minWidth: "200px",
                height: "300px",
                marginRight: "20px",
                borderRadius: "16px",
                perspective: "1000px", // needed for 3D flip
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                }}
                className="flip-card"
              >
                {/* Front Side */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      padding: "12px",
                      background:
                        "linear-gradient(to top, rgba(0,123,255,0.9), rgba(0,123,255,0))",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    {slide.title}
                  </div>
                </div>

                {/* Back Side */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%)",
                    color: "#fff",
                    transform: "rotateY(180deg)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "18px",
                    padding: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  {slide.description || "More Info"}
                </div>
              </div>

              {/* Hover flip with CSS */}
              <style>
                {`
                  .flip-card:hover {
                    transform: rotateY(180deg);
                  }
                `}
              </style>
            </div>

          ))}
        </div>
      </div>

      {/* 🔹 Add CSS for flip */}
      <style>
        {`
          .card:hover {
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>

    </>
  );
};

export default About;
