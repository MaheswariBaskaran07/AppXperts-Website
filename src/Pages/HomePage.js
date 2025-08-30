import { useEffect } from 'react'
import Home from '../components/Home/Home'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Solutions from '../components/Home/Solutions';
import ClientsSay from '../components/Home/ClientsSay';
import Booking from '../components/Home/Booking';

const HomePage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <Home />
      <Solutions />
      <ClientsSay />
      {/* <Booking /> */}
      <Footer />
    </div>
  )
}

export default HomePage