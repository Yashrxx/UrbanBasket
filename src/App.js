import './App.css';
import Header from './components/header/Header.js';
import Closer from './Pages/Closer.js'
import './assets/css/Style.css'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/UrbanBasket" element={<Header />} />
    <Route path="/" element={<Closer/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
