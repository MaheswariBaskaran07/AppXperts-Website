import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Clintlogo from "../../assets/images/gallery/gallery-1-8.jpg";
import erp from "../../assets/images/gallery/gallery-1-2.jpg"
import vsb from "../../assets/images/gallery/gallery-1-3.jpg"
import "./Testimonials.css";
import { img } from "framer-motion/client";

// 3D Carousel Component
function Carousel3D({ testimonials }) {
  const [angle, setAngle] = useState(0);
  const cardCount = testimonials.length;
  const radius = 400;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - 360 / cardCount);
    }, 8000);
    return () => clearInterval(interval);
  }, [cardCount]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-3d"
        style={{ transform: `translateZ(-${radius}px) rotateY(${angle}deg)` }}
      >
        {testimonials.map((t, i) => {
          const cardAngle = (360 / cardCount) * i;
          return (
            <div
              key={i}
              className="carousel-3d-card"
              style={{
                transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const testimonials = [
  {
    text: `“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”`,
    name: "Vadivel Shanmugam",
    role: "Manager",
    img: Clintlogo,
  },
  {
    text: `“The design and user experience exceeded our expectations. The team was attentive to our needs and delivered a beautiful, functional website ahead of schedule.”`,
    name: "VSB Builders",
    role: "CEO",
    img: vsb,
  },
  {
    text: `“Excellent technical expertise! Our custom ERP solution works flawlessly and has streamlined our business operations. Support is always responsive.”`,
    name: "Celeste Birch",
    role: "CEO",
    img: erp,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <p>{testimonial.text}</p>
    <div style={{ display: "flex", margin: "10px 0" }}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={16} color="#00eaff" />
      ))}
    </div>
    <div className="testimonial-header">
      <img src={testimonial.img} alt={testimonial.name} />
      <div>
        <h4>{testimonial.name}</h4>
        <p style={{ color: "var(--secondary)", margin: 0 }}>
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto 10px auto",
          gap: "20px",
          textAlign: "left",
        }}
      >
 < h2
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
      <Carousel3D testimonials={testimonials} />
    </section>
  );
}
