import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Product from '../components/Products/Product';
import Softwares from '../components/Products/Softwares';
import FAQ from '../components/Products/FAQ';

const ProductsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <Product />
      <Softwares />
      <FAQ />
      <Footer />
    </div>
  )
}

export default ProductsPage

    