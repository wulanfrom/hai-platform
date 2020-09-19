import React, {useState} from 'react'
import './Navigation.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { VscQuestion } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";

export default function Navigation() {
    const [stateClicked, handleToggle] = useState(false)

    const toggleCollapse = () => handleToggle(stateClicked => !stateClicked)


    
    return (
        <body>
            <div>
                <div className="nav-wrapper">
                    <Navbar className="gradient-nav" expand="lg">
                        <Navbar.Brand id="nav-brand" href="#home">Assignment 2: Explainability</Navbar.Brand>
                            <div className="nav-links">
                                <Nav>    
                                    <Nav.Link href="#modeltuning">Model Tuning</Nav.Link>
                                    <Nav.Link href="#modelresult">Model Result</Nav.Link>
                                    <Nav.Link href="#report">Report Submissions</Nav.Link>
                                </Nav>
                            </div>
                            <div className="to-part-2">
                                <Button className="part-button">Part 2</Button>
                                <p><VscQuestion size={24}/></p>
                            </div>
                            <div className="burger">
                                <div onClick = {toggleCollapse}>
                                    {stateClicked ? <BiMenuAltRight size={32}/> : <BiX size={32}/>}
                                </div>
                            </div>
                    </Navbar>
                    <div onClick={toggleCollapse}>
                        <Nav className={stateClicked ? "dropdown-menu" : "dropdown-show"}>    
                            <ul className="dropdown-links">
                                <li><Nav.Link href="#modeltuning">Model Tuning</Nav.Link></li>
                                <li><Nav.Link href="#modelresult">Model Result</Nav.Link></li>
                                <li><Nav.Link href="#report">Report Submissions</Nav.Link></li>
                            </ul>
                        </Nav>
                        <div className="background-shadow"></div>
                    </div>
                </div>
            </div>
        </body>
    )
}
