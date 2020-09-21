import React, {useState} from 'react'
import './Navigation.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {
    BrowserRouter as Router,
    HashRouter,
    Link,
  } from "react-router-dom";

import { VscQuestion } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";

export default function Navigation(props) {
    const data= props.props[0];
    // console.log(data.buttonName);
    const {id, index, home, tuning, result, report, buttonName, buttonLink} = props.props[0];
    // console.log(buttonName);
    const [stateClicked, handleToggle] = useState(false)

    const toggleCollapse = () => handleToggle(stateClicked => !stateClicked)
    return (
        <body>
            <div>
                <div className="nav-wrapper">
                    <Navbar className="gradient-nav" expand="lg">
                        <Navbar.Brand id="nav-brand" href={data.home}>Assignment 2: Explainability</Navbar.Brand>
                            <div className="nav-links">
                                <Nav>    
                                    {/* <Nav.Link href="#part1-modeltuning">Model Tuning</Nav.Link>
                                    <Nav.Link href="#part1-modelresult">Model Result</Nav.Link>
                                    <Nav.Link href="#part1-report">Report Submissions</Nav.Link> */}
                                    <Nav.Link href={data.tuning}>Model Tuning</Nav.Link>
                                    <Nav.Link href={data.result}>Model Result</Nav.Link>
                                    <Nav.Link href={data.report}>Report Submissions</Nav.Link>
                                </Nav>
                            </div>
                            <div className="to-part-2">
                                <HashRouter>
                                    <Nav.Link href={data.buttonLink}>
                                        <Button className="part-button">{data.buttonName}</Button>
                                    </Nav.Link>
                                </HashRouter>
                                <p><VscQuestion size={24}/></p>
                            </div>
                            <div className="burger">
                                <div onClick = {toggleCollapse}>
                                    {stateClicked ? <BiX size={32}/> : <BiMenuAltRight size={32}/>}
                                </div>
                            </div>
                    </Navbar>
                    <div onClick={toggleCollapse}>
                        <Nav className={stateClicked ? "dropdown-show" : "dropdown-menu"}>    
                            <ul className="dropdown-links">
                                <li><Nav.Link href={data.tuning}>Model Tuning</Nav.Link></li>
                                <li><Nav.Link href={data.result}>Model Result</Nav.Link></li>
                                <li><Nav.Link href={data.report}>Report Submissions</Nav.Link></li>
                            </ul>
                        </Nav>
                        <div className="background-shadow"></div>
                    </div>
                </div>
            </div>
        </body>
    )
}
