import React, { useState } from "react";
import JobApplicationPopup from "./ApplicationFormPopup";

const jobs = [
  {
    title: "Flutter Developer",
    desc: "Join our mobile team to craft high-quality, scalable, and visually stunning apps. Collaborate with designers and backend engineers to deliver seamless user experiences.",
    skills:
      "Key Skills: Dart, Flutter SDK, API Integration, UI/UX Implementation, Git",
    link: "#",
    bg: "#EFF0FF",
  },
  {
    title: "Front End Developer",
    desc: "Build interactive, responsive, and scalable web applications using React.js. Work closely with designers to turn concepts into pixel-perfect user interfaces.",
    skills:
      "Key Skills: React.js, JavaScript (ES6+), HTML, CSS, Redux, REST APIs, Git",
    link: "#",
    bg: "#DCE7FF",
  },
  {
    title: "Back End Developer",
    desc: "Design and implement robust backend services and APIs. Ensure system scalability, security, and performance for high-traffic applications.",
    skills:
      "Key Skills: Node.js, Express.js, .NET Core, REST/GraphQL APIs, SQL/NoSQL Databases, Authentication",
    link: "#",
    bg: "#FFFDEF",
  },
  {
    title: "Software Tester",
    desc: "Ensure product quality by writing and executing test cases, identifying bugs, and collaborating with developers for smooth releases.",
    skills:
      "Key Skills: Manual Testing, Automation Testing (Selenium/Jest), Test Cases, Bug Tracking, CI/CD",
    link: "#",
    bg: "#DEF7FF",
  },
  {
    title: "UI/UX Designer",
    desc: "Create visually stunning, intuitive, and user-friendly designs. Translate requirements into wireframes, mockups, and prototypes that delight users.",
    skills:
      "Key Skills: Figma, Adobe XD, Wireframing, Prototyping, Design Systems, User Research",
    link: "#",
    bg: "#FFE5E5",
  },
  {
    title: "HR Executive",
    desc: "Lead HR operations, recruitment, and employee engagement strategies. Drive talent management and foster a positive workplace culture.",
    skills:
      "Key Skills: Talent Acquisition, Employee Relations, Payroll, HR Policies, Compliance",
    link: "#",
    bg: "#FFE8FA",
  },
];

const CareerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      style={{
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto 100px auto",
          gap: "20px",
          textAlign: "left",
        }}
      >
        {/* Left Heading */}
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 500,
            color: "#1a1a1a",
            flex: "1 1 40%",
            margin: 0,
          }}
        >
          Find Your Next <br /> Role...
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
          At AppXperts, we believe that great products start with great people.
          Our culture is built on trust, creativity, and a shared passion for
          delivering impactful digital solutions. Whether you’re a developer,
          designer, marketer, or strategist, you’ll find the space to innovate,
          grow, and make a real difference.
        </p>
      </div>

      {/* Job Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "60px",
          justifyContent: "center",
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              backgroundColor: job.bg,
              padding: "28px",
              borderRadius: "18px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
              textAlign: "left",
              maxWidth: "500px",
              margin: "0 auto",
              minHeight: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                {job.title}
              </h3>
              <p
                style={{
                  color: "#000000",
                  marginBottom: "12px",
                  lineHeight: "1.6",
                  fontSize: "15px",
                  fontWeight: 400,
                }}
              >
                {job.desc}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#000000",
                  marginBottom: "20px",
                  fontWeight: 600,
                }}
              >
                {job.skills}
              </p>
            </div>
            <button
              style={{
                color: "#2563eb",
                fontFamily: "'Poppins', sans-serif",
                fontSize:"14px",
                fontWeight: "500",
                textDecoration: "none",
                marginTop: "auto",
                display: "inline-block",
                transition: "all 0.3s ease",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
              onClick={() => setIsOpen(true)}
              onMouseEnter={(e) => {
                e.target.style.color = "#1d4ed8";
                e.target.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#2563eb";
                e.target.style.transform = "translateX(0px)";
              }}
            >
              Apply Now →
            </button>

            <JobApplicationPopup open={isOpen} setOpen={setIsOpen} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
