import React, { useState } from 'react'

// react components
import Table from 'react-bootstrap/Table'

// pages
import TableBody from '../ModelTable/TableBody'

export default function ShapTable(props) {
    const [allData, updateData] = useState(props.data);

    // received changed data from Card whenever the agree value is changed
    // assign it to the editAgreeId
    const sendChangedExplanation = (data) => {
        const updatedList = allData.map(eachCard => {
            // if they have the same id
            if (eachCard.id === data.id) {
                let item = eachCard;
                item.explanation = data.explanation;
                item.agreeExp = data.agreeExp;
            }
            return eachCard
        });

        //send the data to the Give Explanation
        props.sendExpToGive(updatedList);
    }

    const rows = allData.map((data, i) => {
        return (
            <TableBody data={data} key={i} sendChangedExplanation = { sendChangedExplanation }/>
        )
    });

    return (
        <div>
            <p>This is the Shap table</p>
            <Table striped bordered hover>
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
