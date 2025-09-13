import "./FeatureSection.css"; 
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/Features Overview-pana 1.png";

const FeaturesSection = () => {
  const features = [
    {
      title: "Centralized Dashboard",
      description:
        "Manage inventory, finance, and operations in one intuitive interface for complete visibility.",
      icon: IT,
    },
    {
      title: "Real-Time Insights",
      description:
        "Access up-to-the-minute analytics and reports to make confident, data-driven decisions.",
      icon: IT,
    },
    {
      title: "", // Placeholder image card
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Customizable Workflows",
      description:
        "Adapt the system to your unique processes, ensuring it works the way your business does.",
      icon: IT,
    },
    {
      title: "Seamless Integrations",
      description:
        "Connect easily with your existing tools and software for a frictionless transition.",
      icon: IT,
    },
    {
      title: "Secure Cloud Access",
      description:
        "Work from anywhere with enterprise-grade security and reliable cloud hosting.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      {/* Section Title */}
      <h2>Key Features of Our ERP</h2>

      {/* Grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${feature.placeholder ? "placeholder" : ""}`}
          >
            {feature.placeholder ? (
              <img
                src={feature.icon}
                alt="Placeholder"
                className="feature-image"
              />
            ) : (
              <>
                {/* Circle Icon */}
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>

                {/* Title */}
                <h3>{feature.title}</h3>

                {/* Description */}
                <p>{feature.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
