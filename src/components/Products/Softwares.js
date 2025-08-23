import software from "../../assets/Product/Frame 1000009024.png";
import eclipse from "../../assets/Product/Ellipse 4.png";

const cards = [
  { title: "ERP Softwares", color: "#b3e7f7", },
  { title: "CRM Softwares", color: "#b3e7f7", },
  { title: "HRMS Softwares", color: "#b3e7f7", },
  { title: "E-Commerce Platform", color: "#b3e7f7", },
  { title: "School Management", color: "#b3e7f7", },
];

const Softwares = () => {
  return (
    <section style={{ width: '100%', background: '#fff', fontFamily: 'Poppins', padding: '32px 0 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 32 }}>
          <div>
            <h2 style={{ fontSize: 40, fontWeight: 500, margin: 0, color: '#111', lineHeight: 1.1 }}>Digital Solutions,<br />Tailored to Perform</h2>
          </div>
          <div style={{ maxWidth: 400, fontWeight: 400, color: '#888', fontSize: 16, marginTop: 12, textAlign: 'right', lineHeight: 1.6 }}>
            From streamlining operations to boosting engagement — our products are built to deliver results, faster.
          </div>
        </div>
        {/* Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 28,
          minHeight: 420,
          marginBottom: 32
        }}>
          {/* Top Row */}
          <div style={{ gridColumn: '1/3', gridRow: '1/2' }}>
            <Card title={cards[0].title} color={cards[0].color} />
          </div>
          <div style={{ gridColumn: '3/5', gridRow: '1/2' }}>
            <Card title={cards[1].title} color={cards[1].color} />
          </div>
          <div style={{ gridColumn: '5/7', gridRow: '1/2' }}>
            <Card title={cards[2].title} color={cards[2].color} />
          </div>
          <div style={{ gridColumn: '1/2', gridRow: '2/3' }}>
            <Card title={cards[3].title} color={cards[3].color} />
          </div>
          {/* Center Large Card */}
          <div style={{ gridColumn: '2/6', gridRow: '2/3', background: '#f7f8fa', borderRadius: 18, boxShadow: '0 2px 12px #b3e7f733', display: 'flex', alignItems: 'center', padding: 24, minHeight: 170 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 20, color: '#222', marginBottom: 8 }}>Hospital Management</div>
              <div style={{ color: '#555', fontSize: 16, fontWeight: 400, marginBottom: 0, lineHeight: 1.6 }}>
                All-in-one platform for inventory, finance, and operations – helping you make confident, data-driven decisions.
              </div>
            </div>
            <img src={software} alt="Hospital Management" style={{ width: 110, height: 110, objectFit: 'contain', marginLeft: 18 }} />
          </div>
          <div style={{ gridColumn: '6/7', gridRow: '2/3' }}>
            <Card title={cards[4].title} color={cards[4].color} />
          </div>
        </div>
      </div>
    </section>
  );
};

function Card({ title, color, width }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ace3ff 60%, #cad1ff 100%)',
      borderRadius: 18,
      boxShadow: '0 2px 12px #b3e7f733',
      minHeight: 170,
      minWidth: width || 0,
      width: width || 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 20px 16px 20px',
      position: 'relative',
      transition: 'box-shadow 0.2s',
      overflow: 'hidden',
    }}>
      {/* Eclipse at bottom left */}
      <img src={eclipse} alt="eclipse" style={{ position: 'absolute', left: 0, bottom: 0, width: 90, opacity: 0.32, zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ fontWeight: 400, fontSize: 20, color: '#222', marginBottom: 8, zIndex: 1, position: 'relative' }}>{title}</div>
      <div style={{ color: '#555', fontSize: 14, marginBottom: 24, zIndex: 1, position: 'relative' }}></div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1, position: 'relative' }}>
        <span style={{ color: '#888', fontSize: 15, fontWeight: 400 }}>Read More</span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #eaf6fb 0%, #b3e7f7 100%)',
          color: '#1a3fa6',
          fontWeight: 700,
          fontSize: 18,
          boxShadow: '0 1px 4px #b3e7f722',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11L11 5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M7.5 5H11V8.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Softwares;