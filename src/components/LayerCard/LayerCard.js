import React from 'react'
import Button from 'react-bootstrap/Button'
import './LayerCard.css'

export default function LayerCard(props) {
    const {id, index, title, desc} = props;

    return (
        <div className="layer-card">
            <h6>{title}</h6>
            <p className="layer-desc">{desc}</p>
            <div>
                <Button className="add-layer-button">+</Button>
            </div>
        </div>
    )
}
