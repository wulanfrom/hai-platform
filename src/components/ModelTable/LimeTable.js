import React, { useState} from 'react'

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
        // console.log("sendChangedExp");
        const copyData = [...allData];
        const updatedList = copyData.map(eachCard => {
            // if they have the same id
            if (eachCard.id === data.id) {
                let item = eachCard;
                item.explanation = data.explanation;
                item.agreeExp = data.agreeExp;
            }
            return eachCard
        });
        //update allData
        updateData(updatedList);

        //send the data to the Give Explanation
        props.sendExpToGive(updatedList);
    }

    //apply lime model
    const applyLimeModel = (data) => {
        // console.log("applied model");
        const copyData = [...allData];
        const updatedList = copyData.map(eachCard => {
            // if they have the same id
            if (eachCard.id === data.id) {
                // apply the assigne LIME picture to the item.LIMEPic
                let item = eachCard;
                // console.log(data);
                item.LIMEPic = data.LIMEPic;
                item.LIMEURL = data.LIMEURL;

                if(item.errorStages.includes(2)) {
                    const index = item.errorStages.indexOf(2);
                    item.errorStages.splice(index, 1);
                }
            }

            return eachCard;
        });

        //update allData
        updateData(updatedList);

        props.sendExpToGive(updatedList);
    }

    function getErrorFlag(item) {
        return (item.LIMEPic == null || item.agreeExp == -1) ? true : false;
    }

    function getLoadingFlag(item) {
        return item.LIMEPic == null ? true : false;
    }

    const rows = allData.slice(0).reverse().map((data, i) => {
        return (
            <TableBody data={data} key={i} errorFlag={getErrorFlag(data)} loading={getLoadingFlag(data)} sendChangedExplanation = { sendChangedExplanation } applyLimeModel = { applyLimeModel } />
        )
    });

    return (
        <div>
            <Table bordered className="lime-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Image</th>
                        <th style={{textAlign: "center"}}>Explanation from your implementation</th>
                        <th style={{textAlign: "center"}}>Questions</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </Table>
        </div>
    )
}
