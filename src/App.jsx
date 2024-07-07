import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import HomeIndex from "./pages/home/HomeIndex";
import Footer from "./components/footer/Footer";
import ServiesIndex from "./pages/servies/ServiesIndex";
import ContactSection from "./pages/contact/ContactSection";
import AllServies from "./pages/servies/allServies/AllServies";
function App() {

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={  <HomeIndex/> } />
          {/* <Route path="/services" element={<ServiesIndex/>} /> */}
          <Route path="/contact" element={<ContactSection/>} />
          <Route path="/services" element={<AllServies/>} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
