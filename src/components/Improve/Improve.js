import React, { useEffect, useState } from 'react'

// Pages
import UITabs from '../UITabs/UITabs'

export default function Improve(props) {
    const [allData, updateData] = useState(props.currentImprovement);

    const sendToImprove = (data) => {
        updateData(data);
    }

    useEffect(() => {
        props.updateImprovementTab(allData);
    }, [allData]);

    // console.log("allData in Improve: ", allData);

    return (
        <div>
            <UITabs allData={props.allData} improvementData={allData} sendToImprove={sendToImprove} />
        </div>
    )
}
