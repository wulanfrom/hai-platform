import React from 'react'
import './Summary.css'

// pages
import SummaryCard from '../Summary/SummaryCard'

// bootstrap components
import Button from 'react-bootstrap/Button'

export default function Summary(props) {
    const allData = props.totalData;
    // filter data according to the data
    const tab1Data = allData.filter(data => data.agreeLabel == 1 && data.agreeExp == 1);
    const tab2Data = allData.filter(data => data.agreeLabel == 1 && data.agreeExp == 0);
    const tab3Data = allData.filter(data => data.agreeLabel == 0 && data.agreeExp == 1);
    const tab4Data = allData.filter(data => data.agreeLabel == 0 && data.agreeExp == 0);

    return (
        <div>
            <h2>Your Observations Summary</h2>
            <div className="summary-container">
                <div className="crcLabelcrcExp">
                    <div className="top-bar">
                        <p><b>Tab 1</b></p>
                        <p>Correct Label, Correct Explanation</p>
                    </div>
                    <div className="scrollable-summary">
                        {/* for correct label and explanation */}
                        { tab1Data.map((data, i) => 
                            <SummaryCard key={i} data={data} />
                        )}
                    </div>
                </div>
                <div className="crcLabelWrngExp">
                    <div className="top-bar">
                        <p><b>Tab 2</b></p>
                        <p>Correct Label, Wrong Explanation</p>
                    </div>
                    <div className="scrollable-summary">
                        {/* for correct label and explanation */}
                        { tab2Data.map((data, i) => 
                            <SummaryCard key={i} data={data} />
                        )}
                    </div>
                </div>
                <div className="wrngLabelcrcExp">
                    <div className="top-bar">
                        <p><b>Tab 3</b></p>
                        <p>Wrong Label, Correct Explanation</p>
                    </div>
                    <div className="scrollable-summary">
                        {/* for correct label and explanation */}
                        { tab3Data.map((data, i) => 
                            <SummaryCard key={i} data={data} />
                        )}
                    </div>
                </div>
                <div className="wrngLabelWrngExp">
                    <div className="top-bar">
                        <p><b>Tab 4</b></p>
                        <p>Wrong Label, Wrong Explanation</p>
                    </div>
                    <div className="scrollable-summary">
                        {/* for correct label and explanation */}
                        { tab4Data.map((data, i) => 
                            <SummaryCard key={i} data={data} />
                        )}
                    </div>
                </div>
            </div>

            <div>
                <h2>Share your Model with Other Users</h2>
                <div className="share-container">
                    <div>
                        <p>Want to share your findings with other users? Upload to database.</p>
                        <Button variant="primary">Share Findings</Button>
                    </div>
                    <div>
                        <p>Explore what other users have found!</p>
                        <Button variant="primary">Explore Database</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
