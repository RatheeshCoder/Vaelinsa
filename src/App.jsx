import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import HomeIndex from "./pages/home/HomeIndex";
import Footer from "./components/footer/Footer";
import ServiesIndex from "./pages/servies/ServiesIndex";
import ContactSection from "./pages/contact/ContactSection";
import AccessoriesIndex from "./pages/servies/allServies/accessories/AccessoriesIndex";
import ProductMain from "./pages/products/OurProducts";
import OurProduct from "./pages/servies/ourProoduct/OurProduct";
import AboutIndex from "./pages/aboutus/AboutIndex";
function App() {

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={  <HomeIndex/> } />
          {/* <Route path="/services" element={<ServiesIndex/>} /> */}

          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/services" element={<ServiesIndex/>} />
          <Route path="/servies/accessories" element={<AccessoriesIndex/>} />
          <Route path="/servies/OurProduct" element={<OurProduct/>} />


          <Route path="/products" element={<ProductMain/>} />
          <Route path="/aboutus" element={<AboutIndex/>} />


          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
