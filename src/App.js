import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import Works from './Components/Works'
import Contact from './Components/Contact'



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Works" component={Works} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
