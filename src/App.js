import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';

// Pages
import GetStarted from './components/GetStarted/GetStarted';
import Explore from './components/Explore/Explore'
import MasterUpload from './components/MasterUpload/MasterUpload'

function App() {
  return (
    <div>
      <Navigation />

      <Router>
        <Switch>

        <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/hai-platform/getStarted" />
                    )
                }}
              />
          <Route exact path="/hai-platform/getStarted" component ={GetStarted} />
          <Route path="/hai-platform/upload" component ={MasterUpload} />
          <Route path="/hai-platform/explore" component = {Explore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
