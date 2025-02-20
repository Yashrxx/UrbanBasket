import './App.css';
import Home from './Pages/Home/Home.js';
import Closer from './Pages/Closer.js'
import './assets/css/Style.css'
import Listing from '../src/Listing/Listing.js'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/UrbanBasket" element={<Home />} />
    <Route path="/" element={<Closer/>} />
    <Route path="/listing" element={<Listing/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
