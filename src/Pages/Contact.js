import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact/ContactUs';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ContactPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="page-contact" style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
      <style>{`
        html, body, #root {
          margin: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: hidden !important;
        }
        .page-contact { width: 100%; max-width: 100%; overflow-x: hidden; }
        .page-contact img, .page-contact video { max-width: 100%; height: auto; }
      `}</style>
      <Navigation />
      <ContactUs />
      <ContactForm />
      <ContactInfo />
      <Footer />
      <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ContactPage;