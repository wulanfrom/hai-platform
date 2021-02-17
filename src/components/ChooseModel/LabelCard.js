import React, { useEffect, useRef, useState }from 'react'

// // React components
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'
import './LabelCard.css'

export default function LabelCard(props) {
    const data = props.data;
    const dataName = props.name;
    const dataLabel = props.label;
    const imageRef = useRef();
    const [agreeValue, setAgreeValue] = useState(props.agreeValue); //set the do you agree with the lab to false
    var values = {
        id: dataName,
        data: data,
        agreeLabel: agreeValue,
        agreeExp: 0,
        explanation: "",
        LIMEPic: null,
    }


    // add images to the cards
    const loadImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    // send data everytime the photo is updated
    useEffect(() => {
        values = {
            id: dataName,
            // data: data,
            agreeLabel: agreeValue,
            label: dataLabel,
            // agreeExp: 0,
            // explanation: "",
            // LIMEPic: null,
        }
        // send changed data to parent
        props.sendChangedData(values);
        // console.log("radio button changed");
    }, [agreeValue]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        loadImage(data);
    }, []);

    return (
        <div className="card-wrapper">
            <Card className="card-container">
                <Card.Body>
                    <div className="photo-container" ref={ imageRef }></div>
                    <div>
                        <p className="card-label">Label</p>
                        {/* <Card.Title>{ dataLabel }</Card.Title> */}
                        <Card.Title>Bird</Card.Title>
                    </div>
                    <div>
                        <Card.Text className="card-label">Do you Agree with the Label?</Card.Text>
                        <ButtonGroup toggle>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="secondary"
                                    name="radio"
                                    value={radio.value}
                                    checked={ agreeValue == radio.value }
                                    onChange={(e) => setAgreeValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}