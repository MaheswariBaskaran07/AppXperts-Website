import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact/ContactUs';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ContactUs />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default ContactPage;