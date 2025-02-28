import "./App.css";
import { CartProvider } from "./contexts/cart-context";
import React from "react";
import { AppRoutes } from "./routes";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
