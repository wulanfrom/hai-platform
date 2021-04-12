import React, { useState, useEffect, useRef } from 'react'
import './DropZone.css'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from "axios"
// pages
import ListItem from './ListItem'

export default function DropZone(props) {
    const [selectedFiles, setSelectedFiles] = useState(props.currentData); // all files dropped to the zone
    const [errorMessage, setErrorMessage] = useState(''); 
    const [validFiles, setValidFiles] = useState(props.currentData); // all the non duplicated files
    const [unsupportedFiles, setUnsupportedFiles] = useState([]); // displays invalid files

    const myRefs = useRef([]);

    // For adding input by clicking
    const fileInputRef = useRef();
    // const imageIcon = useRef();

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    // Display images
    const modalImageRef = useRef();
    const modalRef = useRef();

    function getImageObject(url) {
        return new Promise((resolve, reject) => {
            async function createFile(url){
                let response = await fetch(url);
                let data = await response.blob();
                let metadata = {
                  type: 'image/jpeg'
                };
                let file = new File([data], "test.jpg", metadata);
                // ... do something with the file or return it

                resolve(file)
              }

              createFile(url)
        })
    }

    function getUploadedImages() {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/get_uploaded_image/'; //for signing in

            // const config = {
            //     onUploadProgress: function(progressEvent) {
            //       var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            //       setPercentage(percentCompleted);
            //     }
            //   }

            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                url: url,
                // onUploadProgress: function(progressEvent) {
                //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                //     setPercentage(percentCompleted);
                //   }
            };

            axios(options)
                .then(response => {
                    // setLoading(false);
                    // for loading
                    // setPercentage(percent);
                    // // () => {
                    // setTimeout(() => {
                    //     setPercentage(0)
                    //     }, 1000);

                    // }
                    resolve(response);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    // on mount
    useEffect(() => {
        getUploadedImages().then( async res => {
            var files = [];

            for (var i = 0; i < res.data.length; i++) {
                var elem = {
                    id: res.data[i].id,
                    imageID: res.data[i].id,
                    imageURL: res.data[i].imgURL,
                    data: files[i],
                    agreeLabel: -1,
                    agreeExp: -1,
                    explanation: "",
                    LIMEPic: null,
                    label: res.data[i].label != null ? res.data[i].label : "",
                    errorStages: [],
                    isUploaded: true 
                };

                files.push(await getImageObject("http://server.hyungyu.com:1289/static" + res.data[i].imgURL));

                elem.data = files[files.length-1]

                console.log(JSON.parse(JSON.stringify(elem)));

                props.addData(elem);
            }

            setValidFiles([... files]);
        })
    }, []);

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

    // control the next button of the steps
    useEffect(() => {
        const res = unsupportedFiles.length === 0 && validFiles.length > 0;
        props.checkNext(res);
        // props.getImages(validFiles);
        // listFiles();
        // console.log("valid files changed");
    }, [unsupportedFiles, validFiles])


    // Methods for handling events
    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    //re-render the file list
    // const listFiles = () => {
    //     changeListItems((
    //         validFiles.map((data, i) => 
    //             <div>
    //                 <ListItem data={data} key={i} fileSize={fileSize(data.size)} fileType={fileType(data.name)} errorMessage={errorMessage} openImageModal={openImageModal} removeFile={removeFile}/>
    //             </div>
    //         )
    //     ))
    // }

    // Handles files when you upload them
    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // applyIcon(files[i]);
                
                // create new card post? and add to globalCardList
                props.addData({
                    id: files[i].name,
                    data: files[i],
                    agreeLabel: -1,
                    agreeExp: -1,
                    explanation: "",
                    LIMEPic: null,
                    label: "",
                    errorStages: [],
                    isUploaded: false,
                    imageID: -1,
                    imageURL: ''
                })
            } else {
                // add a new property called invalid
                files[i]['invalid'] = true;
                // add to the same array so we can display the name of the file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // set error message
                setErrorMessage('File type not permitted');
                // add files that are invalid
                setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
                // applyIcon(files[i]);
            }
        }
    }

    // checks the validity of the files
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    // checks the size of a file
    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Get the type of file
    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    // Remove selected file
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

        // delete from unsupported files
        const unsupportedFileIndex = unsupportedFiles.findIndex(e => e.name === name);
        if (unsupportedFileIndex !== -1) {
            unsupportedFiles.splice(unsupportedFileIndex, 1);
            // update unsupportedFiles array
            setUnsupportedFiles([...unsupportedFiles]);
        }

        // send name of deleted item to the master upload
        props.getDeletedItem(name);
    }

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

    // console.log("valid Files");
    // console.log(validFiles);
    
    console.log("valid files: ", validFiles);

    return (
        <div>
            <Container fluid>
                <h3 className="dropzone-title"><b>Upload Files</b></h3>
                {/* <p className="title">React Drag and Drop Image Upload</p> */}
                {/* <div className="container"> */}
                <div>
                    {/* {unsupportedFiles.length === 0 && validFiles.length ? <Button className="file-upload-btn" onClick={() => uploadFiles()}>Upload Files</Button> : ''}  */}
                    {unsupportedFiles.length ? <p className="remove-unsupported">Please remove all unsupported files.</p> : ''}
                    {/* <p>Validity of Next: {(unsupportedFiles.length === 0 && validFiles.length > 0).toString()}</p> */}
                    {/* <p>Validity of Next: { validityOfNext.toString() }</p> */}
                    <div className="drop-container" 
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                        onClick={fileInputClicked}>
                        <div className="drop-message">
                            <input
                                ref={fileInputRef}
                                className="file-input"
                                type="file"
                                multiple
                                onChange={filesSelected} />
                            <div className="upload-icon"></div>
                            Drag & Drop files here or <Button className="upload-btn">Browse</Button>
                        </div>
                    </div>
                    <div className="file-display-container">
                    {
                        validFiles.map((data, i) => 
                            <div key={i}>
                                <ListItem data={data} fileSize={fileSize(data.size)} fileType={fileType(data.name)} errorMessage={errorMessage} openImageModal={openImageModal} removeFile={removeFile}/>
                            </div>
                        )
                    }
                    {/* {listItems} */}
                    </div>
                </div>
                {/* </div> */}
                <div className="modal" ref={ modalRef }>
                    <div className="overlay"></div>
                    <span className="close" onClick={(() => closeModal())}>X</span>
                    <div className="modal-image" ref={modalImageRef}></div>
                </div>
            </Container>
        </div>
    )
}

