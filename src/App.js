import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />

      {/* routes to the pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
