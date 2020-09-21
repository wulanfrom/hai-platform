import React, {useState} from 'react'
import './ModelTuning.css'
// import RangeSlider from 'react-bootstrap-range-slider';
import cardData from '../../LayerCard/cardData'
import LayerCard from '../../LayerCard/LayerCard';
import layersList from '../../LayerList/layersList'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LayerList from '../../LayerList/LayerList'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


import { VscQuestion } from "react-icons/vsc";

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
                        <Container>
                            <Row>
                                <Col>
                                <div className="param-info">
                                    <p className="param-name">DATA DIVISION</p>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip>
                                        Training to Testing Data division
                                        </Tooltip>
                                    }
                                    >
                                        <VscQuestion color="#76819A"/>
                                    </OverlayTrigger>
                                </div>
                                {/* <p className="param-desc">Training to Testing Data division</p> */}
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                        <option>10:90</option>
                                        <option>30:70</option>
                                        <option>50:50</option>
                                        <option>70:30</option>
                                        <option>10:90</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                                </Col>
                                <Col>
                                    <div className="param-info">
                                        <p className="param-name">BATCH SIZE</p>
                                        <OverlayTrigger
                                    overlay={
                                        <Tooltip>
                                        Number of Batches per Epochs
                                        </Tooltip>
                                    }
                                    >
                                        <VscQuestion color="#76819A"/>
                                    </OverlayTrigger>
                                    {/* <p className="param-desc">Number of Batches per Epochs</p> */}
                                    </div>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                        <option>100</option>
                                        <option>200</option>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                <div className="param-info">
                                    <p className="param-name">EPOCHS</p>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip>
                                        Number of passes through the entire training dataset
                                        </Tooltip>
                                    }
                                    >
                                        <VscQuestion color="#76819A"/>
                                    </OverlayTrigger>
                                    {/* <p className="param-desc">Number of passes through the entire training dataset</p> */}
                                </div>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>15</option>
                                    <option>50</option>
                                    <option>100</option>
                                    <option>200</option>
                                    <option>500</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>  
                                <Col>
                                <div className="param-info">
                                    <p className="param-name">ACTIVATION FUNCTION</p>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip>
                                        Activation Function Used for the Convolutional Layer
                                        </Tooltip>
                                    }
                                    >
                                        <VscQuestion color="#76819A"/>
                                    </OverlayTrigger>
                                    {/* <p className="param-desc">Activation Function Used for the Convolutional Layer</p> */}
                                </div>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select">
                                    <option>Relu</option>
                                    <option>Activation Function 2</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="layers">
                    <h5>LAYERS</h5>
                    <div className="layers-inside">
                        <div className="layer-input">
                            <Form.Control type="text" placeholder="Enter Layer Type" />
                            <Button className="addlayer-button">+</Button>
                        </div>
                        {listoflayers}
                    </div>
                </div>  
            </div>
            {/* <div className="addLayers"> */}
                {/* <h5>ADD LAYERS</h5> */}
                {/* <div className="add-inside"> */}
                    {/* {<LayerCard props={property[0]}/>} */}
                    {/* {layerCard} */}
                {/* </div> */}
            {/* </div> */}
            <Button className="global-button make-model">Generate Model</Button>
        </div>
    )
}
