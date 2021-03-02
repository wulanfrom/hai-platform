import React, { useState, useRef, useEffect } from 'react'
import './MasterUpload.css'

// bootstrap component
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Pages
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'
import GiveExplanation from '../GiveExplanation/GiveExplanation'
import Summary from '../Summary/Summary'
import LabelPage from '../LabelPage/LabelPage'
import Improve from '../Improve/Improve'

export default function MasterUpload() {
    const [currentStep, setCurrentStep] = useState(0); //current step
    const [uploadImages, setUploadedImages] = useState([]); //the uploaded images from the dropzone
    const [validNext, setValidNext] = useState(false); //whether next is disabled or not
    const [allData, setAllData] = useState([]); //holds all the cards and their id, data, and agreeValues
    const [improvement, updateImprovement] = useState("");

    // check when to make next button appear
    const handleNext = (step) => {
        const nextStep = currentStep + 1;
        //So it doesnt go beyond bounds
        if (currentStep >= 5) {
            setCurrentStep(5);
        }
        
        else {
            setCurrentStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
      
    // check when to make previous button appear
    const handleBack = () => {
        const nextStep = currentStep - 1;
        //So it doesnt go beyond bounds
        if (currentStep == 0) {
            setCurrentStep(0);
        }
        else {
            setCurrentStep((prevActiveStep) => prevActiveStep - 1);
        }
    };  

    // received changed data from Card whenever the agree value is changed
    // assign it to the editAgreeId
    const sendChangedData = (data) => {
        const updatedList = allData.map(eachCard => {
            // if they have the same id
            if (eachCard.id == data.id) {
                let item = eachCard;
                item.agreeLabel = data.agreeLabel;
            }
            return eachCard
        });
        setAllData(updatedList);
        // console.log("all cards");
        // console.log(allData);
    }

    const updateAllData = (updatedList) => {
        setAllData(updatedList);
    }

    //toggle whether to disable next or not
    const checkNext = (validity) => {
        setValidNext(validity);
    }

    // gets images from the dropzone and saves it in the local uploaded images value
    // const getImages = (imageList) => {
    //     setUploadedImages(imageList);
    // }

    // add cards to the global card list
    const addData = (data) => {
        setAllData(prevArray => [...prevArray, data]);
        // console.log(allData);
    }

    // delete a card item in the global card list
    const deleteItem = (name) => {
        const modifiedList = allData.filter(eachCard => {
            return eachCard.id !== name;
        })
        setAllData(modifiedList);
    }

    // update the value taken from explanation page
    const sendExpToMasterUpload = (updatedList) => {
        setAllData(updatedList);
    }

    // get value from giveExplanation and update improvement
    const sendImprovement = (data) => {
        updateImprovement(data);
    }

    // Resetting the reset function
    const triggerResetFunction = () => {
        setCurrentStep(0);
        setUploadedImages([]);
        setAllData([]);
        setValidNext(false);
        updateImprovement("");
    }

    // render next button
    const getNextButton = (currentStep) => {
        if (currentStep == 5) {
            return (
                ""
            )
        }
        else if (!validNext && currentStep == 0) {
            return (
                <Button disabled id="nextBtn" className="btn btn-secondary first-next" type="button" onClick={ handleNext }>Next</Button>
            )
        }
        else if (validNext && currentStep == 0) {
            return (
                <Button id="nextBtn" className="btn btn-secondary first-next" type="button" onClick={ handleNext }>Next</Button>
            )
        }
        else if (validNext && currentStep > 0 && currentStep < 5) {
            return (
                <Button id="nextBtn" className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button>
            )
        }
        else {
            return (
                <Button disabled id="nextBtn" className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button>
            )
        }
    }

    const getPrevButton = (currentStep) => {
        if (currentStep > 0) {
            return (
                <Button className="prevBtn btn btn-secondary" type="button" onClick={ handleBack }>Previous</Button>
            )
        }
        else {
            return ""
        }
    }

    const getStepDesc = (currentStep) => {
        if (currentStep == 0) {
            return (
                <p>Upload pictures you want to label.</p>
            )
        }
        else if (currentStep == 1) {
            return (
                <p>Label Whether you agree with the label created by the model or not.</p>
            )
        }
        else if (currentStep == 2) {
            return (
                <p>Apply an explanation model to the picture.</p>
            )
        }
        else if (currentStep == 3) {
            return (
                <p>Summarization of your inputs.</p>
            )
        }
        else if (currentStep == 4) {
            return (
                <p>How would you Improve the explanation model?</p>
            )
        }
        else if (currentStep == 5) {
            return (
                <p>Share your Findings with Others.</p>
            )
        }
        else {
            return (
                <p>Share your Findings with Others.</p>
            )
        }
    }

    const updateUploadedImages = () => {
        const modifiedList = allData.map(eachItem => eachItem.data);
        // console.log("modifiedList");
        // console.log(modifiedList);
        setUploadedImages(modifiedList);
    }

     // on mount
     useEffect(() => {
        updateUploadedImages();
    }, [currentStep]);

    console.log("all data");
    console.log(allData);

    console.log("uploadImages");
    console.log(uploadImages);

    // console.log("improvement");
    // console.log(improvement);

    return (
        <div>
            <Container fluid className="stepsWrapper">
                <div>
                    <Progress className="progress" currentStep = { currentStep } />
                </div>
                {/* <Row>
                    <Col sm={10}>
                        <Progress className="progress" currentStep = { currentStep } />
                    </Col>
                    <Col className="progress-button" sm={2}>
                        <div className="step-button">
                            { getPrevButton(currentStep) }
                            { getNextButton(currentStep) }
                        </div>
                    </Col>
                </Row> */}
                <div>
                    <h6><b>Step { currentStep + 1 }</b></h6>
                    { getStepDesc(currentStep) }
                </div>
                <div className="step-button progress-button">
                    { getPrevButton(currentStep) }
                    { getNextButton(currentStep) }
                </div>
            </Container>
            <Container>
                <div>
                    {/* getImages = {getImages} */}
                    { currentStep == 0 ? <DropZone addData = { addData } checkNext = { checkNext } currentStep = { currentStep } getDeletedItem = { deleteItem } currentData={ uploadImages } /> : ""}
                    { currentStep == 1 ? <LabelPage data={ allData } updateAllData = { updateAllData } /> : ""}
                    { currentStep == 2 ? <GiveExplanation data={allData} sendImprovement={ sendImprovement } sendExpToMasterUpload = { sendExpToMasterUpload } improvement = { improvement }/> : "" }
                    { currentStep == 3 ? <Summary totalData={allData} triggerResetFunction={triggerResetFunction} /> : ""}
                    { currentStep == 4 ? <Improve allData={allData} /> : ""}
                </div>
            </Container>
        </div>
    )
}
