import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Clintlogo from "../../assets/images/gallery/gallery-1-8.jpg";
import erp from "../../assets/images/gallery/gallery-1-2.jpg";
import vsb from "../../assets/images/gallery/gallery-1-3.jpg";
import halal from "../../assets/images/gallery/gallery-1-1.jpg";
import "./Testimonials.css";

// 3D Carousel Component
function Carousel3D({ testimonials }) {
  const [angle, setAngle] = useState(0);
  const cardCount = testimonials.length;
  // Increase the radius to spread out the cards more and avoid overlap
  const radius = 1000; // was 400

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - 360 / cardCount);
    }, 4000);
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
          const isFront = Math.abs(((angle % 360) + 360) % 360 - cardAngle) < 1; // true if this card is at the front

          return (
            <div
              key={i}
              className="carousel-3d-card"
              style={{
                transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                transition: "transform 0.7s cubic-bezier(.4,2,.6,1)",
                zIndex: isFront ? 2 : 1,
                boxShadow: isFront ? "0 8px 32px #1a3fa633" : "none",
                scale: isFront ? 1.08 : 1,
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
    text: `AppXperts have a Strong team and the Lead... competency to develop any type of projects... to the core of the expectation and requirements needs of the cient... with our experience.`,
    name: "Halal India",
    img: halal,
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
  {
    text: `“Many designers listen but do not understand. Appxperts' staff listens to the organization's heartbeat and designs to the highest quality. We have worked with Logo Design.”`,
    name: "Salsabeel",
    role: "CEO",
  },
  {
    text: `“We got our logo to exactly what I desired within days. They were incredible. They were so helpful and complimentary of his team that it was a no-brainer. I will absolutely back for future (and all) projects. Thank you very much!”`,
    name: "Fortune Consultancy",
    role: "CEO",
  },
  {
    text: `“We appreciate their flexibility and customer-centric approach." We have got more followers and increased brand awareness in the market since working with Appxperts.”`,
    name: "Bro Go Burgers",
    role: "CEO",
  },
  {
    text: `“In a short period, we boosted our engagement by 900% and our following by 80%." In addition, we improved our content planning processes.”`,
    name: "Petpluz",
    role: "CEO",
  },
  {
    text: `“We are really satisfied with the website that Appxperts designed for us. It is looking good, clean, easy to navigate, and responsive - everything we asked for.”`,
    name: "TSL Nutraceuticals",
    role: "CEO",
  },
  {
    text: `“We highly recommend Appxperts to anyone looking for help with their social media marketing. The team is extremely knowledgeable and helped me grow my online presence significantly.”`,
    name: "Krishna sweets & Restaurant",
    role: "CEO",
  },
  {
    text: `“Appxperts is the best Instagram marketing service I've ever used. They are experts at creating engaging content and hastags that gets results. My business has grown exponentially since I started working with Appxperts.”`,
    name: "Toni & Guy",
    role: "CEO",
  },
  // --- New Testimonials Below ---
  {
    text: `Appxperts has been a game-changer for my business. I've been working with them for a few months now on my social media marketing, and the results have been incredible.`,
    name: "Iceland",
  },
  {
    text: `Appxperts has helped me grow my social media following and get more engagement on my posts. They're great at finding the right strategies for each platform and always keeping up with the latest trends. Highly recommend!`,
    name: "PSR Trust",
  },
  {
    text: `They've helped me grow our online presence and expand my reach. I highly recommend them to anyone looking for social media marketing services.`,
    name: "Panseas",
  },
  {
    text: `We highly recommend them to anyone looking for a top-notch social media marketing service.`,
    name: "Makanmate",
    role: "CEO",
  },
  {
    text: `Appxperts is a great service for social media marketing. They are very responsive and always deliver great results`,
    name: "Sankranti Fresh",
    role: "CEO",
  },
  {
    text: `Appxperts is the best! They helped me grow my social media following and get more engaged with my customers.`,
    name: "Usnam",
    role: "CEO",
  },
  {
    text: `They designed my website and have helped me grow my social media following.They're always coming up with new, creative ideas to help me stand out from the competition.`,
    name: "SSR (ssr Indian Snacks)",
    role: "CEO",
  },
  {
    text: `They always do an amazing job on my brochures, flyers and posters, and they're always very quick to respond to any changes or requests I have.`,
    name: "Chennai Car Care",
    role: "CEO",
  },
  {
    text: `We highly recommend Appxperts to any business owner looking for amazing graphics and excellent customer service.`,
    name: "Protect Ai",
    role: "CEO",
  },
];

// Testimonial Card: Only show image if present, only show role if present
const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card"
  style={{
      minHeight: 500,
      maxHeight: 500,
      height: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
    }}>
    <p>{testimonial.text}</p>
    <div style={{ display: "flex", margin: "10px 0" }}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={16} color="#00eaff" />
      ))}
    </div>
    <div className="testimonial-header">
      {testimonial.img && (
        <img src={testimonial.img} alt={testimonial.name} />
      )}
      <div>
        <h4>{testimonial.name}</h4>
        {testimonial.role && (
          <p style={{ color: "var(--secondary)", margin: 0 }}>
            {testimonial.role}
          </p>
        )}
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
