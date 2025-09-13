import React from "react";
import "./FeaturesHRMS.css"; // 👈 Add CSS here
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/HRM_in.png";

const FeaturesHRMS = () => {
  const features = [
    {
      title: "Employee Database Management",
      description:
        "Maintain a centralized record of all employees with personal details, job history, and documents.",
      icon: IT,
    },
    {
      title: "Payroll & Compensation",
      description:
        "Automate salary processing, tax calculations, and generate payslips with accuracy.",
      icon: IT,
    },
    {
      title: "", // Placeholder for illustration
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Attendance & Leave Management",
      description:
        "Track attendance, manage shift scheduling, and simplify leave requests with approval workflows.",
      icon: IT,
    },
    {
      title: "Performance & Appraisals",
      description:
        "Evaluate employee performance, set KPIs, and manage appraisals with transparent reviews.",
      icon: IT,
    },
    {
      title: "Recruitment & Onboarding",
      description:
        "Streamline hiring, manage applicant tracking, and simplify employee onboarding with digital forms.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      <h2>Key Features of Our HRMS</h2>

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

export default FeaturesHRMS;
