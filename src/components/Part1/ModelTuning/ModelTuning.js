import React, {useState} from 'react'
import './ModelTuning.css'
// import RangeSlider from 'react-bootstrap-range-slider';
import cardData from '../../LayerCard/cardData'
import LayerCard from '../../LayerCard/LayerCard';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ModelTuning() {
    const [ value, setValue ] = useState(0); 
    const property = cardData;
    console.log(property);
 
    return (
        <div className="tuning-wrapper">
            <div className="top-row">
                <div className="input">
                    <h5>INPUT</h5>
                    <div className="input-inside">
                        <p>DATA DIVISION</p>
                        <h6>How would you divide the training and testing data?</h6>
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Ratio of training data:</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                        </Form>
                        <div className="divider"></div>
                        <p>BATCH SIZE</p>
                        <h6>Number of Batches per Epochs</h6>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="divider"></div>
                        <p>EPOCHS</p>
                        <h6>Number of passes through the entire training dataset</h6>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div className="layers">
                    <h5>LAYERS</h5>
                    <div className="layers-inside">

                    </div>
                </div>  
            </div>
            <div className="addLayers">
                <h5>ADD LAYERS</h5>
                <div className="add-inside">
                    <LayerCard props={property[0]}/>
                </div>
            </div>
            <Button className="global-button make-model">Generate Model</Button>
        </div>
    )
}
