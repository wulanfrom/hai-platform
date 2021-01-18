import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Switch, 
    Link,
    Route
} from 'react-router-dom';


// Pages
import GetStarted from '../GetStarted/GetStarted'
import Upload from '../ApplyModels/Upload'
import Explore from '../Explore/Explore'


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect bg="dark" variant="dark">
                    <Navbar.Brand href="/getStarted">XAIPlatform</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/getStarted">GET STARTED</Nav.Link>
                        <Nav.Link href="/applyModels">APPLY MODELS</Nav.Link>
                        <Nav.Link href="/explore">EXPLORE</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
