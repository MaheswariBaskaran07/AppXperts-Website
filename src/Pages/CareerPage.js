import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Career from '../components/Career/Career';
import CareerApplySection from '../components/Career/CareerApplySection';
import ReadyToMakeSection from '../components/Career/ReadyToMakeSection';


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
    </div>
  );
};

export default CareerPage;
