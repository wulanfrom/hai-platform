import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {setSection} from '../actions'
import '../styles/Navigation.css'
import Tour from 'reactour'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const Navigation = () => {
    const sectionList = ["1. Exploring datasets and model performance", "2. Implementing LIME", "3. Create Your Own Visualization"]
    const section = useSelector(state => state.selection)
    const dispatch = useDispatch()

    const usePrev = () => {
        return section > 1 && section < 4
    }

    const useNext = () => {
        return section > 0 && section < 3
    }

    const useDropdown = () => {
        return section > 0 && section < 4
    }

    function goToPage(page_index){
        switch(page_index) {
            case 1:
                window.location.href = "/hai-platform/#/exploration"
                dispatch(setSection(1))
                break;
                // window.location.reload()
            case 2:
                window.location.href = "/hai-platform/#/implemenation"
                dispatch(setSection(2))
                break;
                // window.location.reload()
            case 3:
                window.location.href = "/hai-platform/#/exploration"
                dispatch(setSection(3))
                // alert("This page is not available. For now")
                break;
            default:
                alert("No such page!")
        }
    }
   
    return (
        <div>
            <Navbar className='justify-content-center' id='navbar'>
                <Navbar.Brand id="navbar-brand">Assignment 2. Explainability and Visualization</Navbar.Brand>
                <Row className="mx-auto">
                    <Col><Link to="/exploration">Exploration</Link></Col>
                    <Col><Link to="/implementation">Implementation</Link></Col>
                    <Col><Link to="/visualization">Visualization</Link></Col>
                    <Col><Link to="/finish">Finish</Link></Col>
                </Row>
                <div className='tutorial-button'>
                    <OverlayTrigger
                    key={'left'}
                    placement={'left'}
                    overlay={
                        <Tooltip id={`tooltip-${'left'}`}>
                        Click here for help
                        </Tooltip>
                    }
                    >
                        <div style={{cursor: "pointer"}}>
                            <AiOutlineQuestionCircle size={24} color="#fff"/>
                        </div>
                    </OverlayTrigger>
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation;