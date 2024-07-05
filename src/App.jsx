import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Button from "./components/button/button";
import  Heading  from "./components/heading/Heading";
import Title from "./components/sectionTitle/Title";
import Card from "./components/card/Card";
import img from './assets/mdi_film-outline.png'
function App() {

  return (
    <> 
      <BrowserRouter>
      <Navbar/>
      <Heading title="got the full"  />
    
      <Title heading="About us" text="who we are"/>
      <Routes>
        <Route path="/" element={    ''} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
