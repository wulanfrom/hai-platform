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
import MasterUpload from './components/MasterUpload/MasterUpload'

function App() {
  return (
    <div>
      <Navigation />

      <Router>
        <Switch>
          <Route exact path="/hai-platform/getStarted" component ={GetStarted} />
          <Route path="/hai-platform/upload" component ={MasterUpload} />
          <Route path="/hai-platform/explore" component = {Explore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
