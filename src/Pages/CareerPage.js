import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Career from '../components/Career/Career';
import CareerApplySection from '../components/Career/CareerApplySection';
import ReadyToMakeSection from '../components/Career/ReadyToMakeSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';


const CareerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <Navigation/>
     <Career/>
     <CareerApplySection/>
     <ReadyToMakeSection/>
     <Footer/>
     <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  );
};

export default CareerPage;
