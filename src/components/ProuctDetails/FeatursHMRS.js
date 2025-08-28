import React from "react";
import IT from "../../assets/Services/IT.png";
import featureImage from "../../assets/ProductDetails/Features Overview-pana 1.png";

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
    <div
      style={{
        fontFamily: "Poppins",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Section Title */}
      <h2
        style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "15px" }}
      >
        Key Features of Our HRMS
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f9f9f9",
              padding: feature.placeholder ? "0" : "45px 40px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
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
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <>
                {/* Icon */}
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
                    fontSize: "24px",
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

export default FeaturesHRMS;
