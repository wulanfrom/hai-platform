import React, { useRef } from 'react'
import Progress from '../Banner/Progress'
import DropZone from '../DropZone/DropZone'

export default function Upload() {
    return (
        <div>
            <h2> Upload pictures </h2>
            <Progress />
            <p className="title">React Drag and Drop Image Upload</p>
            <div className="content">
                <DropZone />
            </div>
        </div>
    )
}
