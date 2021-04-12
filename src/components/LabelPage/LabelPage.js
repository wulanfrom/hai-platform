import React, { useState, useEffect } from 'react'
import './LabelPage.css'

// pages
import LabelCard from '../ChooseModel/LabelCard'
import { Container } from 'react-bootstrap';

export default function LabelPage(props) {
    const [allData, setAllData] = useState(props.data);

    // received changed data from Card whenever the agree value is changed
    // assign it to the editAgreeId
    const sendChangedData = (data) => {
        const updatedList = allData.map(eachCard => {
            // if they have the same id
            if (eachCard.id === data.id) {
                let item = eachCard;
                item.agreeLabel = data.agreeLabel;
                item.label = data.label;
                item.imageID = data.imageID;
                item.imageURL = data.imageURL;
                item.isUploaded = data.isUploaded ;
            }
            return eachCard
        });
        setAllData(updatedList);
    }

    function getErrorFlag(item) {
        return (item.errorStages.includes(1) && item.agreeLabel == -1) ? true : false
    }

    function getLoadingFlag(item) {
        return item.label == '' ? true : false
    }

    // send data everytime the allData list is updated
    useEffect(() => {
        console.log(allData);

        props.updateAllData(allData);
        // console.log("radio button changed");
    }, [allData]);

    return (
        <Container fluid>
            <div className="label-cards-wrappers">
                { allData.slice(0).reverse().map((item) => 
                    <div key={item.id}>
                        <LabelCard name = {item.id} 
                        data = {item.data} 
                        label={item.label} 
                        agreeValue = {item.agreeLabel} 
                        errorFlag = {getErrorFlag(item)} 
                        loading = {getLoadingFlag(item)} 
                        isUploaded = {item.isUploaded} 
                        imageID = {item.imageID}
                        imageURL = {item.imageURL}
                        sendChangedData = { sendChangedData } />
                    </div>
                )}
            </div>
        </Container>
    )
}
