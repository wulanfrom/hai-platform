import React, { useRef, useEffect, useState } from 'react'
import './SummaryCard.css'

// bootstrap components
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { red } from '@material-ui/core/colors'

export default function SummaryCard(props) {
    const data = props.data.data;
    const labelName = props.data.label;
    const explanation = props.data.explanation;
    const agreeLabel = props.data.agreeLabel;
    const agreeExp = props.data.agreeExp;
    const imageRef = useRef(); //for the card image
    const orgImgRef = useRef(); //for the original image
    const modelImgRef = useRef(); //for the explanation image
    const [modalOpen, updateModal] = useState(false); //checks whether the modal is open

    const wrong = {
        backgroundColor: 'red',
    }

    const right = {
        backgroundColor: 'green',
    }

    // openModal
    const openModal = () => {
        updateModal(true);
        loadImage(data, orgImgRef);
        loadImage(data, modelImgRef);
    }

    // closeModal
    const closeModal = () => {
        updateModal(false);
    }

    // add images to the cards
    const loadImage = (file, imageRef) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.style.backgroundImage = `url(${e.target.result})`; //for the card picture
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        loadImage(data, imageRef);
        // loadImage(data, orgImgRef);
    }, []);
    console.log(data);
    console.log(agreeExp);
    console.log(agreeLabel);

    return (
        <div>
            <div>
                <Card className="summary-card" onClick={openModal}>
                    <div>
                        <div className="indicator">
                            <div className="label-indicator" style={agreeLabel ? right : wrong}></div>
                            <div className="exp-indicator" style={agreeExp ? right : wrong}></div>
                        </div>
                        <div className="photo-container" ref={imageRef}></div>
                    </div>
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text>
                            <b>Label: </b>
                            <p>{ labelName }</p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            {/* Modal */}
            <div className="modal fade" id="myModal">
                <Modal className="itemModal" dialogClassName="modal-90w" show={ modalOpen } onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Inputted Explanation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h5>Original Image</h5>
                            <img className="modalImage" ref={ orgImgRef } />
                            <h5>Image Through Explainability Model</h5>
                            <img className="modalImage" ref={ modelImgRef } />
                        </div>
                        <div>
                            <h5>Label</h5>
                            <p>{ labelName }</p>
                        </div>
                        <div>
                            <h5>Explanation</h5>
                            <p>{ explanation }</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={ closeModal }>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
