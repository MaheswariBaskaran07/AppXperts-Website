import React from "react";
import "./FeaturesCRM.css"; // 👈 new css
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/CRM_in.png";

const FeaturesCRM = () => {
  const features = [
    {
      title: "Centralized Customer Data",
      description:
        "Get a 360° view of every customer, from contact details and history to preferences and interactions.",
      icon: IT,
    },
    {
      title: "Sales Pipeline Management",
      description:
        "Track leads, opportunities, and deals in real-time to close more sales faster.",
      icon: IT,
    },
    {
      title: "", // Placeholder box
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Automated Workflows",
      description:
        "Automate routine tasks like follow-ups, reminders, and notifications to save time.",
      icon: IT,
    },
    {
      title: "Advanced Analytics",
      description:
        "Leverage reports and dashboards to forecast sales, track performance, and spot opportunities.",
      icon: IT,
    },
    {
      title: "Seamless Integrations",
      description:
        "Connect easily with email, ERP, marketing tools, and other apps for a unified ecosystem.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      <h2>Key Features of Our CRM</h2>

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

export default FeaturesCRM;
