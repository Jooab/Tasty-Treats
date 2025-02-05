import './App.css'
import Home from './components/home'
import { CartProvider } from './contexts/cart-context';
import React from 'react';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <CartProvider> 
      
      <Home />
    </CartProvider>
  )
}

export default App
