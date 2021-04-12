import React from 'react'
import './Summary.css'

// pages
import SummaryCard from '../Summary/SummaryCard'

// bootstrap components
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

export default function Summary(props) {
    const allData = props.totalData;
    // filter data according to the data

    console.log(allData);

    const tab1Data = allData.filter(data => data.agreeLabel === "1" && data.agreeExp === "1");
    const tab2Data = allData.filter(data => data.agreeLabel === "1" && data.agreeExp === "0");
    const tab3Data = allData.filter(data => data.agreeLabel === "0" && data.agreeExp === "1");
    const tab4Data = allData.filter(data => data.agreeLabel === "0" && data.agreeExp === "0");

    console.log(tab1Data);
    console.log(tab2Data);
    console.log(tab3Data);
    console.log(tab4Data);

    return (
        <div>
            <Container fluid className="title-container">
                <h3 className="obs-title"><b>Summary of Your Work</b></h3>
                <div className="desc-summary">
                    {
                    /*
                    <p>Your Images were labeled using</p>
                    <h5><Badge pill className="class-model-desc">InceptionV3</Badge></h5>
                    <p>and was explained by</p>
                    <h5><Badge pill className="lime-model">LIME</Badge></h5>
                    */
                    }
                </div>
                <div className="summary-container">
                    <div className="crcLabelcrcExp">
                        <div className="top-bar">
                            <p><b>Tab 1</b> Correct Label, Correct Explanation</p>
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
                            <p><b>Tab 2</b> Correct Label, Wrong Explanation</p>
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
                            <p><b>Tab 3</b> Wrong Label, Correct Explanation</p>
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
                            <p><b>Tab 4</b> Wrong Label, Wrong Explanation</p>
                        </div>
                        <div className="scrollable-summary">
                            {/* for correct label and explanation */}
                            { tab4Data.map((data, i) => 
                                <SummaryCard key={i} data={data} />
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
