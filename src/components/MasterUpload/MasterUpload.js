import React, { useState, useRef } from 'react'

// bootstrap component
import Button from 'react-bootstrap/Button'

// Pages
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'
import ChooseModel from '../ChooseModel/ChooseModel'

export default function MasterUpload() {
    const [currentStep, setCurrentStep] = useState(0);
    const [uploadImages, setUploadedImages] = useState([]);
    const [validNext, setValidNext] = useState(false);

    const handleNext = (step) => {
        const nextStep = currentStep + 1;
        if (currentStep == 4) {
            setCurrentStep(4);
        }
        else {
            setCurrentStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
      
    const handleBack = () => {
        const nextStep = currentStep - 1;
        if (currentStep == 0) {
            setCurrentStep(0);
        }
        else {
            setCurrentStep((prevActiveStep) => prevActiveStep - 1);
        }
    };  

    const checkNext = (validity) => {
        setValidNext(validity);
    }

    const getImages = (imageList) => {
        setUploadedImages(imageList);
    }

    console.log(uploadImages);
    return (
        <div>
            <h1>Step: { currentStep + 1 }</h1>
            <Progress currentStep = { currentStep } />
            { currentStep > 0 ? <Button className="btn btn-secondary" type="button" onClick={ handleBack }>Previous</Button> : ""}
            {/* Change the function of currentStep to disabled once we make function of photo upload */}
            { validNext ? <Button className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button> : <Button disabled className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button>}
            <div>
                <DropZone getImages = {getImages} checkNext = { checkNext } currentStep = { currentStep }/>
                <ChooseModel imageList = {uploadImages} currentStep = { currentStep } />
            </div>
        </div>
    )
}
