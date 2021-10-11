import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Service from './components/Service';
import Home from './components/Home';
import About from './components/About';
import Teams from './components/Teams';
import History from './components/History';
import Contact from './components/Contact';
import A from './components/A';
import B from './components/B';
import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router>

        {/* Add Menu Component */}
        <Navbarmenu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Teams" component={Teams} />
          <Route path="/History" component={History} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Service" component={Service} />
          <Route path="/A" component={A} />
          <Route path="/B" component={B} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
