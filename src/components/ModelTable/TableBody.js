import React, { useRef, useState, useEffect } from 'react'

import './TableBody.css'

// bootstrap components
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'

export default function TableBody(props) {
    const data = props.data;
    const imageRef = useRef();
    const [expAgree, setExpAgree] = useState(data.agreeExp); //set the do you agree with the lab to false
    const [explanation, setExplanation] = useState(data.explanation);
    var values = {
        id: data.id,
        // data: data,
        // agreeLabel: agreeValue,
        agreeExp: expAgree,
        explanation: explanation,
        LIMEPic: null,
    }

    // add images to the table
    const loadImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
     useEffect(() => {
        // Update the document title using the browser API
        loadImage(data.data);
    }, []);


    // update the data's explanation
    const updateExplanation = (e) => {
        setExplanation(e.target.value);
    }

    // send data to LimeTable whenever the expAgree and explanation changes.
    useEffect(() => {
        values = {
            id: data.id,
            // data: data,
            agreeExp: expAgree,
            // agreeExp: 0,
            explanation: explanation,
            // LIMEPic: null,
        }

        // send changed data to parent
        props.sendChangedExplanation(values);
        // console.log("radio button changed");
    }, [expAgree, explanation]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    return (
        // <div>
        <tr>
            <td>
                <div>
                    {/* image */}
                    <div className="image-container" ref={ imageRef }></div>
                    {/* image name */}
                    <p>{ data.id }</p>
                </div>
            </td>
            <td>
                {/* Put lime picture here */}
                {/* <img>Lime Picture</img> */}
            </td>
            <td>
                <div className="labelName">
                    <p>Label</p>
                    {/* Put result of label here */}
                    <p>{ data.label }</p>
                </div>
                <div className="agreeLabel">
                    <p>Is the explanation easy to understand?</p>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={ expAgree == radio.value }
                                onChange={(e) => setExpAgree(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div>
                    <Form.Group controlId="explanationTextArea">
                        <Form.Label>Is the Explanation Sufficient to Trust the model prediction?</Form.Label>
                        {/* whenever it changes, update the globaldata in master upload */}
                        <Form.Control as="textarea" value={ explanation } rows={3} onChange={ updateExplanation } />
                    </Form.Group>
                </div>
            </td>
        </tr>
        // </div>
    )
}
