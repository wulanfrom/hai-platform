import React from 'react'
import { Button } from 'react-bootstrap'
import "./Report.css"

import Table from 'react-bootstrap/Table'

import Navigation from '../../Navbar/Navigation'
import navLinks from '../../../navLinks'

export default function Report() {
    return (
        <div>
            {/* <Navigation props={navLinks.part2}/>  */}
            <div className="report-wrapper">
                <h5>REPORT SUBMISSION</h5>
                    <div className="report-inside">
                        <p>You can submit multiple times. The report you submit here will be used for grading.</p>
                        <div className="give-report">
                            <Button className="outline-button"> Choose a file..</Button>
                            <p>Example.pdf</p>
                        </div>
                    </div> 
                <Button className="global-button submit-button">Submit Report</Button>
                <div className="submission-table">
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>No.</th>
                            <th>File Name</th>
                            <th>Submission Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
