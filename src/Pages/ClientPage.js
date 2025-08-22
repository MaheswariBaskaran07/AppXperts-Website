import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Clients from '../components/Clint/Clint';
import Footer from '../components/Footer';


const ClientsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <Navigation/>
     <Clients/>
     <Footer/>
    </div>
  );
};

export default ClientsPage;
