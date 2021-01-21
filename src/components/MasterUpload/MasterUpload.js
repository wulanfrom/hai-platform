import React, { Component } from 'react'
import './MasterUpload.css'

// Pages
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'

// Bootstrap component
import Button from 'react-bootstrap/Button'

export default class MasterUpload extends Component {
    constructor(props) {
        super(props)
        // Bind new functions for next and previous
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)

        //set the initial input values
        this.state = {
            currentStep: 1,
            imageAmount: 0,
        }
        //Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this)
        this.handleCallBack = this.handleCallBack.bind(this)
    }

    //Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
    }

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
            let currentStep = this.state.currentStep
            // If the current step is 1 or 2 or 3, then add one on "next" button click
            currentStep  = currentStep >= 3 ? 4: currentStep + 1   
            this.setState({
                currentStep: currentStep
            })
    }

    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;
        // if the current step is 1, render previous button
        if (currentStep != 1) {
            return (
            <Button className="btn btn-secondary" type="button" onClick={this._prev}>Previous</Button>
            )
        }
        // else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        let imageAmount = this.state.imageAmount
         // If the current step is not 4, then render the "next" button
         if (currentStep < 4 && imageAmount < 1) {
            return (
                <Button disabled className="btn btn-secondary" type="button" onClick={this._next}>Next</Button>
            )
         }
         else if (currentStep < 4) {
            return (
                <Button className="btn btn-secondary" type="button" onClick={this._next}>Next</Button>
            )
         }
         // else return nothing
        return null;
    }

    handleCallBack = (imageData) => {
        this.setState({
            imageAmount: imageData,
        })
        // this.state.imageAmount = imageData;
    }

    render() {
        return (
            <div>
                <h2>Step {this.state.currentStep}</h2>
                <h2>{this.state.imageAmount}</h2>
                <div>
                    <div class="progress-wrapper">
                        <Progress currentStep = {this.state.currentStep - 1}/>
                        {/* Render previous, next buttons */}
                        {this.previousButton}
                        {this.nextButton}
                    </div>

                    <div>
                        <DropZone parentCallBack = { this.handleCallBack } currentStep = {this.state.currentStep - 1}/>
                    </div>
                </div>
            </div>
        )
    }
}
