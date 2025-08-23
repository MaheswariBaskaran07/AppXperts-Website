import logo from "../../assets/Client/Testimonials Card Bg.png";
import mail from "../../assets/Footer/mail.png";
import linkedIn from "../../assets/Footer/linkedin-in.png";
import location from "../../assets/Footer/location_on.png";
import call from "../../assets/Footer/call.png";
import fb from "../../assets/Footer/1.png";
import insta from "../../assets/Footer/2.png";


const ContactInfo = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: 500,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    //  background: 'linear-gradient(90deg, #f8fdff 0%, #1a8fff 100%)',
      borderRadius: '0 0 48px 48px',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px 0 0 0',
    }}>
      {/* Blue background image right side */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '55%',
        height: '100%',
        zIndex: 0,
        borderRadius: '0 0 48px 0',
        overflow: 'hidden',
      }}>
        <img src={logo} alt="bg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0 0 48px 0' }} />
      </div>
      {/* Card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
         background: 'linear-gradient(90deg, #f8fdff 0%, #1a8fff 100%)',
        borderRadius: 20,
        boxShadow: '0 4px 32px 0 rgba(26,63,166,0.10)',
        padding: '48px 48px 32px 48px',
        marginLeft: 0,
        marginRight: 380,
        marginBottom: 40,
        minWidth: 480,
        maxWidth: 650,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}>
        <h2 style={{ fontSize: 38, fontWeight: 500, margin: 0, marginBottom: 24, letterSpacing: 0.5 }}>Contact Information</h2>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {/* Left: India */}
          <div style={{ minWidth: 180, flex: 1 }}>
            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>India</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <img src={call} alt="call" style={{ width: 18, height: 18 }} />
              <span style={{ fontSize: 15, color: '#000000' }}>+91 88255 28905</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <img src={location} alt="location" style={{ width: 18, height: 18, marginTop: 2 }} />
              <span style={{ fontSize: 15, color: '#222' }}>No 32, 2nd Floor, Swathika Flats,<br />Rukmani Nagar, Perumbakkam,<br />Chennai - 600100</span>
            </div>
            <div style={{ fontWeight: 500, fontSize: 15, marginTop: 18, marginBottom: 4 }}>Email</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <img src={mail} alt="mail" style={{ width: 18, height: 18 }} />
              <span style={{ fontSize: 15, color: '#222' }}>info@appxes.gmail.com</span>
            </div>
            <div style={{ fontWeight: 500, fontSize: 15, marginTop: 18, marginBottom: 4 }}>Socials</div>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={fb} alt="fb" style={{ width: 40, height: 40 }} /></a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={insta} alt="insta" style={{ width: 40, height: 40 }} /></a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6' }}><img src={linkedIn} alt="linkedin" style={{ width: 18, height: 18 }} /></a>
            </div>
          </div>
          {/* Right: Dubai & Singapore */}
          <div style={{ minWidth: 180, flex: 1 }}>
            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>Dubai</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <img src={call} alt="call" style={{ width: 18, height: 18 }} />
              <span style={{ fontSize: 15, color: '#000000' }}>+91 88255 28905</span>
            </div>
            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>Singapore</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <img src={call} alt="call" style={{ width: 18, height: 18 }} />
              <span style={{ fontSize: 15, color: '#000000' }}>+91 88255 28905</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo