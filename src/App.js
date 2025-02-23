import './App.css';
import Home from './Pages/Home/Home.js';
import Closer from './Pages/Closer.js'
import './assets/css/Style.css'
import Listing from '../src/Listing/Listing.js'
import Login from './Authentication/Login.js'
import Signup from './Authentication/Signup.js'
import ProtectedRoute from './ProtectedRoute.js';
import Navbar from './components/header/Navbar.js'
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // ✅ Check if token exists
  );

  useEffect(() => {
    // ✅ Listen for auth changes (token set/removed)
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Navbar/>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" id="vl" element={<Closer />} />
          <Route path="/UrbanBasket" id="vh" element={<Home />} />
        </Route>
        <Route path="/listing" element={<Listing />} />
        <Route path="*" element={<Navigate to="/urbanBasket" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
