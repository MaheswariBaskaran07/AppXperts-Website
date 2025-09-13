import React from "react";
import "./FeaturesEcommerce.css"; // 👈 added css
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/Ecommerce _in.png";

const FeaturesEcommerce = () => {
  const features = [
    {
      title: "Centralized Product Management",
      description:
        "Easily add, update, and organize products with images, categories, and pricing in one place.",
      icon: IT,
    },
    {
      title: "Seamless Order Tracking",
      description:
        "Manage the entire order lifecycle—from cart to checkout, shipping, and delivery—in real time.",
      icon: IT,
    },
    {
      title: "", // Placeholder image card
      description: "",
      icon: featureImage,
      placeholder: true,
    },
    {
      title: "Secure Payment Gateways",
      description:
        "Offer multiple payment options with top-grade security for a smooth customer checkout experience.",
      icon: IT,
    },
    {
      title: "Customer Insights & Analytics",
      description:
        "Leverage powerful dashboards to analyze customer behavior, track sales, and boost performance.",
      icon: IT,
    },
    {
      title: "Marketing & Promotions",
      description:
        "Run discounts, coupons, loyalty programs, and personalized recommendations to maximize conversions.",
      icon: IT,
    },
  ];

  return (
    <div className="features-section">
      <h2>Key Features of Our E-Commerce Platform</h2>

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

export default FeaturesEcommerce;
