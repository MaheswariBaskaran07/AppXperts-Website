import React from "react";
import { FaStar } from "react-icons/fa";
import logo from "../../assets/Client/Testimonials Card Bg.png";
// import logo from "../../assets/Client/image.png";
import Clintlogo from "../../assets/images/gallery/gallery-1-8.jpg";

const testimonials = Array.from({ length: 5 }).map((_, i) => ({
  text: `“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any
   issues I have. Highly recommend!”`,
  name: `Vadivel shanmugam`,
  role: "Manager",
}));

const TestimonialCard = ({ testimonial, glow }) => {
  return (
    <div
      style={{
        flex: "0 0 260px",
        background: "#0000000A",
        minHeight: "300px",
        color: "#000",
        padding: "30px 25px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        backdropFilter: "blur(16px)", // ✅ blur background
        WebkitBackdropFilter: "blur(16px)", // Safari support
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        scrollSnapAlign: "start",
        zIndex: 2, // ✅ ensures card stays above blue gradient
      }}
    >
      {/* Blur Glow Background (if glow = true) */}
      {glow && (
        <>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "120px",
              height: "120px",
              background: "rgba(43,111,227,0.25)",
              borderRadius: "50%",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "15%",
              right: "10%",
              width: "140px",
              height: "140px",
              background: "rgba(26,63,166,0.2)",
              borderRadius: "50%",
              filter: "blur(100px)",
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Testimonial Text */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.6",
          marginBottom: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Stars */}
      <div
        style={{
          display: "flex",
          marginBottom: "15px",
          position: "relative",
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={16} color="#fbbf24" />
        ))}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <img
          src={Clintlogo}
          alt={testimonial.name}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%", // ✅ circle image
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Client Info */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "5px" }}>
          {testimonial.name}
        </h4>
        <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "100px 20px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
        background: "#f8fafc",
        minHeight: "700px",
        marginBottom: 0,
      }}
    >
      {/* Heading + Description */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto 190px auto",
          gap: "20px",
          textAlign: "left",
        }}
      >
        {/* Left Heading */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#1a1a1a",
            flex: "1 1 40%",
            margin: 0,
          }}
        >
          What Our Clients Are Saying
        </h2>

        {/* Right Description */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000A1",
            lineHeight: 1.6,
            flex: "1 1 55%",
            margin: 0,
          }}
        >
          Our clients are at the heart of everything we do. Each testimonial
          reflects our commitment to delivering value. From concept to
          execution, we walk the journey with them. Read what they have to say
          about working with us.
        </p>
      </div>

      {/* Gradient background card on right */}
      <div
        style={{
          position: "absolute",
          top: 250,
          right: 80,
          width: "35%",
          height: 600,
          borderRadius: "50px 0 0 50px",
          backgroundImage: `url("${logo}")`,
          backgroundSize: "cover", // make image cover the div
          backgroundRepeat: "no-repeat", // no repeating
          backgroundPosition: "center", // center the image
          zIndex: 0,
          overflow: "hidden",
        }}
      />

      {/* Carousel of testimonial cards */}
      {/* Carousel of testimonial cards */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: 20,
          paddingBottom: 20,
          position: "relative",
          zIndex: 2,
          marginRight: "100px",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
          clipPath: "inset(-50px -100px 0px -100px)",
          // 👆 negative inset lets cards "go outside" the block while scrolling
        }}
        className="hide-scrollbar"
      >
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            testimonial={t}
            glow={index === 2} // ✅ fix: you passed `highlight` before
          />
        ))}
      </div>
    </section>
  );
}
