import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import {
  BrowserRouter as Router,
  Switch, 
  Link,
  Route
} from 'react-router-dom';

// Pages
import GetStarted from './components/GetStarted/GetStarted';
import Upload from './components/ApplyModels/Upload'
import Explore from './components/Explore/Explore'

function App() {
  return (
    <div>
      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/getStarted" component ={GetStarted} />
          <Route path="/applyModels" component ={Upload} />
          <Route path="/explore" component = {Explore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
