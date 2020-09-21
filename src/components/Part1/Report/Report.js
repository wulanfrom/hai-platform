import React from 'react'
import { Button } from 'react-bootstrap'
import "./Report.css"


export default function Report() {
    return (
        <div className="report-wrapper">
            <h5>REPORT SUBMISSION</h5>
                <div className="report-inside">
                    <p>You can submit multiple times. The report you submit here will be used for grading.</p>
                    <div className="give-report">
                        <Button className="outline-button"> Choose a file..</Button>
                        <p>Example.pdf</p>
                    </div>
                </div> zx
            <Button className="global-button submit-button">Submit Report</Button>
        </div>
    )
}
