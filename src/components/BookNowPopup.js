import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Career/apply.css"; // we’ll add responsive CSS here
import logo from "../assets/Booknow demo.png";

export default function BookNowPopup({ open, setOpen }) {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    EmailId: "",
    MobileNo: "",
    Subject: "",
    Message: "",
    Type: "Demo",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ phone validation
    if (!/^[0-9]{1,13}$/.test(formData.MobileNo)) {
      toast.error("Phone number must be up to 13 digits and contain only numbers");
      return;
    }

    // ✅ email validation
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.EmailId)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("http://localhost:3015/api/booking/AddBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.Status === true) {
        toast.success("Booking submitted successfully");
        setTimeout(() => {
          setOpen(false);
          setFormData({
            FirstName: "",
            LastName: "",
            EmailId: "",
            MobileNo: "",
            Subject: "",
            Message: "",
            Type: "Demo",
          });
        }, 1500);
      } else {
        toast.error("Failed to submit booking ❌");
      }
    } catch (error) {
      toast.error("Server error ❌");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="popup-overlay" onClick={() => setOpen(false)}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          {/* LEFT SIDE */}
          <div className="popup-left">
            <h2>Book Your Demo <br /> Now</h2>
            <p>
              See our solutions in action and discover how AppXperts can simplify,
              scale, and supercharge your business.
            </p>
            <img src={logo} alt="Demo" />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="popup-right">
            <h3>Fill the following details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>First Name</label>
                  <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} required />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>Email</label>
                  <input type="email" name="EmailId" value={formData.EmailId} onChange={handleChange} required />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="MobileNo"
                    value={formData.MobileNo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        MobileNo: e.target.value.replace(/[^0-9]/g, "").slice(0, 13),
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label>Subject</label>
                <textarea name="Subject" value={formData.Subject} onChange={handleChange} required />
              </div>

              <div>
                <label>Message</label>
                <textarea name="Message" value={formData.Message} onChange={handleChange} />
              </div>

              <div style={{ textAlign: "left" }}>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
