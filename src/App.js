import { useState } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import HireMe from './Components/HireMe';

function App() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  const openHireMeDialog = () => {
    setIsHireMeOpen(true);
  };

  const closeHireMeDialog = () => {
    setIsHireMeOpen(false);
  };

  return (
    <div>
      <Header openHireMeDialog={openHireMeDialog} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {isHireMeOpen && <HireMe closeHireMeDialog={closeHireMeDialog} />}
    </div>
  );
}

export default App;
