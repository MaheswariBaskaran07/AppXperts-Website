import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Clients from './components/Clint/Clint';
import ClientsPage from './Pages/ClientPage';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/clients' element={<ClientsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
