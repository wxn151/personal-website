import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
