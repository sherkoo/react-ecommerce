// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import { ProductCard, ProductGrid } from "./Components/Product/Product";
import { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Pages/Gallery";
import ProductDisplay from "./Components/Pages/ProductDisplay";
import Cart from "./Components/Pages/Cart";
import NotFound from "./Components/Pages/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useDispatch} from 'react-redux';
import { checkForCartItems} from './Redux/cart';

// app
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkForCartItems());
  },[dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />}></Route>
          <Route path="/product" element={<ProductDisplay />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
