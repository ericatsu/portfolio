import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HireMe from './Components/HireMe';
import Home from './pages/Home';



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HireMe" component={HireMe} />
        </Switch>
        {/* <Footer/> */}
    </Router>
  );
}

export default App;
