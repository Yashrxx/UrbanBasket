import './App.css';
import Home from './Pages/Home/Home.js';
import Closer from './Pages/Closer.js';
import './assets/css/Style.css';
import Listing from './Listing/Listing.js';
import About from './Pages/About/About.js';
import Navbarsm from './components/header/Navbarsm.js';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbarsm />

      <Routes>
        {/* Direct Home Access */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/closer" element={<Closer />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/about" element={<About />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;