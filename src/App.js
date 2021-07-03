import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import About from './Components/About';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
import NavBar from './Components/NavBar';
// import Skills from './Components/Skills';
// import Works from './Components/Works'
// import Contact from './Components/Contact'
import SideBar from './Components/SideBar';
import Home from './pages/Home';



function App() {
  return (
    <Router>
          <Home/>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Works" component={Works} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Works/>
        <Footer/> */}
    </Router>
  );
}

export default App;
