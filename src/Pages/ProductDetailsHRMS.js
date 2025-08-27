import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingSection from '../components/ProuctDetails/BookingSection';
import ProductHRMS from '../components/ProuctDetails/ProductHRMS';
import FeaturesHRMS from '../components/ProuctDetails/FeatursHMRS';

const ProductDetailsHRMS = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductHRMS />
      <FeaturesHRMS />
      <BookingSection />
      <Footer />
    </div>
  )
}

export default ProductDetailsHRMS

    