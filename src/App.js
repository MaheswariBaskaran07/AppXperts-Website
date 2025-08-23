
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ClientsPage from './Pages/ClientPage';
import CareerPage from './Pages/CareerPage';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/clients' element={<ClientsPage/>} />
        <Route path='/career' element={<CareerPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
