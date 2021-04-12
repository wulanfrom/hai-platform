import React, { useState, useEffect } from 'react'
import './MasterUpload.css'

// bootstrap component
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

// Pages
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'
import GiveExplanation from '../GiveExplanation/GiveExplanation'
import Summary from '../Summary/Summary'
import LabelPage from '../LabelPage/LabelPage'
import Improve from '../Improve/Improve'
import Finalize from '../Finalize/Finalize'

export default function MasterUpload() {
    const [currentStep, setCurrentStep] = useState(0); //current step
    const [uploadImages, setUploadedImages] = useState([]); //the uploaded images from the dropzone
    const [validNext, setValidNext] = useState(false); //whether next is disabled or not
    const [allData, setAllData] = useState([]); //holds all the cards and their id, data, and agreeValues
    const [improvement, updateImprovement] = useState(""); //explanation part in the give explanation page
    const [improvementList, updateImprovementList] = useState([]); // list of improvements from the ui page

    // check when to make next button appear
    const handleNext = (step) => {
        // const nextStep = currentStep + 1;
        //So it doesnt go beyond bounds
        if (currentStep >= 5) {
            setCurrentStep(5);
        }
        
        else {
            console.log(allData);
            if (checkValidity(currentStep)) {
                setCurrentStep((prevActiveStep) => prevActiveStep + 1);
            }
            else {

            }
        }
    };

    function checkValidity(step) {
        console.log(step);

        if(step == 1) {
            var flag = false;

            for(var i=0;i<allData.length;i++) {
                if(allData[i].agreeLabel == -1) {
                    flag = true;

                    if(!allData[i].errorStages.includes(1))
                        allData[i].errorStages.push(1);
                }
                else {
                    if (allData[i].errorStages.includes(1)) {
                        const index = allData[i].errorStages.indexOf(1);
                        allData[i].errorStages.splice(index, 1);
                    }
                }
            }
        }
        else if(step == 2) {
            for(var i=0;i<allData.length;i++) {
                if(allData[i].LIMEPic == null || 
                   (allData[i].LIMEPic != null && allData[i].agreeExp == -1)) {
                    flag = true;

                    if(!allData[i].errorStages.includes(2))
                        allData[i].errorStages.push(2);
                }
                else {
                    if (allData[i].errorStages.includes(2)) {
                        const index = allData[i].errorStages.indexOf(2);
                        allData[i].errorStages.splice(index, 1);
                    }
                }
            }
        }

        console.log(allData);

        if(flag) {
            setAllData([... allData]);
            return false;
        }

        return true;
    }
      
    // check when to make previous button appear
    const handleBack = () => {
        // const nextStep = currentStep - 1;
        //So it doesnt go beyond bounds
        if (currentStep === 0) {
            setCurrentStep(0);
        }
        else {
            if (checkValidity(currentStep)) {
                setCurrentStep((prevActiveStep) => prevActiveStep - 1);
            }
            else {

            }
        }
    };  

    // received changed data from Card whenever the agree value is changed
    // assign it to the editAgreeId
    // const sendChangedData = (data) => {
    //     const updatedList = allData.map(eachCard => {
    //         // if they have the same id
    //         if (eachCard.id === data.id) {
    //             let item = eachCard;
    //             item.agreeLabel = data.agreeLabel;
    //         }
    //         return eachCard
    //     });
    //     setAllData(updatedList);
    //     // console.log("all cards");
    //     // console.log(allData);
    // }

    const updateAllData = (updatedList) => {
        console.log(updatedList);
        setAllData(updatedList);
    }

    //toggle whether to disable next or not
    const checkNext = (validity) => {
        setValidNext(validity);
    }

    //changes the current step
    const changeCurStep = (step) => {
        setCurrentStep(step);
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

    // Resetting the reset function
    const triggerResetFunction = () => {
        setCurrentStep(0);
        setUploadedImages([]);
        setAllData([]);
        setValidNext(false);
        updateImprovement("");
    }


    // update the improvements given by users
    const updateImprovementTab = (dataSent) => {
        // handleNext(currentStep);
        //update ImprovementList
        updateImprovementList(dataSent);
    }

    // render next button
    const getNextButton = (currentStep) => {
        if (currentStep === 5) {
            return (
                ""
            )
        }
        else if (!validNext && currentStep === 0) {
            return (
                <Button disabled id="nextBtn" className="btn btn-secondary first-next" type="button" onClick={ handleNext }>Next</Button>
            )
        }
        else if (validNext && currentStep === 0) {
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
        if (currentStep === 0) {
            return (
                <p>Upload images that you want to get the classification label and explanation.</p>
            )
        }
        else if (currentStep === 1) {
            return (
                <p>Browse the classification results of <i>Inception v3</i> model and annotate whether the label is correct or not. </p>
            )
        }
        else if (currentStep === 2) {
            return (
                <p>Browse the explanations that your implementation provides and annotate whether the explanation helps you understand why the model produced such label. Please state additional information that might be helpful to understand or trust the explanations, if you have any. </p>
            )
        }
        else if (currentStep === 3) {
            return (
                <p>Here is the summary of your work, organized by annotations. Please browse the results and try to come up with limitations of the explanation algorithm and how to design a UI that can overcome the limitations. Clicking an item in the summary gives you the original image, explanation, and your response on the question of additional information. </p>
            )
        }
        else if (currentStep === 4) {
            return (
                <div>
                    <p>In this page, you are asked to write limitations of the explanation algorithm and your 
                        ideas of how to overcome the limitations. You can add multiple limitations in 
                        the following section. For each limitation, you are asked to write a short report 
                        that includes (1) when the LIME algorithm does not work, (2) images and explanations 
                        that you have tried as a convincing evidence, and (3) your ideas on how to overcome 
                        the limitations in a UI. Clicking <b> this icon </b> allows you to browse and select 
                        images with explanations that you have uploaded. </p>

                    <p style={{ marginTop: "10px" }}>After listing up the limitations, create your own prototype of an interactive explainable
                    UI [<a href='https://docs.google.com/presentation/d/192xWEs7RSMKyLC-3CPLnqYs7U0__Zpb21QHevkZIdh8/edit#slide=id.p'>examples</a>] to help users better understand the prediction results. 
                    Follow the steps below: </p>

                    <ol>
                        <li className='listUIPlane'> Prepare an example where the prediction result and LIME explanation
                        is hard to understand, e.g., “I cannot judge if referring to the shape
                        of the ears would lead to a correct prediction, so I need to see more
                            examples for comparison.” </li>
                        <li className='listUIPlane'>Come up with dimensions and functionalities that you think would be
                        helpful to provide a better explanation in the case you identified
                        in Step a, e.g., data points’ feature editor, feature statistics visualization,
                                ROC curve visualization, a chatbot for explanations, etc. </li>
                        <li className='listUIPlane'>Use <a href='https://www.figma.com/'>Figma</a> to build a prototype of a web-based UI like Google’s What-If Tool that allows users to
                        proactively seek satisfying explanations. For example, users may want to query additional
                        information, request clarifications, edit data points to test a hypothesis,
                        or give feedback to improve model performance. Your prototype doesn’t need to be
                        fully interactive with every feature you add, e.g.,”login” button or “upload new
                        image” button doesn’t need to be interactive. Please focus on the core interactive
                        and explainable concept you’re introducing.
                                </li>
                    </ol>



                </div>
            )
        }
        else if (currentStep === 5) {
            return (
                <p>Now you are all done! Check out the following work that the server stores, which is going to be used in grading. Note that your submission only in the "Create UI" stage (i.e., reports describing the limitations of explanation algorithm and interactive UI design in Figma) is used in the grading. Please let us know if something went wrong. </p>
            )
        }
        else {
            return (
                // <p>Share your Findings with Others.</p>
                <p>Finalize your Ideas.</p>
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

    // console.log("all data", allData);

    // console.log("uploadImages");
    // console.log(uploadImages);

    // console.log("improvement");6
    // console.log(improvement);

    // console.log("improvementList masterupload: ", improvementList);

    return (
        <div>
            <Container fluid className="stepsWrapper">
                <div>
                    <Progress className="progress" currentStep = { currentStep } />
                </div>
                <div className="step-button progress-button">
                    { getPrevButton(currentStep) }
                    { getNextButton(currentStep) }
                </div>
                <br />
                <div>
                    <h6><b>Step { currentStep + 1 }</b></h6>
                    { getStepDesc(currentStep) }
                </div>
                <hr />
            </Container>
            <Container>
                <div>
                    {/* getImages = {getImages} */}
                    { currentStep === 0 ? <DropZone addData = { addData } checkNext = { checkNext } currentStep = { currentStep } getDeletedItem = { deleteItem } currentData={ uploadImages } data={allData}  updateAllData={updateAllData}/> : ""}
                    { currentStep === 1 ? <LabelPage data={ allData } updateAllData = { updateAllData } /> : ""}
                    { currentStep === 2 ? <GiveExplanation data={allData} sendImprovement={ sendImprovement } sendExpToMasterUpload = { sendExpToMasterUpload } improvement = { improvement }/> : "" }
                    { currentStep === 3 ? <Summary totalData={allData} triggerResetFunction={triggerResetFunction} /> : ""}
                    { currentStep === 4 ? <Improve updateImprovementTab={updateImprovementTab} currentImprovement={improvementList} allData={allData} /> : ""}
                    { currentStep === 5 ? /* <Finalize changeCurStep={changeCurStep} /> */ "" : ""}
                </div>
            </Container>
        </div>
    )
}
