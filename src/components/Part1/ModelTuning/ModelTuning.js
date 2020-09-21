import React, {useState} from 'react'
import './ModelTuning.css'
// import RangeSlider from 'react-bootstrap-range-slider';
import cardData from '../../LayerCard/cardData'
import LayerCard from '../../LayerCard/LayerCard';
import layersList from '../../LayerList/layersList'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LayerList from '../../LayerList/LayerList';

export default function ModelTuning() {
    const [ value, setValue ] = useState(0); 
    const property = cardData;
    // console.log(cardData);
    const layerCard = property.map( (index) => <LayerCard props={index}/>);
    // console.log(property[0].desc);
    const layers = layersList;
    const listoflayers = layers.map( (index) => <LayerList props={index}/>);
 
    return (
        <div className="tuning-wrapper">
            <div className="top-row">
                <div className="input">
                    <h5>INPUT</h5>
                    <div className="input-inside">
                        <p className="param-name">DATA DIVISION</p>
                        <p className="param-desc">How would you divide the training and testing data?</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                <option>Train:Test = 1:1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="divider"></div>
                        <p className="param-name">BATCH SIZE</p>
                        <p className="param-desc">Number of Batches per Epochs</p>
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
                        <p className="param-name">EPOCHS</p>
                        <p className="param-desc">Number of passes through the entire training dataset</p>
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
                        {listoflayers}
                    </div>
                </div>  
            </div>
            <div className="addLayers">
                <h5>ADD LAYERS</h5>
                <div className="add-inside">
                    {/* {<LayerCard props={property[0]}/>} */}
                    {layerCard}
                </div>
            </div>
            <Button className="global-button make-model">Generate Model</Button>
        </div>
    )
}
