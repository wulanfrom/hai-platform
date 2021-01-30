import React, { useRef, useEffect } from 'react'
import './ListItem.css'

export default function ListItem(props) {
    const data = props.data;
    const i = props.key;
    const fileSize = props.fileSize;
    const fileType = props.fileType;
    const errorMessage = props.errorMessage;
    const imageIcon = useRef();
    const removeFile = props.removeFile;
    const openImageModal = props.openImageModal;

    const loadImage = (file) => {
        const reader = new FileReader();
        // modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageIcon.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

     // on mount
     useEffect(() => {
        loadImage(data);
    }, []);

    return (
        <div>
            <div className="file-status-bar" key={i}>
                <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                    <div className="file-type-logo" ref={ imageIcon }>
                        <div className="file-type">{ fileType }</div>
                    </div>
                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                    <span className="file-size">({ fileSize })</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                </div>
                <div className="file-remove" onClick={() => {removeFile(data.name)}}>X</div>
            </div>
        </div>
    )
}
