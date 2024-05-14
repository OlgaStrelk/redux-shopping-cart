import React from "react";
import styles from "./app.module.css";
import { Route, Routes } from "react-router-dom";
import { Products } from "./features/products/products";
import { Cart } from "./features/cart/cart";
import Header from "./features/header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <main className="page">
        <h1>Welcome to the Store</h1>
        <figure>
          <img src="/store.jpg" alt="A large old storefront" width="800" />
          <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
        </figure>
      </main>
    </>
  );
}
