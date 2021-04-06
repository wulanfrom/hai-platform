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

                console.log(item)
            }
            return eachCard
        });
        setAllData(JSON.parse(JSON.stringify(updatedList)));
    }

    // send data everytime the allData list is updated
    useEffect(() => {
        props.updateAllData(allData);
        // console.log("radio button changed");
    }, [allData]);


    // Apply ML here
    const getLabel = (item) => {
        console.log(item);
        return "Airplane";
    }

    return (
        <Container fluid>
            <div className="label-cards-wrappers">
                { allData.map((item) => 
                    <div key={item.id}>
                        <LabelCard name = {item.id} data = {item.data} label={item.label} agreeValue = {item.agreeLabel} sendChangedData = { sendChangedData } />
                    </div>
                )}
            </div>
        </Container>
    )
}
