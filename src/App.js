import { useState } from 'react';
import SideBar from './Components/Sidebar/SideBar'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Footer/Footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from './Components/Data';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
   const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <About {...homeObjOne} />
      <Skills {...homeObjTwo} />
      <Services />
      <Works {...homeObjThree} />
      <Footer />
    </Router>
  );
}

export default App;
