import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Homepage from './Homepage';
import About from './About';
import Activities from './Events';
import Coreteam from './Coreteam';
import Announcements from './Announcements';
import PageFooter from './PageFooter';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/about'><About /></Route>
          <Route path='/events'><Activities /></Route>
          <Route path='/announcements'><Announcements /></Route>
          <Route path='/coreteam'><Coreteam /></Route>
          <Route path='/'><Homepage /></Route>
        </Switch>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
