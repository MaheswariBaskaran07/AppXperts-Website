import React from "react";
import "./FeaturesSchool.css"; // 👈 create this CSS
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/School_in.png";

const FeaturesSchool = () => {
  const features = [
    {
      title: "Student Information System",
      description:
        "Maintain complete student records including personal details, attendance, grades, and performance history.",
      icon: IT,
    },
    {
      title: "Timetable & Scheduling",
      description:
        "Easily create and manage class schedules, teacher allocations, and subject planning.",
      icon: IT,
    },
    {
      title: "", // Placeholder for image card
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Attendance & Leave Management",
      description:
        "Track daily attendance, automate leave requests, and generate attendance reports effortlessly.",
      icon: IT,
    },
    {
      title: "Exams & Report Cards",
      description:
        "Manage exam schedules, grading, and instantly generate digital report cards for students.",
      icon: IT,
    },
    {
      title: "Fee Management & Accounting",
      description:
        "Automate fee collection, receipts, due reminders, and financial reports for smooth operations.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      <h2>Key Features of Our School</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${feature.placeholder ? "placeholder" : ""}`}
          >
            {feature.placeholder ? (
              <img src={feature.icon} alt="Placeholder" className="feature-image" />
            ) : (
              <>
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSchool;
