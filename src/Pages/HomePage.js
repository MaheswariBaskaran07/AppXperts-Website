import { useEffect } from 'react'
import Home from '../components/Home/Home'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <Home />
      <Footer/>
    </div>
  )
}

export default HomePage