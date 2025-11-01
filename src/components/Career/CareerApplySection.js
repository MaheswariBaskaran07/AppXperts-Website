import React, { useState } from "react";
import JobApplicationPopup from "./ApplicationFormPopup";

const jobs = [
  {
    title: "Flutter Developer",
    desc: "Join our mobile team to craft high-quality, scalable, and visually stunning apps. Collaborate with designers and backend engineers to deliver seamless user experiences.",
    skills:
      "Key Skills: Dart, Flutter SDK, API Integration, UI/UX Implementation, Git",
    bg: "#EFF0FF",
  },
  {
    title: "Front End Developer",
    desc: "Build interactive, responsive, and scalable web applications using React.js. Work closely with designers to turn concepts into pixel-perfect user interfaces.",
    skills:
      "Key Skills: React.js, JavaScript (ES6+), HTML, CSS, Redux, REST APIs, Git",
    bg: "#DCE7FF",
  },
  {
    title: "Back End Developer",
    desc: "Design and implement robust backend services and APIs. Ensure system scalability, security, and performance for high-traffic applications.",
    skills:
      "Key Skills: Node.js, Express.js, .NET Core, REST/GraphQL APIs, SQL/NoSQL Databases, Authentication",
    bg: "#FFFDEF",
  },
  {
    title: "Software Tester",
    desc: "Ensure product quality by writing and executing test cases, identifying bugs, and collaborating with developers for smooth releases.",
    skills:
      "Key Skills: Manual Testing, Automation Testing (Selenium/Jest), Test Cases, Bug Tracking, CI/CD",
    bg: "#DEF7FF",
  },
  {
    title: "UI/UX Designer",
    desc: "Create visually stunning, intuitive, and user-friendly designs. Translate requirements into wireframes, mockups, and prototypes that delight users.",
    skills:
      "Key Skills: Figma, Adobe XD, Wireframing, Prototyping, Design Systems, User Research",
    bg: "#FFE5E5",
  },
  {
    title: "HR Executive",
    desc: "Lead HR operations, recruitment, and employee engagement strategies. Drive talent management and foster a positive workplace culture.",
    skills:
      "Key Skills: Talent Acquisition, Employee Relations, Payroll, HR Policies, Compliance",
    bg: "#FFE8FA",
  },
];

const CareerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+919952746738"; // ✅ Replace with your WhatsApp number (with country code, no '+' sign)

  // const handleWhatsAppApply = (jobTitle) => {
  //   const message = `Hello, I'm interested in applying for the ${jobTitle} position at AppXperts. 

  //   I have attached my cv and following details for your reference.

  //   Full name 
  //   Total experience 
  //   current salary and expected salary take home monthly
  //   Notice period
  //   Technology you know
  //   Location
  //   Contact details`;
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  //   window.open(url, "_blank");
  // };

  return (
    <section
      style={{
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* 🔹 Heading + Description */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto 60px auto",
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
            flex: "1 1 350px",
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
            flex: "1 1 500px",
            margin: 0,
          }}
        >
          At <strong>AppXperts (Xperts Software Solutions Private Limited)</strong>, we believe that great products start with great people.
          Our culture is built on trust, creativity, and a shared passion for
          delivering impactful digital solutions. Whether you’re a developer,
          designer, marketer, or strategist, you’ll find the space to innovate,
          grow, and make a real difference.
        </p>
      </div>

      {/* 🔹 Job Cards Grid */}
      <div className="career-grid">
        {jobs.map((job, index) => (
          <div key={index} className="career-card" style={{ backgroundColor: job.bg }}>
            <div>
              <h3>{job.title}</h3>
              <p className="desc">{job.desc}</p>
              <p className="skills">{job.skills}</p>
            </div>
            <button
              className="apply-btn"
              // onClick={() => handleWhatsAppApply(job.title)}
              onClick={() => setIsOpen(true)}
            >
              Apply Now →
            </button>
            <JobApplicationPopup open={isOpen} setOpen={setIsOpen} />
          </div>
        ))}
      </div>

      {/* 🔹 Styles */}
      <style>
        {`
          .career-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .career-card {
            padding: 28px;
            border-radius: 18px;
            box-shadow: 0 6px 14px rgba(0,0,0,0.08);
            text-align: left;
            min-height: 260px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .career-card h3 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .career-card .desc {
            color: #000;
            margin-bottom: 12px;
            line-height: 1.6;
            font-size: 15px;
            font-weight: 400;
          }

          .career-card .skills {
            font-size: 14px;
            color: #000;
            margin-bottom: 20px;
            font-weight: 600;
          }

          .apply-btn {
            color: #2563eb;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            margin-top: auto;
            display: inline-block;
            background: transparent;
            border: none;
            cursor: pointer;
            text-align: left;
            transition: all 0.3s ease;
          }

          .apply-btn:hover {
            color: #1d4ed8;
            transform: translateX(4px);
          }

          /* 🔹 Tablet */
          @media (max-width: 1024px) {
            .career-grid {
              grid-template-columns: 1fr 1fr;
              gap: 30px;
            }

            .career-card h3 {
              font-size: 20px;
            }
          }

          /* 🔹 Mobile */
          @media (max-width: 768px) {
            .career-grid {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            h2 {
              font-size: 28px !important;
            }

            .career-card {
              padding: 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default CareerSection;
