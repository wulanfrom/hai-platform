import React, { useRef, useEffect } from 'react'
import './ListItem.css'

// bootstrap components
import Container from 'react-bootstrap/Container'

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
            <Container>
                <div className="file-status-bar" key={i}>
                    <div className="list-content" onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                        <div className="photo-info">
                            <div className="file-type-logo" ref={ imageIcon }></div>
                            <div className="file-type">{ fileType }</div>
                        </div>
                        <div className="file-cred">
                            <p className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</p>
                            <p className="file-size">({ fileSize })</p> {data.invalid && <p className='file-error-message'>({errorMessage})</p>}
                        </div>
                        <div className="file-remove" onClick={() => {removeFile(data.name)}}>X</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
