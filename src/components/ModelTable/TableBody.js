import React, { useRef, useState, useEffect } from 'react'

import './TableBody.css'

// bootstrap components
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'

export default function TableBody(props) {
    const data = props.data;
    const imageRef = useRef();
    const expRef = useRef();
    const [expAgree, setExpAgree] = useState(data.agreeExp); //set the do you agree with the lab to false
    const [explanation, setExplanation] = useState(data.explanation);
    var values = {
        id: data.id,
        agreeExp: expAgree,
        explanation: explanation,
        // LIMEPic: data.data,
    }

    // add images to the table
    const loadImage = (file, imageRef) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
     useEffect(() => {
        // Update the document title using the browser API
        loadImage(data.data, imageRef);
        loadImage(data.data, expRef);
        props.applyLimeModel({
            id: data.id,
            LIMEPic: data.data,
        });
    }, []);


    // update the data's explanation
    const updateExplanation = (e) => {
        setExplanation(e.target.value);
    }

    // apply lime model
    const getLimePic = () => {

    }

    // send data to LimeTable whenever the expAgree and explanation changes.
    useEffect(() => {
        values = {
            id: data.id,
            agreeExp: expAgree,
            explanation: explanation,
        }

        // send changed data to parent
        props.sendChangedExplanation(values);
        // console.log("radio button changed");
    }, [expAgree, explanation]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    console.log("data: ", data);

    return (
        // <div>
        <tr>
            <td>
                <div>
                    {/* image */}
                    <div className="image-wrapper">
                        <div id="image-container" ref={ imageRef }></div>
                    </div>
                    {/* image name */}
                    <p>{ data.id }</p>
                </div>
            </td>
            <td>
                {/* Put lime picture here */}
                <div className="exp-wrapper">
                    <div className="exp-container" ref={ expRef }></div>
                </div>  
            </td>
            <td>
                <div className="labelName">
                    <p>Label</p>
                    {/* <p>{ data.label }</p> */}
                    <h5><Badge className="class-result">{ data.label }</Badge></h5>
                </div>
                <div className="agreeLabel">
                    <p>Is the explanation easy to understand?</p>
                    <ButtonGroup className="yesNo" toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={ expAgree == radio.value }
                                onChange={(e) => setExpAgree(e.currentTarget.value)}
                                className="expRadioBtn"
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div>
                    <Form.Group controlId="explanationTextArea">
                        <Form.Label className="expLabel">
                            <p>Is the Explanation Sufficient to Trust the model prediction?</p>
                        </Form.Label>
                        {/* whenever it changes, update the globaldata in master upload */}
                        <Form.Control as="textarea" value={ explanation } rows={3} onChange={ updateExplanation } />
                    </Form.Group>
                </div>
            </td>
        </tr>
        // </div>
    )
}
