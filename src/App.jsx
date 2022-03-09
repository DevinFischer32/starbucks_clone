import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Homepage from "./Pages/Homepage";
import Menu from "./Pages/Menu";
import Rewards from "./Pages/Rewards";
import Gifts from "./Pages/Gifts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
