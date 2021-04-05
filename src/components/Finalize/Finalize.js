import React, { useState } from 'react'
import './Finalize.css'

// bootstrap components
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

export default function Finalize(props) {
    const [currentStep, changeStep] = useState(0);
    const options = [
        "Step 1: Upload Pictures",
        "Step 2: Get Label",
        "Step 3: Get Explanation",
        "Step 4: Summary",
        "Step 5: Improvements"
    ]

    const handleChange = (e) => {
        console.log(e.target.value);
        changeStep(parseInt(e.target.value));
    }

    return (
        <div>
            <Container fluid className="finalizeWrapper">
                <h1>Congratulations!</h1>
                <p>You've sucessfully reached the last stage. Do you want to save your current progress or do you want to edit?</p>
                <Button>Save Progress</Button>
                <Form>
                    <Form.Group controlId="selectStep">
                        <Form.Label>Select Step to Go back to</Form.Label>
                        <Form.Control as="select" value={currentStep} onChange={handleChange} custom>
                            {
                                options.map((option, idx) => (
                                    <option key={idx} value={idx}>{option}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={ () => props.changeCurStep(currentStep) }>Go to Step</Button>
                </Form>
            </Container>
        </div>
    )
}