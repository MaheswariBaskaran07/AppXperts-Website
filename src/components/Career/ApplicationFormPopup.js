import React from "react";
import "./apply.css"; // Import the CSS file

export default function JobApplicationPopup({ open, setOpen }) {
  if (!open) return null;

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif", // ✅ Poppins font
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    color: "#1C1C1C",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif", // ✅ Poppins font
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        fontFamily: "'Poppins', sans-serif", // ✅ Poppins applied globally
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          maxWidth: "950px",
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          borderRadius: "12px",
          padding: "40px",
          background: "#FAF9F9",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          fontFamily: "'Poppins', sans-serif", // ✅ Apply here also
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#1C1C1C",
            marginBottom: "28px",
            textAlign: "left", // ✅ Heading left aligned
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Job Application Form
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* First & Last Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>First Name</label>
              <input type="text" placeholder="Steve" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input type="text" placeholder="Rogers" style={inputStyle} />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="steve@example.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input type="tel" placeholder="+1 234 567" style={inputStyle} />
            </div>
          </div>

          {/* Position Applying For */}
          <div>
            <label style={labelStyle}>Position Applying For</label>
            <select style={inputStyle}>
              <option value="">Select a position</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
          </div>

          {/* Total & Relevant Experience */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>Total Experience</label>
              <input type="text" placeholder="5 years" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Relevant Experience</label>
              <input type="text" placeholder="3 years" style={inputStyle} />
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <label style={labelStyle}>Technical Skills</label>
            <textarea
              placeholder="Enter your skills"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Current CTC & Expected CTC */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>Current CTC</label>
              <input type="text" placeholder="5,00,000" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Expected CTC</label>
              <input type="text" placeholder="6,00,000" style={inputStyle} />
            </div>
          </div>

          {/* Notice Period & Current Location */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>Notice Period</label>
              <input type="text" placeholder="30 days" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Current Location</label>
              <input type="text" placeholder="Bangalore" style={inputStyle} />
            </div>
          </div>

          {/* Upload Resume */}
          <div>
            <label style={labelStyle}>Upload Resume</label>
            <div
              style={{
                border: "1px dashed #ccc",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
              <p
                style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}
              >
                Upload in PDF, DOC, or JPG format
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* ✅ aligned to right */}
             <button type="submit" class="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
