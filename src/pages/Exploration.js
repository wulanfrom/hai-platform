import React from 'react'

const Exploration = () => {
    return(
        <div className="visualization-new">
            <div className="loading">
                <h3> Please wait a moment </h3>
                <p style={{marginTop: "1rem"}}> Your model is current being built.</p>
                <div className='spinner'></div>
            </div>

        </div>
    )
}

export default Exploration;