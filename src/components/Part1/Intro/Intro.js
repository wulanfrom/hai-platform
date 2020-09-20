import React from 'react'
import './Intro.css'

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import ModelTuning from '../ModelTuning/ModelTuning'

export default function Intro() {
    return (
        <div className="intro-wrapper">
            <h1 className="title">Assignment 2: Should I Trust You with My Decision? </h1>
            <div className="directions">
                <h3 className="sub-title">What do I do?</h3>
                <p>It's a two-part assignment. First, you will use our interactive platform to explore, implement, and inspect methods for detecting, scoring, and mitigating AI bias. Second, you will reflect on your activities through answering a series of discussion questions below.</p>
                <h3 className="sub-title">Scenario</h3>
                <p className="scenario">“You are making an image classification model for a satellite to sense whether an area is densely packed with life or not. None densely packed areas will be used for building new cities for your client.”</p>
                <h3 className="sub-title">Discussion Questions</h3>
                <p>Please answer the following questions after you complete the exploration and implementation through the platform above. Make sure to cite any external sources when you refer to examples, ideas, and quotes to support your arguments.</p>
            </div>
            <Link exact to="modeltuning">
                <Button className="middle global-button">Proceed to Part 1</Button>
            </Link>
        </div>
    )
}
