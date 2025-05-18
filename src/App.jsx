
import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetails';
import Login from './pages/Login';
import Navbar from "./components/Navbar";



const Checkout = lazy(() => import('./pages/Checkout'));

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Suspense fallback={<p className="text-center">Loading...</p>}>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     </Suspense>
    </BrowserRouter>
  );
}

export default App;
