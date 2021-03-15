import React, { useState, useEffect } from 'react'
import './GiveExplanation.css'

// Bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Pages 
import LimeTable from '../ModelTable/LimeTable'
import ShapTable from '../ModelTable/ShapTable'
import EmptyTable from './EmptyTable'


export default function GiveExplanation(props) {
    const [selectedModel, updateModel] = useState("lime");
    const [dropdownVal, changeDropdownVal] = useState("lime");
    const [showTable, changeShow] = useState(false);
    const allData = props.data;
    // const [improvement, updateImprovement] = useState(props.improvement);
    const improvement = props.improvement;

    //update the value of the selection depending on the dropdown
    const changeModel = () => {
        updateModel(dropdownVal);
        changeShow(true);
    }

    // get value of selected model
    const getDropdownVal = (e) => {
        changeDropdownVal(e.target.value);
    }

    // receives data from limeTable/ShapTable and sends it to master upload page
    const sendExpToGive = (updatedList) => {
        //send the data to the Give Explanation
        props.sendExpToMasterUpload(updatedList);
    }

    
    // const changeImprovement = (e) => {
    //     updateImprovement(e.target.value);
    // }

    // update the improvement whenever it changes the text area
    useEffect(() => {
        props.sendImprovement(improvement);
    }, [improvement]);

    const getTable = (selectedModel) => {
        if (selectedModel === "lime" && showTable) {
            return (
                <LimeTable data={ allData } sendExpToGive = { sendExpToGive }/>
            )
        }
        else if (selectedModel === "shap" && showTable) {
            return (
                <ShapTable data={ allData } sendExpToGive = { sendExpToGive }/>
            )
        }
        else {
            return (
                <EmptyTable />
            )
        }
    }

    return (
        <Container fluid>
            <h3 className="exp-title"><b>Images and Their Explanations</b></h3>
            <Form>
                <Row>
                    <Col xs lg="6">
                        <Form.Group controlId="explainabilityModelSelect">
                            <Form.Label>Choose an Explainability Model</Form.Label>
                            <Form.Control as="select" value={ dropdownVal } onChange={ getDropdownVal } >
                                <option value="lime">LIME</option>
                                <option value="shap">SHAP</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs lg="2" className="apply-model">
                        <Button variant="primary" onClick = { changeModel }>Apply Explanation</Button>
                    </Col>
                </Row>
            </Form>
            <div>
                { getTable(selectedModel) }
                {/* { selectedModel == "lime" && showTable ? <LimeTable data={ allData } sendExpToGive = { sendExpToGive }/> : <EmptyTable /> }
                { selectedModel == "shap" && showTable ? <ShapTable data={ allData } sendExpToGive = { sendExpToGive }/> : <EmptyTable /> } */}
            </div>
            {/* <div>
                <Form.Group controlId="improvementTextArea" className="improvementTextArea">
                    <Form.Label>What can you do to make the model label images correctly?</Form.Label>
                    <p className="improvementLabel">What kinds of additional information would you include in your explanation?</p> */}
                    {/* whenever it changes, update the globaldata in master upload */}
                    {/* <Form.Control as="textarea" value={ improvement } rows={3} onChange={ changeImprovement } />
                </Form.Group>
            </div> */}
        </Container>
    )
}
