import { useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Sale from "./Pages/Sale";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Shop from "./Pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sale" element={<Sale />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
