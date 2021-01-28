import React, { useState } from 'react'
import './GiveExplanation.css'

// Bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Pages 
import LimeTable from '../ModelTable/LimeTable'
import ShapTable from '../ModelTable/ShapTable'


export default function GiveExplanation() {
    const [selectedModel, updateModel] = useState("lime");
    const [dropdownVal, changeDropdownVal] = useState("lime");
    const [showTable, changeShow] = useState(false);

    //update the value of the selection depending on the dropdown
    const changeModel = () => {
        updateModel(dropdownVal);
        changeShow(true);
    }

    // get value of selected model
    const getDropdownVal = (e) => {
        changeDropdownVal(e.target.value);
    }

    return (
        <div>
            <Form>
            <Form.Group controlId="explainabilityModelSelect">
                <Form.Label>Choose an Explainability Model</Form.Label>
                <Form.Control as="select" value={ dropdownVal } onChange={ getDropdownVal } >
                    <option value="lime">LIME</option>
                    <option value="shap">SHAP</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick = { changeModel }>Apply Explanation</Button>
            </Form>
            <div>
                { selectedModel == "lime" && showTable ? <LimeTable /> : "" }
                { selectedModel == "shap" && showTable ? <ShapTable /> : "" }
            </div>
        </div>
    )
}
