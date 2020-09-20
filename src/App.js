import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import ModelTuning from './components/Part1/ModelTuning/ModelTuning'
import ModelResult from './components/Part1/ModelResult/ModelResult'
import Report from './components/Part1/Report/Report'
import Intro from './components/Part1/Intro/Intro'

function App() {
  return (
    <div>
      <Navigation/>
      <HashRouter>
        <Route path="/modeltuning"><ModelTuning/></Route>
        <Route path="/modelresult"><ModelResult/></Route>
        <Route path="/report"><Report/></Route>
        <Route exact path="/"><Intro/></Route>
      </HashRouter>
    </div>
  );
}

export default App;
