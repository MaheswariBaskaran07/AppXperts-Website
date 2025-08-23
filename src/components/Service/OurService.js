import React from "react";
import IT from "../../assets/Services/IT.png";
import Digital from "../../assets/Services/Digital.png";
import Brand from "../../assets/Services/Brand.png";
import Website from "../../assets/Services/Website.png";

const OurService = () => {
  const services = [
    {
      title: "IT Software Development",
      description:
        "Customized software solutions tailored to your business goals, ensuring performance, scalability, and seamless integration.",
      icon: IT,
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence through SEO, social media, paid ads, and content strategies that drive measurable results.",
      icon: Digital,
    },
    {
      title: "", // empty placeholder (gray box like in screenshot)
      description: "",
      icon: null,
      placeholder: true,
    },
    {
      title: "Brand Identity",
      description:
        "Crafting strong, memorable brand identities that resonate with your audience and build long-term trust.",
      icon: Brand,
    },
    {
      title: "Website Development & Maintenance",
      description:
        "Customized software solutions tailored to your business goals, ensuring performance, scalability, and seamless integration.",
      icon: Website,
    },
    {
      title: "Resource Outsourcing",
      description:
        "Boost your online presence through SEO, social media, paid ads, and content strategies that drive measurable results.",
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
        Our Services
      </h2>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px auto",
          color: "#555",
          fontSize: "15px",
          lineHeight: "1.6",
        }}
      >
        At Appyxperts, we specialize in delivering smart, scalable, and seamless
        digital solutions tailored to your business needs. Whether you're
        launching a startup, streamlining enterprise workflows, or building your
        online presence, our team brings innovation and reliability to every
        project.
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // exactly 3 per row
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: service.placeholder ? "#d9d9d9" : "#f9f9f9",
              padding: service.placeholder ? "0" : "30px 20px",
              borderRadius: "12px",
              textAlign: "left",
              boxShadow: service.placeholder
                ? "none"
                : "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: service.placeholder ? "center" : "flex-start",
              alignItems: service.placeholder ? "center" : "flex-start",
              minHeight: "220px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!service.placeholder) {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 16px rgba(0,0,0,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (!service.placeholder) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.05)";
              }
            }}
          >
            {!service.placeholder && (
              <>
                {/* Circle Icon */}
                <div
                  style={{
                    // background: "linear-gradient(135deg,#1976d2,#42a5f5)",
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
                    src={service.icon}
                    alt={service.title}
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
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
