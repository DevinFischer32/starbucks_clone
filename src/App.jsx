import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/about-us/" element={<AboutUs />} /> */}
    </Routes>
  );
}

export default App;
