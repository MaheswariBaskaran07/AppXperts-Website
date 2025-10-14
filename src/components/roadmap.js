import React from "react";

const Roadmap = () => {
  // Pins placed along the road with approximate vertical alignment to the curve
  const phases = [
    {
      quarter: "2021 Sep",
      title: "Launched Chennai Office",
      items: ["Performance tuning", "Accessibility audit", "Security hardening"],
      pos: 8, // percent from left
      pinTop: 60, // percent from top (approximate center of road)
      labelPos: "bottom",
    },
    {
      quarter: "2022 Jan",
      title: "Launched Singapore Office",
      items: [
        "New modules (Analytics, Integrations)",
        "Beta for select clients",
        "API public docs",
      ],
      pos: 28,
      pinTop: 40,
      labelPos: "top",
    },
    {
      quarter: "2023 Jan",
      title: "Launched ERP Module",
      items: [
        "Major UI overhaul",
        "New features & integrations",
        "Mobile app launch",
      ],
      pos: 52,
      pinTop: 70,
      labelPos: "bottom",
    },
    {
      quarter: "2025 Feb",
      title: "Launched Dubai Office",
      items: [
        "New features & integrations",
        "Major UI overhaul",
        "Global marketing push",
      ],
      pos: 76,
      pinTop: 82,
      labelPos: "top",
    },
    {
      quarter: "Ongoing",
      title: "Continuing Progress",
      items: ["Expanding features", "New integrations", "Global rollout"],
      pos: 100,
      pinTop: 70,
      labelPos: "bottom",
      final: true,
    },
  ];

  return (
    <section className="roadmap-visual" aria-labelledby="roadmap-title">
      <h2 id="roadmap-title" className="roadmap-title">
        Company Roadmap
      </h2>

      <div className="roadmap-canvas">
        <div className="road-wrap">
        {/* Responsive curved road SVG (no horizontal scroll) */}
        <svg
          className="road-svg"
          viewBox="0 0 1260 360"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Outer dark road */}
          <path
            d="M0,230 C200,100 420,80 620,230 C820,370 1040,360 1260,250"
            stroke="#071733"
            strokeWidth="80"
            strokeLinecap="round"
            fill="none"
          />
          {/* Inner road for contrast */}
          <path
            d="M0,230 C200,100 420,80 620,230 C820,370 1040,360 1260,250"
            stroke="#101827"
            strokeWidth="52"
            strokeLinecap="round"
            fill="none"
          />
          {/* Dashed center line */}
          <path
            d="M0,230 C200,100 420,80 620,230 C820,370 1040,360 1260,250"
            stroke="#f0fbff"
            strokeWidth="6"
            strokeDasharray="28 18"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Pins on the road + labels above/below */}
        {phases.map((p, i) => (
          <div
            key={p.quarter}
            className="phase"
            style={{ left: `${p.pos}%`, top: `${p.pinTop}%` }}
          >
            <div className="pin" aria-hidden>
              <div className="pin-inner">{p.final ? "•" : i + 1}</div>
            </div>

            <div className={`phase-label ${p.labelPos === 'top' ? 'label-top' : 'label-bottom'}`}>
              <div className="label-title">{p.title}</div>
              {p.final ? (
                <div className="label-sub">Still progressing — more to come!</div>
              ) : (
                <div className="label-sub">{p.quarter}</div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>

      <style>{`
        .roadmap-visual {
          background: linear-gradient(180deg, #eaf6ff 0%, #ffffff 100%);
          padding: 56px 16px 96px; /* moved up by reducing top padding */
          font-family: Poppins, sans-serif;
          overflow-x: hidden; /* prevent horizontal scroll */
          overflow-y: visible; /* allow labels to extend vertically if needed */
        }

        .roadmap-title {
          text-align:center;
          font-weight:800;
          font-size:30px;
          color:#061a33;
          margin-bottom:30px;
        }

        .roadmap-canvas {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 560px; /* taller to fit diagonal road and labels */
          margin: 0 auto;
          overflow: visible;
        }

        .road-wrap {
          position: absolute;
          inset: 0;
          transform: translateY(-8%) rotate(-10deg) scale(0.9); /* raise the road slightly */
          transform-origin: center;
        }

        .road-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 10px 24px rgba(4,37,84,0.14));
        }

        .phase {
          position: absolute;
          transform: translate(-50%, -50%) rotate(10deg); /* counter-rotate to match -10deg road */
          display: flex;
          align-items: center;
          gap: 8px;
          pointer-events: none;
        }

        .pin {
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 8px;
          background: linear-gradient(180deg,#4aa3ff,#0f76ff);
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow: 0 8px 18px rgba(6,26,51,0.28);
          pointer-events: auto;
          transform: translateY(-6px);
        }

        .pin-inner {
          color: #fff;
          font-weight:700;
        }

        /* Labels (top/bottom) */
        .phase-label {
          pointer-events: auto;
          text-align: center;
          min-width: 160px;
        }
  .label-top { transform: translate(-50%, -100%); position: absolute; left: 50%; bottom: 64px; }
  .label-bottom { transform: translate(-50%, 100%); position: absolute; left: 50%; top: 64px; }
        .label-title {
          font-weight: 800;
          font-size: 16px;
          background: linear-gradient(180deg, #2ecbfa 0%, #1a3fa6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.2px;
        }
        .label-sub { font-size: 12px; color: #334155; margin-top: 2px; }

        /* Final/ongoing label styling tweak */
        .phase.final .label-title { text-decoration: underline wavy rgba(15,118,255,0.5); }

        /* Responsive tweaks */
        @media (max-width:900px) {
          .roadmap-canvas { height: 480px; }
          .pin { width: 36px; height: 36px; }
          .label-title { font-size: 14px; }
        }

        @media (max-width:640px) {
          /* Switch to a vertical timeline layout on phones */
          .roadmap-canvas { height: auto; padding: 8px 4px 12px; }
          .road-wrap { position: relative; transform: none; height: auto; }
          .road-svg { display: none; }
          .road-wrap::before {
            content: "";
            position: absolute;
            left: 28px;
            top: 0; bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, #cfe8ff, #99c2ff);
          }
          .phase {
            position: static !important;
            left: auto !important; top: auto !important;
            transform: none !important;
            display: flex; align-items: center; gap: 12px;
            margin: 14px 0;
          }
          .pin { width: 28px; height: 28px; transform: none; flex: 0 0 28px; }
          .phase-label { position: static !important; text-align: left; min-width: 0; }
          .label-top, .label-bottom { position: static !important; transform: none !important; left: auto !important; top: auto !important; bottom: auto !important; }
          .label-title { font-size: 14px; }
          .label-sub { font-size: 12px; }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;
