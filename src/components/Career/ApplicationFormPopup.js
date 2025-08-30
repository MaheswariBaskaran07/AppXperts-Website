import React, { useState } from "react";
import "./apply.css"; 
import { toast, ToastContainer } from "react-toastify"; // ✅ use react-toastify
import "react-toastify/dist/ReactToastify.css";


export default function JobApplicationPopup({ open, setOpen }) {
  // ✅ state for form
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    MobileNo: "",
    ApplyingPosition: "",
    TotalExperience: "",
    RelevantExperience: "",
    TechicalSkills: "",
    CurrentCTC: "",
    ExpectedCTC: "",
    NoticePeriod: "",
    CurrentLocation: "",
    UploadResume: null, // base64
    Status: "Applied",
    Remarks: "",
    CreateDate: new Date().toISOString(),
  });

  if (!open) return null;

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    color: "#1C1C1C",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
  };

  // ✅ handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ handle file upload -> convert to base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1]; // remove metadata
      setFormData({ ...formData, UploadResume: base64String });
    };
    reader.readAsDataURL(file);
  };

  // ✅ handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3015/api/job-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Application submitted successfully");
        setTimeout(() => {
          setOpen(false); // close popup
          setFormData({
            FirstName: "",
            LastName: "",
            Email: "",
            MobileNo: "",
            ApplyingPosition: "",
            TotalExperience: "",
            RelevantExperience: "",
            TechicalSkills: "",
            CurrentCTC: "",
            ExpectedCTC: "",
            NoticePeriod: "",
            CurrentLocation: "",
            UploadResume: null,
            Status: "Applied",
            Remarks: "",
            CreateDate: new Date().toISOString(),
          });
        }, 1500);
      } else {
        toast.error("Failed to submit ❌");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
  toast.error("Server error ❌");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
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
        fontFamily: "'Poppins', sans-serif",
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
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "28px" }}>
          Job Application Form
        </h2>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          {/* First & Last Name */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input
                type="text"
                name="FirstName"
                placeholder="Steve"
                style={inputStyle}
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                type="text"
                name="LastName"
                placeholder="Rogers"
                style={inputStyle}
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="Email"
                placeholder="steve@example.com"
                style={inputStyle}
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                name="MobileNo"
                placeholder="+1 234 567"
                style={inputStyle}
                value={formData.MobileNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label style={labelStyle}>Position Applying For</label>
            <select
              name="ApplyingPosition"
              style={inputStyle}
              value={formData.ApplyingPosition}
              onChange={handleChange}
              required
            >
              <option value="">Select a position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
          </div>

          {/* Experience */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={labelStyle}>Total Experience</label>
              <input
                type="number"
                name="TotalExperience"
                placeholder="5"
                style={inputStyle}
                value={formData.TotalExperience}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Relevant Experience</label>
              <input
                type="number"
                name="RelevantExperience"
                placeholder="3"
                style={inputStyle}
                value={formData.RelevantExperience}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label style={labelStyle}>Technical Skills</label>
            <textarea
              name="TechicalSkills"
              placeholder="Enter your skills"
              style={{ ...inputStyle, resize: "vertical" }}
              value={formData.TechicalSkills}
              onChange={handleChange}
              required
            />
          </div>

          {/* CTC */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={labelStyle}>Current CTC</label>
              <input
                type="number"
                name="CurrentCTC"
                placeholder="50000"
                style={inputStyle}
                value={formData.CurrentCTC}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={labelStyle}>Expected CTC</label>
              <input
                type="number"
                name="ExpectedCTC"
                placeholder="60000"
                style={inputStyle}
                value={formData.ExpectedCTC}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Notice & Location */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div>
              <label style={labelStyle}>Notice Period (days)</label>
              <input
                type="number"
                name="NoticePeriod"
                placeholder="30"
                style={inputStyle}
                value={formData.NoticePeriod}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={labelStyle}>Current Location</label>
              <input
                type="text"
                name="CurrentLocation"
                placeholder="City"
                style={inputStyle}
                value={formData.CurrentLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Resume */}
          <div>
            <label style={labelStyle}>Upload Resume</label>
            <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} />
          </div>

          {/* Remarks */}
          <div>
            <label style={labelStyle}>Remarks</label>
            <textarea
              name="Remarks"
              placeholder="Additional info"
              style={{ ...inputStyle, resize: "vertical" }}
              value={formData.Remarks}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
