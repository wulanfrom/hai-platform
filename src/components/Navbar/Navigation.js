import React, {useState} from 'react'
import './Navigation.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'

import {
    BrowserRouter as Router,
    HashRouter,
    Link,
  } from "react-router-dom";

import { VscQuestion } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX, BiHelpCircle } from "react-icons/bi";
import {AiOutlineRightCircle, AiOutlineLeftCircle} from 'react-icons/ai'

export default function Navigation(props) {
    // const data= props.props[0];
    // // console.log(data.buttonName);
    // const {id, index, home, tuning, result, report, buttonName, buttonLink} = props.props[0];
    // // console.log(buttonName);
    // const [stateClicked, handleToggle] = useState(false)

    // const toggleCollapse = () => handleToggle(stateClicked => !stateClicked)
    const sectionList = ["1. Exploring datasets and model performance", "2. Implementing LIME", "3. Visualization Exercise"]
    // const section = userSelector(state => state.section)
    return (
        <body>
            <div>
                {/* <div className="nav-wrapper">
                    <Navbar className="gradient-nav" expand="lg">
                        <Navbar.Brand id="nav-brand" href={data.home}>Assignment 2: Explainability</Navbar.Brand>
                            <div className="nav-links">
                                <Nav>    
                                    <Nav.Link href={data.tuning}>Model Tuning</Nav.Link>
                                    <Nav.Link href={data.result}>Model Result</Nav.Link>
                                    <Nav.Link href={data.report}>Report Submissions</Nav.Link>
                                </Nav>
                            </div>
                            <div className="to-part-2">
                                <HashRouter>
                                    <Nav.Link exact href={data.buttonLink}>
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
                </div> */}
                <Navbar className='justify-content-center' id="navbar">
                    <Navbar.Brand id="navbar-brand">Assignment 2. Explanability and Visualization</Navbar.Brand>
                    <Row className="mx-auto">
                        <Col className='d-flex align-middle'>
                            <p><AiOutlineLeftCircle size={24}/></p>
                        </Col>
                        <Col>
                        <NavDropdown title="" className='text-left' id='navbar-dropdown'>
                            <NavDropdown.Item href="/bias-awareness-platform/#/visualization"> {sectionList[0]}</NavDropdown.Item>
                            <NavDropdown.Item href="/bias-awareness-platform/#/bias-testing"> {sectionList[1]} </NavDropdown.Item>
                            <NavDropdown.Item href="/bias-awareness-platform/#/mitigation"> {sectionList[2]} </NavDropdown.Item>
                        </NavDropdown>
                        </Col>
                        <Col className='d-flex align-middle'>
                            <p><AiOutlineRightCircle size={24}/></p>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        </body>
    )
}
