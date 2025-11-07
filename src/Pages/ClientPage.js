import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Clients from '../components/Clint/Clint';
import Footer from '../components/Footer';
import Testimonials from '../components/Clint/Testimonial';
import ClientLogoSction from '../components/Clint/OurClintSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ChatBot from '../components/ChatBot';


const ClientsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <Navigation/>
     <Clients/>
     <ClientLogoSction/>
     <Testimonials/>
     <Footer/>
     <FloatingWhatsApp phone={'+91 88255 28905'} />
     <ChatBot />
    </div>
  );
};

export default ClientsPage;
