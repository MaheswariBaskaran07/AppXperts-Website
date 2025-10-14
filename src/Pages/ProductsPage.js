import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Product from '../components/Products/Product';
import Softwares from '../components/Products/Softwares';
import FAQ from '../components/Products/FAQ';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Helmet } from "react-helmet-async";

const ProductsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Helmet>
  <title>Products – ERP, CRM, HRMS & Enterprise Software by AppXperts</title>
  <meta
    name="description"
    content="Discover AppXperts’ enterprise-grade products: ERP, CRM, HRMS, and other digital platforms designed to streamline business operations."
  />
  <meta property="og:url" content="https://www.appxes.com/products" />
  <link rel="canonical" href="https://www.appxes.com/products" />
</Helmet>

    <div>
      <Navigation />
      <Product />
      <Softwares />
      <FAQ />
      <Footer />
      <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
    </>
  )
}

export default ProductsPage

    