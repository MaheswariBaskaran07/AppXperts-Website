import React, { useState } from "react";
import "./FAQ.css";
import icon from "../../assets/Product/Icon Wrapper.png"
import cal from "../../assets/Product/Icon Wrapper (1).png"
import sub from "../../assets/Product/Button.png"
import plus from "../../assets/Product/Button (1).png"

const faqs = [
  {
    question: "Can I customize the ERP system to fit my business workflow?",
    answer:
      "Yes, our ERP is fully customizable to adapt to your industry-specific needs and processes.",
  },
  {
    question: "Is your CRM suitable for small businesses?",
    answer:
      "Yes, our CRM is designed to support small, medium, and large businesses with scalable features.",
  },
  {
    question: "Do you offer onboarding and training for HRMS users?",
    answer:
      "Absolutely! We provide onboarding sessions, training, and continuous support for HRMS users.",
  },
  {
    question: "What payment gateways are supported in your E-commerce solution?",
    answer:
      "We support multiple gateways including Stripe, PayPal, Razorpay, and more.",
  },
  {
    question: "Can hospitals use the software for appointment and billing?",
    answer:
      "Yes, our software includes modules for hospital appointment scheduling and billing management.",
  },
  {
    question: "Does your school management software support online classes?",
    answer:
      "Yes, our school management system integrates with popular online class platforms for virtual learning.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // All FAQs in a single column below heading/desc

  // Split FAQs into two columns
  const col1Faqs = faqs.slice(0, 3);
  const col2Faqs = faqs.slice(3, 6);

  return (
    <section className="faq-section">
  <div className="faq-header">
    <h2>
      Frequently Asked <br /> Questions on Products
    </h2>
    <p>
      We don’t just deliver visuals—we build creative partnerships that leave a
      lasting impact. Hear directly from the people we’ve collaborated with, and
      discover how Opera has helped brands.
    </p>
  </div>

  <div className="faq-list">
    {/* Left + Right FAQs auto handled by CSS grid */}
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`faq-item${openIndex === index ? " active" : ""}`}
      >
        <button
          className="faq-question"
          onClick={() => toggleFAQ(index)}
          aria-expanded={openIndex === index}
        >
          <span>{faq.question}</span>
          <img src={openIndex === index ? sub : plus} alt="toggle" />
        </button>
        {openIndex === index && (
          <div className="faq-answer">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
</section>

  );
};

export default FAQ;
