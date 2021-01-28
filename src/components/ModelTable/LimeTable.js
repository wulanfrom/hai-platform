import React from 'react'

// react components
import Table from 'react-bootstrap/Table'

export default function LimeTable() {
    return (
        <div>
            <p>This is the lime table</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Input Image</th>
                        <th>Explanation</th>
                        <th>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>    */}
                </tbody>
            </Table>
        </div>
    )
}
