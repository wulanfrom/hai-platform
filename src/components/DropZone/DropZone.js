import React, { useState, useEffect, useRef } from 'react'
import './DropZone.css'
import Button from 'react-bootstrap/Button'

export default function DropZone(props) {
    const currentStep = props.currentStep;
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);
    const pageUrl = ['applyModels/upload', 'applyModels/apply', 'applyModels/explain', 'applyModels/share']

    // For previewing images
    const modalImageRef = useRef();
    const modalRef = useRef();

    // Give data back to parent
    const giveDataToParent = () => {
        props.parentCallBack(selectedFiles.length + 1);
    }

    // Remove duplicate files
    useEffect(() => {
        let filteredArray = selectedFiles.reduce((file, current) => {
            const x = file.find(item => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);
    
    }, [selectedFiles]);

    // drag and drop html api
    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }

    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                //Just ignore files with wrong format
                // // add a new property called invalid
                // files[i]['invalid'] = true;
                // // add to the same array so we can display the name of the file
                // setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // // set error message
                // setErrorMessage('File type not permitted');
            }
        }

        props.parentCallBack(selectedFiles.length + 1);
    }

    // Check if the file is in the right format
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }

        
    }

    // Show file size of uploaded items
    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get file type
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    // Remove file 
    const removeFile = (name) => {
        // find the index of the item
        // remove the item from array
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);

        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);

        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);

        props.parentCallBack(selectedFiles.length);
    }

    // open Image
    const openImageModal = (file) => {
        const reader = new FileReader();
        modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    const closeModal = () => {
        modalRef.current.style.display = "none";
        modalImageRef.current.style.backgroundImage = 'none';
    }

    //Upload files
    // Should the files be uploaded online or in server?

    return (
        <div>
            <div className={`container ${currentStep == 0 ? "" : "hidden"}`}>
                {/* to follow the html drag and drop api */}
                <div className="drop-container" 
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}>
                    <div className="drop-message">
                        <div className="upload-icon"></div>
                            Drag & Drop files here or click to upload
                    </div>
                </div>
                <div className="file-display-container">
                    {/* Itterate through the files and show them in a list */}
                    { validFiles.map((data, i) => 
                        <div className="file-status-bar" key={i}>
                            <div>
                                <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                                    <div className="file-type-logo"></div>
                                    <div className="file-type">{fileType(data.name)}</div>
                                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                    <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                                </div>
                                <div className="file-remove" onClick={() => removeFile(data.name)}>X</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="modal" ref={modalRef}>
                <div className="overlay"></div>
                <span className="close" onClick={(() => closeModal())}>X</span>
                <div className="modal-image" ref={modalImageRef}></div>
            </div>
        </div>
    )
}
