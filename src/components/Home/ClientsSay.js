import {useState} from "react";
import Blog from "../../assets/Home/Blog.png";
import mindGate from "../../assets/Home/Group 389.png";
import erp from "../../assets/Home/erp.png"
import BookNowPopup from "../BookNowPopup";
const testimonials = [
  {
    company: "Mindgate Solutions",
    text: "AppXperts provided skilled professionals who integrated smoothly with our team, ensuring project success with reliability and expertise.",
    author: "Vaidevi | Manager",
    logo: mindGate
  },
  {
    company: "Celeste Birch",
    text: "AppXperts delivered talented professionals who seamlessly aligned with our workflows, bringing consistency, expertise, and dedication to achieve project success.",
    author: "Dennis | Founder",
    logo: erp
  }
];

const ClientsSay = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <><section
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(120deg, #f8fafc 65%, #eaf6fb 100%)",
        padding: "80px 60px",
        fontFamily: "Poppins",
        gap: "48px"
      }}
    >
      {/* Title and paragraph spread across top */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: 10 }}>
        <h2
          style={{
            fontSize: 60,
            fontWeight: 200,
            color: "#222",
            lineHeight: 1.2,
            minWidth: 400,
            maxWidth: 600,
            margin: 0,
            textAlign: "left"
          }}
        >
          What Our Clients Are Saying
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#444",
            lineHeight: 1.7,
            margin: 0,
            textAlign: "left",
            maxWidth: 480,
            flex: 1
          }}
        >
          Our clients are at the heart of everything we do. <br />
          Each testimonial reflects our commitment to delivering value. <br />
          From concept to execution, we walk the journey with them. <br />
          Read what they have to say about working with us.
        </p>
      </div>

      {/* Testimonials and blog image in same row */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 48 }}>
        {/* Testimonials */}
        <div style={{ flex: 1, maxWidth: 600, display: "flex", flexDirection: "column", gap: 24 }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                padding: "26px 28px",
                display: "flex",
                alignItems: "center",
                gap: 22
              }}
            >
              <div style={{ flex: 1, textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: 28, color: "#1a3fa6", marginBottom: 8 }}>
                  {t.company}
                </div>
                <div style={{ fontSize: 17, color: "#222", marginBottom: 12 }}>
                  {t.text}
                </div>
                <div style={{ fontSize: 12, color: "#666", fontWeight: 500 }}>{t.author}</div>
              </div>
              <img
                src={t.logo}
                alt="Company Logo"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  objectFit: "contain",
                  background: "#f8fafc",
                  boxShadow: "0 2px 8px #1a3fa611"
                }} />
            </div>
          ))}
        </div>
        {/* Blog image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={Blog}
            alt="Clients Illustration"
            style={{
              width: 480,
              maxWidth: "100%",
              borderRadius: 22,
              boxShadow: "0 4px 32px #1a3fa611",
              background: "#fff",
              padding: 8
            }} />
        </div>
      </div>
    </section><section className="booking-section">
        <div className="booking-content">
          <h2>Let’s build something great.</h2>
          <p>Your idea, our craft.</p>
          <button onClick={() => setIsOpen(true)} className="submit-button">
            Book a meeting →
          </button>
        </div>
        <BookNowPopup open={isOpen} setOpen={setIsOpen} />
      </section></>
  );
};

export default ClientsSay;
