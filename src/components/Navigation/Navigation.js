import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'



export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect className="navbar">
                    <Navbar.Brand href="/hai-platform/getStarted"><b>XAIPlatform</b></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/hai-platform/getStarted">Get Started</Nav.Link>
                        <Nav.Link href="/hai-platform/upload">Apply Models</Nav.Link>
                        <Nav.Link href="/hai-platform/explore">Explore</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
