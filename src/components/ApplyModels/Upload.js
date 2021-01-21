import React, { useState, useRef } from 'react'
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'
import ChooseModel from '../ChooseModel/ChooseModel'
import {
    BrowserRouter as Router,
    Switch, 
    Link,
    Route
  } from 'react-router-dom';

export default function Upload() {
    const [imageAmount, setImageAmount] = useState([]); //get status of amount of pictures uploaded
    const [currentStep, setCurrentStep] = useState(0); //get status on the current step.
    
    const handleCallBack = (imageData) => {
        setImageAmount(imageData);
    }

    const stepCallBack = (stepData) => {
        setCurrentStep(stepData);
    }

    const loadTitle = (step) => {
        switch (step) {
            case 0:
                return <h2> Upload pictures </h2>
            case 1:
                return <h2> Choose Models </h2>
        }
    }

    // const loadPage = (step) => {
    //     switch (step) {
    //         case 0:
    //             return  
    //             <div className="content">
    //                 <DropZone parentCallBack = { handleCallBack } />
    //             </div>
    //         case 1:
    //             return 
    //             <div>
    //                 <ChooseModel />
    //             </div>
    //     }
    // }

    return (
        <div>
            <h2> Upload pictures </h2>
            <Progress imageCount={ imageAmount } parentCallBack={ stepCallBack } />
            <p className="title">React Drag and Drop Image Upload</p>
            <div className="content">
                <DropZone parentCallBack = { handleCallBack } />
            </div>
        </div>
    )
}
