import React from "react";

const Roadmap = () => {
  // Timeline data (kept from previous content; displayed in alternating layout)
  const phases = [
    {
      quarter: "2021 Sep",
      title: "Launched Chennai Office",
      items: ["Performance tuning", "Accessibility audit", "Security hardening"],
    },
    {
      quarter: "2022 Jan",
      title: "Launched Singapore Office",
      items: [
        "New modules (Analytics, Integrations)",
        "Beta for select clients",
        "API public docs",
      ],
    },
    {
      quarter: "2023 Jan",
      title: "Launched ERP ",
      items: [
        "Major UI overhaul",
        "New features & integrations",
        "Mobile app launch",
      ],
    },
    {
      quarter: "2025 Feb",
      title: "Launched Dubai Office",
      items: [
        "New features & integrations",
        "Major UI overhaul",
        "Global marketing push",
      ],
    },
    {
      quarter: "Ongoing",
      title: "Continuing Progress",
      items: ["Expanding features", "New integrations", "Global rollout"],
      final: true,
    },
  ];

  return (
  <section className="timeline-section" aria-labelledby="timeline-title">
  <h2 id="timeline-title" className="timeline-title">Our Journey</h2>
  <p className="timeline-sub">The evolution of AppXperts from its foundation to industry leadership.</p>

      <div className="timeline">
        {phases.map((p, index) => (
          <div
            key={`${p.title}-${p.quarter}`}
            className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            {/* Card column */}
            <div className="timeline-col card-col">
              <div className="card">
                <div className="card-head">
                  <i className="bi bi-calendar3 card-icon" aria-hidden="true"></i>
                  <time className="card-date">{p.quarter}</time>
                </div>
                <h3 className="card-title">{p.title}</h3>
              {/* {p.items && p.items.length > 0 && (
                  <ul className="card-list" aria-label="Highlights">
                    {p.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                )}
                {p.final && (
                  <p className="card-final">Still progressing — more to come!</p>
                )} */} 
              </div>
            </div>

            {/* Center dot column */}
            <div className="timeline-col dot-col">
              <span className="dot pulse" aria-hidden></span>
            </div>

            {/* Spacer column */}
            <div className="timeline-col empty-col" />
          </div>
        ))}
      </div>

      <style>{`
        .timeline-section {
          background: #ffffff; /* plain white background as requested */
          padding: 36px 12px 40px; /* reduced vertical padding */
          font-family: Poppins, sans-serif;
          overflow: hidden;
        }
        .timeline-title {
          text-align: center;
          font-weight: 800;
          font-size: 28px; /* slightly smaller */
          color: #061a33;
          margin: 0 0 6px; /* tighter */
        }
        .timeline-title::after {
          content: "";
          display: block;
          width: 56px; height: 4px;
          background: #0f76ff; /* accent underline */
          border-radius: 999px;
          margin: 8px auto 0;
        }
        .timeline-sub {
          text-align: center;
          color: #475569;
          max-width: 720px;
          margin: 0 auto 6px;
          font-weight: 500;
          font-size: 14px;
        }

        /* Core timeline */
        .timeline {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 16px auto 0 auto; /* reduced top margin */
          padding: 12px 8px; /* tighter */
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 3px;
          background: #e5e7eb;
          transform: translateX(-50%);
        }

        .timeline-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 16px; /* tighter row spacing */
        }
    .timeline-row.right { flex-direction: row-reverse; }
    /* Shift only the right-side CARD across all views; keep dot centered */
  .timeline-row.right .card-col { padding-left: 12px; }
  @media (min-width: 641px) { .timeline-row.right .card-col { padding-left: 22px; } }
  /* Laptop/Desktop: shift only the right-side CARD further right; keep dot centered */
  @media (min-width: 1024px) { .timeline-row.right .card-col { padding-left: 22px; transform: translateX(70px); } }
  .timeline-col { display: flex; align-items: center; }
    .card-col, .empty-col { width: 48%; }
    .dot-col { width: 4%; display: flex; justify-content: center; }
    /* Ensure dots are exactly centered on the vertical line on tablet/desktop by anchoring to the row */
    @media (min-width: 641px) {
      .timeline-row { position: relative; }
      .timeline-row .dot { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; }
    }

        .card {
          width: 100%;
          position: relative; /* for glossy overlays */
          /* Blue base + light accent only at bottom-right corner */
          background:
            radial-gradient(circle at 96% 88%, rgba(70,207,248,0.95) 0%, rgba(70,207,248,0.55) 22%, rgba(70,207,248,0) 60%),
            linear-gradient(180deg, #0f5cf8 0%, #0d48eaff 100%);
          border-radius: 16px;
          padding: 8px 14px; /* slightly tighter */
          min-height: 56px; /* reduced a bit */
          display: flex;
          flex-direction: column;
          align-items: center; /* center horizontally */
          justify-content: center; /* center vertically */
          overflow: hidden;
          /* crystal-like depth */
          box-shadow: 0 12px 28px rgba(6,26,51,0.16), 0 6px 16px rgba(13,72,234,0.18), inset 0 1px 0 rgba(255,255,255,0.35);
          border: 1px solid rgba(255,255,255,0.28);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        /* subtle glossy sheen */
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 38%, rgba(255,255,255,0) 60%);
          border-radius: inherit;
          pointer-events: none;
        }
        /* small diagonal sparkle */
        .card::after {
          content: "";
          position: absolute;
          top: -35%; left: -10%;
          width: 55%; height: 130%;
          background: radial-gradient(ellipse at top left, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 60%);
          transform: rotate(16deg);
          pointer-events: none;
        }
    .card:hover { transform: translateY(-3px); box-shadow: 0 18px 44px rgba(13,72,234,0.24), 0 12px 26px rgba(6,26,51,0.22); }
  .card-head { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 2px; }
    .card-icon { color: #ffffff; font-size: 16px; line-height: 1; }
    .card-date { color: #e6efff; font-size: 12.5px; font-weight: 600; text-align: center; }
  .card-title { margin: 0; font-size: 18px; font-weight: 700; color: #ffffff; text-align: center; }
  .card-list { margin: 0; padding-left: 18px; color: #f0f6ff; font-size: 13.5px; line-height: 1.42; flex: 1 1 auto; overflow: hidden; text-align: center; }
  .card-list li { margin: 0; }
    .card-final { margin: 6px 0 0; color: #ffffff; font-weight: 600; font-size: 14px; }

        .dot {
          position: relative;
          width: 12px; height: 12px; /* slightly smaller */
          background: linear-gradient(180deg, #46cff8ff 0%, #0d48eaff 100%); /* blue theme */
          border: 4px solid #fff;
          border-radius: 999px;
          box-shadow: 0 0 0 3px #d7e6ff, 0 8px 18px rgba(6,26,51,0.12);
        }
        .dot.pulse::after {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 999px;
          border: 2px solid rgba(13,72,234,0.55); /* blue pulse */
          animation: pulse 1.5s ease-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 1; }
          70% { transform: scale(1.2); opacity: 0.25; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .card-col, .empty-col { width: 47%; }
          .dot-col { width: 6%; }
          .card-title { font-size: 16px; }
        }
        @media (max-width: 640px) {
          .timeline::before { left: 28px; transform: none; }
          .timeline-row { flex-direction: row !important; align-items: flex-start; gap: 10px; }
          .timeline-row.right { flex-direction: row !important; }
          /* create a little more breathing room between line/dot and the card */
          .dot-col { order: 0; width: 56px; justify-content: center; }
          .card-col { order: 1; width: calc(100% - 66px); padding-left: 12px; }
          .timeline-row.right .card-col { padding-left: 12px; }
          .empty-col { display: none; }
          .card { padding: 7px; }
          .card-title { font-size: 15px; }
          .card-list { font-size: 13px; line-height: 1.2; }
          .dot { width: 10px; height: 10px; }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
