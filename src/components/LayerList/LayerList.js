import React from 'react'
import './LayerList.css'

export default function LayerList(props) {
    const {id, index, title, desc} = props.props;

    return (
        <div className="layerList-outer">
            <div className="layerList-wrapper">
                <div className="square"></div>
                <div className="layer-desc">
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}
