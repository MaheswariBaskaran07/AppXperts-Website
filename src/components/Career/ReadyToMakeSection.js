import React , { useState } from "react";
import "./apply.css"; // Import the CSS file
import JobApplicationPopup from "./ApplicationFormPopup";

const ReadyToMakeSection = () => {

    const [isOpen, setIsOpen] = useState(false);


  return (
    <section className="apply-section">
      <div className="apply-content">
        <h2>Ready to Make an Impact ?.</h2>
        <p>Let's create a future together.</p>
         <button onClick={() => setIsOpen(true)} className="apply-button">
          Apply Now →
        </button>
      </div>

      <JobApplicationPopup open={isOpen} setOpen={setIsOpen} />
    </section>
  );
};

export default ReadyToMakeSection;
