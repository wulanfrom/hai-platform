import React, { useEffect, useRef }from 'react'

// // React components
import Button from 'react-bootstrap/Button'
import './Card.css'

export default function Card(props) {
    const data = props.data;
    const dataName = props.name;
    const imageRef = useRef();

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
        loadImage(data);
    });


    return (
        <div className="card-wrapper">
            <div className="card-container">
                <div className="photo-container" ref={ imageRef }></div>
                <div>
                    <p className="card-label">Label</p>
                    {/* <p>{ dataName }</p> */}
                    <div>
                        <p className="card-label">Do you Agree with the Label?</p>
                        <Button className="btn btn-secondary" type="button">Yes</Button>
                        <Button className="btn btn-secondary" type="button">No</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
