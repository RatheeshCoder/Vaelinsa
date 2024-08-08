import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import HomeIndex from "./pages/home/HomeIndex";
import Footer from "./components/footer/Footer";
import ServiesIndex from "./pages/servies/ServiesIndex";
import ContactSection from "./pages/contact/ContactSection";
<<<<<<< Updated upstream
import AllServies from "./pages/servies/allServies/AllServies";
import AboutUS from "./pages/aboutus/AboutIndex";
=======
import AccessoriesIndex from "./pages/servies/allServies/accessories/AccessoriesIndex";
import ProductMain from "./pages/products/OurProducts";
import OurProduct from "./pages/servies/ourProoduct/OurProduct";
>>>>>>> Stashed changes
function App() {

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={  <HomeIndex/> } />
          {/* <Route path="/services" element={<ServiesIndex/>} /> */}

          <Route path="/contact" element={<ContactSection/>} />
<<<<<<< Updated upstream
          <Route path="/services" element={<AllServies/>} />
          <Route path="/about" element={<AboutUS/>}/>
=======
          <Route path="/services" element={<ServiesIndex/>} />
          <Route path="/servies/accessories" element={<AccessoriesIndex/>} />
          <Route path="/servies/OurProduct" element={<OurProduct/>} />


          <Route path="/products" element={<ProductMain/>} />

>>>>>>> Stashed changes
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
