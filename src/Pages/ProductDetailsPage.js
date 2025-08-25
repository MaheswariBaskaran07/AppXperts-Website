import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Product from '../components/Products/Product';
import Softwares from '../components/Products/Softwares';
import FAQ from '../components/Products/FAQ';
import ProductDetails from '../components/ProuctDetails/ProductDetails';
import FeaturesSection from '../components/ProuctDetails/FeaturesSection';
import BookingSection from '../components/ProuctDetails/BookingSection';

const ProductDetailsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductDetails />
      <FeaturesSection />
      <BookingSection />
      <Footer />
    </div>
  )
}

export default ProductDetailsPage

    