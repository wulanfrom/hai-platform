import React, { useState, useEffect } from 'react'
import './LabelPage.css'

// pages
import Card from '../ChooseModel/Card'

export default function LabelPage(props) {
    const [allData, setAllData] = useState(props.data);

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
    }

    // send data everytime the allData list is updated
    useEffect(() => {
        props.updateAllData(allData);
        // console.log("radio button changed");
    }, [allData]);


    // Apply ML here
    const getLabel = () => {

    }

    return (
        <div>
            { allData.map((item) => 
                <div key={item.id}>
                    <Card name = {item.id} data = {item.data} label="" agreeValue = {item.agreeLabel} sendChangedData = { sendChangedData } />
                </div>
            )}
        </div>
    )
}
