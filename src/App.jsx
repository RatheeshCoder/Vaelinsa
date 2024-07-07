import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import HomeIndex from "./pages/home/HomeIndex";
import Footer from "./components/footer/Footer";
function App() {

  return (
    <> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={  <HomeIndex/> } />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
