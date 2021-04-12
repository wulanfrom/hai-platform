import React, { useRef, useEffect, useState } from 'react'
import './SummaryCard.css'

// bootstrap components
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default function SummaryCard(props) {
    const data = props.data.data;
    const expImg = props.data.LIMEPic;
    const labelName = props.data.label;
    const explanation = props.data.explanation;
    // const agreeLabel = props.data.agreeLabel;
    // const agreeExp = props.data.agreeExp;
    const imageRef = useRef(); //for the card image
    const orgImgRef = useRef(); //for the original image
    const modelImgRef = useRef(); //for the explanation image
    const [modalOpen, updateModal] = useState(false); //checks whether the modal is open

    // const wrong = {
    //     backgroundColor: 'red',
    // }

    // const right = {
    //     backgroundColor: 'green',
    // }

    // function wrong() {
    //     return (
    //         <object type="image/svg+xml">
    //             <img src="../../images/bx-x.svg" />
    //         </object>
    //     )
    // }

    // function right() {
    //     return (
    //         <object type="image/svg+xml">
    //             <img src="../../images/bx-check.svg" />
    //         </object>
    //     )
    // }

    // const wrong = 
    // <div className="wrong-tag">
    //     {/* <object data="../../images/bx-x.svg" type="image/svg+xml"> */}
    //         <img src="../../images/bx-x.svg" alt="wrong-icon"/>
    //     {/* </object>  */}
    // </div>
            
    
    // const right = 
    // <div className="right-tag" >
    //     {/* <object data="../../images/bx-check.svg" type="image/svg+xml"> */}
    //         <img src="../../images/bx-check.svg" alt="right-icon"/>
    //     {/* </object> */}
    // </div>

    // openModal
    const openModal = () => {
        updateModal(true);
        loadImage(data, orgImgRef);
        loadImage(expImg, modelImgRef);
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
    // console.log(data);
    // console.log(agreeExp);
    // console.log(agreeLabel);

    return (
        <div>
            <div>
                <Card className="summary-card" onClick={openModal}>
                    <div>
                        {/* <div className="indicator">
                            <div className="label-indicator" style={agreeLabel ? right : wrong}></div>
                            <div className="exp-indicator" style={agreeExp ? right : wrong}></div>
                        </div> */}
                        <div className="photo-container" ref={imageRef}></div>
                    </div>
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <div className="sum-card-body">
                            <div className="label-summary">
                                <p><b>Label : </b></p>
                                <h5><Badge className="summary-class-result">{ labelName }</Badge></h5>
                                {/* <p>{ labelName }</p> */}
                            </div>
                            <div>
                                
                            </div>
                            {/* <div>
                                <div className="indicator">
                                    <div className="label-side">
                                        <div className="label-indicator">{agreeLabel ? right : wrong}</div>
                                        <p>Label</p>
                                    </div>
                                    <p className="divider">|</p>
                                    <div className="exp-side">
                                        <div className="exp-indicator">{agreeExp ? right : wrong}</div>
                                        <p>Explanation</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Card.Body>
                </Card>
            </div>
            {/* Modal */}
            <div className="modal fade" id="myModal">
                <Modal className="itemModal" dialogClassName="modal-90w" show={ modalOpen } onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detailed Information</Modal.Title>
                    </Modal.Header>
                    {/* <div className="summary-card-body"> */}
                    <Modal.Body>
                        <h5>Image and Explanation</h5> 
                        <div>
                            <table style={{height: "400px", width: "100%"}}>
                                <tr>
                                    <td className='summaryTableTd'>  
                                        <div className="modalImage" alt="original-ref" ref={orgImgRef} />
                                    </td>
                                    <td className='summaryTableTd'>
                                        <div className="modalImage" alt="modal-ref" ref={modelImgRef} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='summaryModalLabel'>Original image</td> 
                                    <td className='summaryModalLabel'>Explanation</td> 
                                </tr>
                            </table>
                        </div>

                        <hr />

                        <div className="card-label">
                            <h5>Predicted Label </h5>
                            <Badge className="class-result">{labelName}</Badge>
                        </div>

                        <br />
                        <div>
                            <h5>Your response on useful additional information</h5>
                            <p>{ explanation }</p>
                        </div>
                    </Modal.Body>
                    {/* </div> */}
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
