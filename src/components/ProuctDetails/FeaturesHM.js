import React from "react";
import "./FeaturesHM.css"; // 👈 new CSS file
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/Hospital_in.png";

const FeaturesHM = () => {
  const features = [
    {
      title: "Patient Record Management",
      description:
        "Maintain complete electronic medical records including demographics, history, prescriptions, and reports.",
      icon: IT,
    },
    {
      title: "Appointment & Scheduling",
      description:
        "Easily manage doctor appointments, patient queues, and schedules with real-time updates.",
      icon: IT,
    },
    {
      title: "",
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Billing & Insurance",
      description:
        "Simplify billing with automated invoices, payment tracking, and integration with insurance providers.",
      icon: IT,
    },
    {
      title: "Lab & Pharmacy Integration",
      description:
        "Seamlessly connect labs and pharmacies for test requests, results, and medication dispensing.",
      icon: IT,
    },
    {
      title: "Reports & Analytics",
      description:
        "Generate insights with detailed reports on patient care, hospital performance, and resource utilization.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      <h2>Key Features of Our HMS</h2>

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

export default FeaturesHM;
