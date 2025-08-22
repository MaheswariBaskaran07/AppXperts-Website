import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ClientsPage from './Pages/ClientPage';
import ProductsPage from './Pages/ProductsPage';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path='/clients' element={<ClientsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
