import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HireMe from './HireMe';
import Home from './Home';
import LearnMore from './LearnMore';
import FormPopUp from './FormPopUp';
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer';






function App() {
   const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <Router>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HireMe" component={HireMe} />
          <Route exact path="/FormPopUp" component={FormPopUp} />
          <Route exact path="/LearnMore" component={LearnMore} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
