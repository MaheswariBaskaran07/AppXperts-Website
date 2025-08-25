import React from "react";
import IT from "../../assets/Services/IT.png";
import featureImage from '../../assets/ProductDetails/Features Overview-pana 1.png'

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
      title: "", // Placeholder box like in your screenshot
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
    <div
      style={{
        fontFamily: "Poppins",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Section Title */}
      <h2 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "15px" }}>
        Key Features of Our ERP
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns layout
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
                backgroundColor: feature.placeholder ? "#f9f9f9" : "#f9f9f9",
                padding: feature.placeholder ? "0" : "45px 40px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: feature.placeholder
                ? "0 4px 12px rgba(0,0,0,0.05)"
                : "0 4px 12px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                textAlign:'left',
                minHeight: "280px",
            }}
            >
            {feature.placeholder ? (
                <img
                    src={feature.icon}
                    alt="Placeholder"
                    style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",   // cover ensures it fills card neatly
                    borderRadius: "12px", // keep same card roundness
                    }}
                />
                ) : (
                <>
                    {/* Circle Icon */}
                    <div
                    style={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                    >
                    <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        }}
                    />
                    </div>

                    {/* Title */}
                    <h3
                    style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                    }}
                    >
                    {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                    style={{
                        fontSize: "16px",
                        color: "#555",
                        lineHeight: "1.6",
                    }}
                    >
                    {feature.description}
                    </p>
                </>
            )}
            </div>
            ))}
          </div>
    </div>
  );
};

export default FeaturesSection;
