import React, { useState, useEffect } from 'react'

// react components
import Table from 'react-bootstrap/Table'

// pages
import TableBody from '../ModelTable/TableBody'
import './LimeTable.css'

export default function LimeTable(props) {
    const [allData, updateData] = useState(props.data);

    // received changed data from Card whenever the agree value is changed
    // assign it to the editAgreeId
    const sendChangedExplanation = (data) => {
        console.log("sendChangedExp");
        const updatedList = allData.map(eachCard => {
            // if they have the same id
            if (eachCard.id == data.id) {
                let item = eachCard;
                item.explanation = data.explanation;
                item.agreeExp = data.agreeExp;
            }
            return eachCard
        });

        //send the data to the Give Explanation
        props.sendExpToGive(updatedList);
    }

    //apply lime model
    const applyLimeModel = (data) => {
        console.log("applied model");
        const updatedList = allData.map(eachCard => {
            // if they have the same id
            if (eachCard.id == data.id) {
                // apply the assigne LIME picture to the item.LIMEPic
                let item = eachCard;
                console.log(data);
                item.LIMEPic = data.LIMEPic;
            }

            return eachCard;
        });

        props.sendExpToGive(updatedList);
    }

    const rows = allData.map((data, i) => {
        return (
            <TableBody data={data} key={i} sendChangedExplanation = { sendChangedExplanation } applyLimeModel = { applyLimeModel } />
        )
    });

    return (
        <div>
            <Table bordered className="lime-table">
                <thead>
                    <tr>
                        <th>Input Image</th>
                        <th>Explanation</th>
                        <th>Label</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </Table>
        </div>
    )
}
