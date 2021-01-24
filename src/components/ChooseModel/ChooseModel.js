import React from 'react'
import Card from './Card'

export default function ChooseModel(props) {
    const currentStep = props.currentStep;
    const imageList = props.imageList;
    return (
        <div>
            {/* <p>Hello</p> */}
            <div className={`${currentStep == 1 ? "" : "hidden"}`}>
                {/* Show list of cards */}
                { imageList.map((data, i) => 
                    <div key={i}>
                        <Card name={data.name} data={data}/>
                    </div>
                ) }
            </div>
        </div>
    )
}
