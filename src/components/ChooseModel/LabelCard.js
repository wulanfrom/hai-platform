import React, { useEffect, useRef, useState }from 'react'

// // React components
// import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
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
        label: dataLabel,
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

    console.log("labelCard: ", dataLabel);
    // console.log("dataLabel: ",)

    return (
        <div className="card-wrapper">
            <Card className="card-container">
                <Card.Body>
                    <div className="photo-container" ref={ imageRef }></div>
                    <div className="info-body">
                        <div>
                            <div className="label-result">
                                <p className="card-label">Label</p>
                                <h5><Badge className="class-result">Airplane</Badge></h5>
                            </div>
                            {/* <div id="separator"></div> */}
                            <p className="class-badge-result">Classification Model</p>
                            <h5><Badge pill className="class-model">InceptionV3</Badge></h5>
                        </div>
                        <hr></hr>
                        <div>
                            <Card.Text>Do you Agree with the Label?</Card.Text>
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="secondary"
                                        name="radio"
                                        value={radio.value}
                                        checked={ agreeValue === radio.value }
                                        onChange={(e) => setAgreeValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
