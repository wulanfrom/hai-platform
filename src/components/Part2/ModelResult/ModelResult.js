import React from 'react'
import './ModelResult.css'

import Chart from 'react-google-charts'

//for navigation

import Navigation from '../../Navbar/Navigation'
import navLinks from '../../../navLinks'

export default function ModelResult() {
    return (
        <div>
            {/* <Navigation props={navLinks.part2}/>  */}
            <div className="result-wrapper">
                <div className="result">
                    <h5>RESULT</h5>
                    <div className="result-inside">
                        <p>Accuracy:</p>
                        <p>60.7%</p>
                    </div>
                    <div className="chart-wrapper1">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="Line"
                            loader={<div>Getting Your Results...</div>}
                            data={[
                                [
                                'Percentage',
                                'Accuracy',
                                'Loss',
                                'Transformers: Age of Extinction',
                                ],
                                [1, 37.8, 80.8, 41.8],
                                [2, 30.9, 69.5, 32.4],
                                [3, 25.4, 57, 25.7],
                                [4, 11.7, 18.8, 10.5],
                                [5, 11.9, 17.6, 10.4],
                                [6, 8.8, 13.6, 7.7],
                                [7, 7.6, 12.3, 9.6],
                                [8, 12.3, 29.2, 10.6],
                                [9, 16.9, 42.9, 14.8],
                                [10, 12.8, 30.9, 11.6],
                                [11, 5.3, 7.9, 4.7],
                                [12, 6.6, 8.4, 5.2],
                                [13, 4.8, 6.3, 3.6],
                                [14, 4.2, 6.2, 3.4],
                            ]}
                            options={{
                                chart: {
                                title: 'Comparison of Accuracy and Loss of the Model',
                                subtitle: 'in Percentage',
                                },
                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                    </div>
                    <div className="chart-wrapper2">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="Line"
                            loader={<div>Getting Your Results...</div>}
                            data={[
                                [
                                'Percentage',
                                'Accuracy',
                                'Loss',
                                'Transformers: Age of Extinction',
                                ],
                                [1, 37.8, 80.8, 41.8],
                                [2, 30.9, 69.5, 32.4],
                                [3, 25.4, 57, 25.7],
                                [4, 11.7, 18.8, 10.5],
                                [5, 11.9, 17.6, 10.4],
                                [6, 8.8, 13.6, 7.7],
                                [7, 7.6, 12.3, 9.6],
                                [8, 12.3, 29.2, 10.6],
                                [9, 16.9, 42.9, 14.8],
                                [10, 12.8, 30.9, 11.6],
                                [11, 5.3, 7.9, 4.7],
                                [12, 6.6, 8.4, 5.2],
                                [13, 4.8, 6.3, 3.6],
                                [14, 4.2, 6.2, 3.4],
                            ]}
                            options={{
                                chart: {
                                title: 'Comparison of Accuracy and Loss of the Model',
                                subtitle: 'in Percentage',
                                },
                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                    </div>
                    <div className="chart-wrapper3">
                        <Chart
                            width={'600px'}
                            height={'400px'}
                            chartType="Line"
                            loader={<div>Getting Your Results...</div>}
                            data={[
                                [
                                'Percentage',
                                'Accuracy',
                                'Loss',
                                'Transformers: Age of Extinction',
                                ],
                                [1, 37.8, 80.8, 41.8],
                                [2, 30.9, 69.5, 32.4],
                                [3, 25.4, 57, 25.7],
                                [4, 11.7, 18.8, 10.5],
                                [5, 11.9, 17.6, 10.4],
                                [6, 8.8, 13.6, 7.7],
                                [7, 7.6, 12.3, 9.6],
                                [8, 12.3, 29.2, 10.6],
                                [9, 16.9, 42.9, 14.8],
                                [10, 12.8, 30.9, 11.6],
                                [11, 5.3, 7.9, 4.7],
                                [12, 6.6, 8.4, 5.2],
                                [13, 4.8, 6.3, 3.6],
                                [14, 4.2, 6.2, 3.4],
                            ]}
                            options={{
                                chart: {
                                title: 'Comparison of Accuracy and Loss of the Model',
                                subtitle: 'in Percentage',
                                },
                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}