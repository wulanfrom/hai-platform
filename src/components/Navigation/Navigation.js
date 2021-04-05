import React from 'react'
import './Navigation.css'

// redux
import { connect } from 'react-redux'

// bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    return (
        <div>
             { props.isAuthenticated ? 
                (<Navbar collapseOnSelect className="navbar">
                    <Navbar.Brand href="/hai-platform/getStarted"><b>Assignment 2</b></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/hai-platform/getStarted">Get Started</Nav.Link>
                        <Nav.Link href="/hai-platform/upload">Apply Models</Nav.Link>
                        <Nav.Link href="/hai-platform/logout">Logout</Nav.Link>
                    </Nav>
                </Navbar>)
                : 
                (<Navbar collapseOnSelect className="navbar">
                    <Navbar.Brand><b>Assignment 2</b></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/hai-platform/login">Login</Nav.Link>
                    </Nav>
                </Navbar>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}

export default connect(mapStateToProps)(Navigation);