import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/people" element={<People />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
    </BrowserRouter>  
  );
}

export default App
