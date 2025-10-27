import React from "react";

const Roadmap = () => {
  const phases = [
    {
      quarter: "Dec 2021",
      title: "AppXperts Incorporated",
      location: "Nagapattinam, India",
      items: ["Foundation of the company", "Registered corporate entity"],
    },
    {
      quarter: "Mar 2022",
      title: "Chennai Office Opened",
      location: "Chennai, India",
      items: ["Expanded operations", "Onboarded local clients"],
    },
    {
      quarter: "Sep 2022",
      title: "Incorporated in Singapore",
      location: "Singapore",
      items: ["Regional presence established", "Cross-border engagements"],
    },
    {
      quarter: "Jan 2024",
      title: "ERP Product Launch",
      items: ["First public release", "Early customer adoption"],
    },
    {
      quarter: "Nov 2024",
      title: "Incorporated in UAE",
      location: "Sharjah, UAE",
      items: ["Middle East expansion", "New partnerships"],
    },
    {
      quarter: "Aug 2025",
      title: "Incorporated as Private Ltd",
      items: ["Upgraded corporate structure", "Strengthened governance"],
    },
    {
      quarter: "Coming Soon",
      title: "USA Incorporation",
      items: ["Planned expansion into North America"],
      final: true,
    },
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Our Journey</h2>
      <p className="timeline-sub">
        From humble beginnings to industry leaders. Here's how we've grown and
        achieved our milestones.
      </p>

      <div className="timeline">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <span className="phase">{p.quarter}</span>
              <h3>{p.title}</h3>
              {p.location && <p className="location">{p.location}</p>}
              <ul>
                {p.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              {p.final && (
                <p className="coming">Still progressing — more to come!</p>
              )}
            </div>
            <span className="dot"></span>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-section {
          background: #f9fafb;
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .timeline-title {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
        }

        .timeline-sub {
          text-align: center;
          color: #64748b;
          max-width: 720px;
          margin: 8px auto 40px;
          font-size: 15px;
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Center connecting line */
        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #3b82f6, #60a5fa);
          transform: translateX(-50%);
          animation: lineGrow 2.5s ease-in-out forwards;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          box-sizing: border-box;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
        }

        /* Dot perfectly centered on the line */
        .timeline-item .dot {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 100%;
          width: 18px;
          height: 18px;
          background: #3b82f6;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0 0 0 6px #dbeafe;
          animation: pulse 2s infinite;
        }

        .timeline-item.right .dot {
          left: 0%;
          transform: translate(-50%, -50%);
        }

        .content {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          padding: 20px 26px;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .content:hover {
          transform: translateY(-4px);
        }

        .phase {
          display: block;
          color: #2563eb;
          font-weight: 600;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .content h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .content .location {
          color: #475569;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .content ul {
          margin: 0;
          padding-left: 18px;
          color: #334155;
          font-size: 14px;
          line-height: 1.5;
        }

        /* ✅ Bullet alignment fix for LEFT cards */
        .timeline-item.left .content ul {
          padding-left: 0;
          padding-right: 18px;
          list-style-position: inside;
          direction: rtl;
          text-align: right;
        }

        .timeline-item.left .content ul li {
          direction: ltr;
          text-align: right;
        }
            .timeline-item.left .content ul li::marker {
  color: #2563eb;
}
   .timeline-item.right .content ul li::marker {
  color: #2563eb;
}


        .content ul li {
          margin: 2px 0;
        }

        .coming {
          margin-top: 6px;
          font-weight: 600;
          color: #2563eb;
        }

        /* Animations */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes lineGrow {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        /* Responsive Design */
/* ✅ Responsive Design */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 60px;
    text-align: left;
  }

  .timeline-item.right {
    left: 0;
  }

  .timeline-item .dot {
    left: 20px;
  }

  /* ✅ Fix left card bullet alignment on mobile */
  .timeline-item.left .content ul,
  .timeline-item.right .content ul {
    direction: ltr !important;
    text-align: left !important;
    padding-left: 18px !important;
    padding-right: 0 !important;
    list-style-position: outside !important;
  }

  .timeline-item.left .content ul li,
  .timeline-item.right .content ul li {
    direction: ltr !important;
    text-align: left !important;
  }

  .content {
    margin-bottom: 20px;
  }
}

      `}</style>
    </section>
  );
};

export default Roadmap;
