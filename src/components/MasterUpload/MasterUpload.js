import React, { useState, useRef } from 'react'

// bootstrap component
import Button from 'react-bootstrap/Button'

// Pages
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'
import ChooseModel from '../ChooseModel/ChooseModel'
import Card from '../ChooseModel/Card'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import GiveExplanation from '../GiveExplanation/GiveExplanation'

export default function MasterUpload() {
    const [currentStep, setCurrentStep] = useState(0); //current step
    const [uploadImages, setUploadedImages] = useState([]); //the uploaded images from the dropzone
    const [validNext, setValidNext] = useState(false); //whether next is disabled or not
    const [allData, setAllData] = useState([]); //holds all the cards and their id, data, and agreeValues
    const [editAgreeId, setAgreeId] = useState(""); //keeps the name of the id with changed agree value
    const [improvement, updateImprovement] = useState("");

    // check when to make next button appear
    const handleNext = (step) => {
        const nextStep = currentStep + 1;
        //So it doesnt go beyond bounds
        if (currentStep >= 3) {
            setCurrentStep(3);
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

    //toggle whether to disable next or not
    const checkNext = (validity) => {
        setValidNext(validity);
    }

    // gets images from the dropzone and saves it in the local uploaded images value
    const getImages = (imageList) => {
        setUploadedImages(imageList);
    }

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

    // console.log("all data");
    // console.log(allData);

    console.log("improvement");
    console.log(improvement);

    return (
        <div>
            <h1>Step: { currentStep + 1 }</h1>
            <Progress currentStep = { currentStep } />
            { currentStep > 0 ? <Button className="btn btn-secondary" type="button" onClick={ handleBack }>Previous</Button> : ""}
            {/* Change the function of currentStep to disabled once we make function of photo upload */}
            { validNext ? <Button className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button> : <Button disabled className="btn btn-secondary" type="button" onClick={ handleNext }>Next</Button>}
            <div>
                <DropZone addData = { addData } getImages = {getImages} checkNext = { checkNext } currentStep = { currentStep } getDeletedItem = { deleteItem }/>
                {/* <ChooseModel getLabelResult = {getLabelResult} imageList = {uploadImages} currentStep = { currentStep } /> */}
                { currentStep == 1 ? allData.map((item) => 
                    <div key={item.id}>
                        <Card name = {item.id} data = {item.data} agreeValue = {item.agreeLabel} sendChangedData = {sendChangedData}/>
                        {/* <Card name = {data.name} data = {data} /> */}
                    </div>
                ): ""}
                {/* if the current step is 2, then show the page */}
                { currentStep == 2 ? <GiveExplanation data={allData} sendImprovement={ sendImprovement } sendExpToMasterUpload = { sendExpToMasterUpload } improvement = { improvement }/> : "" }
            </div>
        </div>
    )
}
