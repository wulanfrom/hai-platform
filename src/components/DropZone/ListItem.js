import React, { useRef, useEffect } from 'react'
import './ListItem.css'

// bootstrap components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function ListItem(props) {
    const data = props.data;
    const i = props.key;
    const fileSize = props.fileSize;
    // const fileType = props.fileType;
    const errorMessage = props.errorMessage;
    const imageIcon = useRef();
    const removeFile = props.removeFile;
    const openImageModal = props.openImageModal;

    console.log(props);

    const loadImage = (file, imageRef) => {
        // console.log("filename");
        // console.log(file.name);
        const reader = new FileReader();
        // modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        // console.log(reader.readAsDataURL(file));
        reader.onload = function(e) {
            console.log(imageRef);

            if (!data.invalid && imageRef.current){
                imageRef.current.style.backgroundImage = `url(${e.target.result})`;
            }
            else{
                console.log("it's still on load");
                // imageIcon.current.style.background = `url(../../images/file.svg) no-repeat center center`;
            }
        }
    }

    // on mount
    useEffect(() => {
        console.log(data);

        loadImage(data, imageIcon);
    }, [data]);

    console.log(data);

    return (
        <div>
            <Container>
                <div className="file-status-bar" key={i}>
                    <div className="list-content" onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                        <div className="photo-info">
                            <div className="file-type-logo" ref={ imageIcon }></div>
                            {/* <div className="file-type">{ fileType }</div> */}
                        </div>
                        <div className="file-cred">
                            <div className="file-title">
                                <p className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</p> {data.invalid && <p className='file-error-message'>({errorMessage})</p>}
                            </div>
                            <p className="file-size">({ fileSize })</p> 
                        </div>
                    </div>
                    <div className="file-remove" onClick={() => {removeFile(data.name)}}>
                        <Button className="btn">X</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
