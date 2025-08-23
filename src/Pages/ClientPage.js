import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Clients from '../components/Clint/Clint';
import Footer from '../components/Footer';
import Testimonials from '../components/Clint/Testimonial';
import ClientLogoSction from '../components/Clint/OurClintSection';


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
    </div>
  );
};

export default ClientsPage;
