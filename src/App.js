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

import navLinks from './navLinks'

import ModelResult2 from './components/Part2/ModelResult/ModelResult'

function App() {
  const link = window.location.href;
  const pathname = window.location.pathname;
  const partName = link.substring(link.indexOf(pathname) + pathname.length + 2, link.length);
  console.log(partName);
  const navBar = <Navigation props={navLinks.part2}/>
  // if (partName == 'part1'){
  //   return <Navigation props={navLinks.part1}/>
  // }
  // else {
  //   return <Navigation props={navLinks.part2}/>
  // }
  return (
    <div>
      {navBar}
      <HashRouter>
        <Route path="/part1-modeltuning"><ModelTuning/></Route>
        <Route path="/part1-modelresult"><ModelResult/></Route>
        <Route path="/part1-reportsubmission"><Report/></Route>
        <Route exact path="/part1"><Intro/></Route>
      </HashRouter>
      <HashRouter basename="/part2">
        <Route path="/part2-modeltuning"><ModelTuning/></Route>
        <Route path="/part2-modelresult"><ModelResult2/></Route>
        <Route path="/part2-reportsubmission"><Report/></Route>
        <Route exact path="/part2"></Route>
      </HashRouter>
    </div>
  );
}

export default App;
