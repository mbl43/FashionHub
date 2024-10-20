import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Home, Notfound } from "./Pages/index";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
