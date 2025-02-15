import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Nav.jsx'
import Projects from './sections/Projects.jsx';
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
const App = () => {
  return (
   
  <> 
  <main className='relative'>
  <Navbar />
  <div><Hero /></div>
  <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">Abdulai Oluu Abu</h1>
      <p className="text-gray-700 text-lg mb-6">MERN Stack Developer</p>
      <Projects />
    </div>

<section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
</main>
  </>
  );
};

export default App;
