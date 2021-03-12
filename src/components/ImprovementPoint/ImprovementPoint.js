// reference code
// https://codesandbox.io/s/react-async-dialog-forked-5rzbi?file=/src/getValue/index.js
import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from "react-dom";
import MDEditor, { commands, ICommand, TextState, TextApi } from '@uiw/react-md-editor';
// import { selectWord } from '../utils/markdownUtils';
import './ImprovementPoint.css'

// firebase
import { storage } from '../../firebase';

// bootstrap component
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// pages
import ModelPicture from '../ModelPicture/ModelPicture'

// function import
import getImages from '../ModelPicture/ModelPicture'

export default function ImprovementPoint(props) {
    var initialValue = {
        value: props.data.explanation,
        explanation: props.data.improvement,
    }
    const [value, setValue] = useState(initialValue.value);
    const [modalShow, setModalShow] = useState(false); //modal show state
    const [selectedImage, updateSelectedImage] = useState([]); // hold the selected images from the modal
    const [progress, setProgress] = useState(0); //upload progress
    const [improvementPoint, changePoint] = useState(initialValue.explanation);
    const modalRef = useRef();

    // send data to improve tab if the value and improvementPoint state changes
    useEffect(() => {
        props.sendDataToTab({
            id: props.data.id,
            explanation: value, 
            improvement: improvementPoint
        })
    }, [value, improvementPoint]);

    const handleUpload = (file) => {
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // console.log(progress);
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    // console.log(url);
                    return url;
                });
            }
        )
    }

    // update the improvement point
    const handlePointChange = (e) => {
        changePoint(e.target.value);
    }
    
    const useModelImage: ICommand = {
        name: "Use Uploaded Images",
        keyCommand: "getUploadedImages",
        buttonProps: {"aria-label": "Use Uploaded Images"},
        icon: (
            <svg className="uploadImage" width="8" height="8" viewBox="0 0 8 8">
            </svg>
          ),
        execute: (state: TextState, api: TextApi) => {
            // open the dialog and update the selected image field
            getSelectedImages().then(response => {
                // console.log("inside API");
                // console.log(response);

                // // Select everything
                // console.log("state");
                // console.log(state);

                // Replaces the current selection with the image
                
                // if length of response.selectedItems > 0
                const selectedImages = response.selectedImages;
                if (selectedImages.length > 0) {
                    // console.log("some items were selected");
                    // for each file
                    selectedImages.forEach((item) => {
                        // get a firebase url
                        // console.log("item");
                        // console.log(item);
                        const uploadTask = storage.ref(`images/${item.data.name}`).put(item.data);
                        uploadTask.on(
                            "state_changed",
                            // show progress
                            snapshot => {
                                const progress = Math.round(
                                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                );
                                setProgress({ progress });
                                // console.log(progress);
                            },
                            error => {
                                console.log(error);
                            },
                            () => {
                                storage.ref("images")
                                .child(item.data.name)
                                .getDownloadURL()
                                .then(url => {
                                    console.log(url);
                                    let modifyText = `![](${url})\n`;
                                    api.replaceSelection(modifyText);
                                });
                            }
                        )
                    });
                }
            });
        }
    }

    // asyc function to get images from modal
    async function getSelectedImages() {
        // send some data to t  he modal
        const res = await getImages({allData: props.allData, initialValue: [], modalShow: true, progress: progress});
        return res;
    }

    // console.log("improvementPoint, ", improvementPoint);
    // console.log("value, ", value);

    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formPassword">
                    <Form.Label xs="auto">{props.idx}</Form.Label>
                    <Col xs={11}>
                        <Form.Control onChange={ handlePointChange } value={improvementPoint} type="text" placeholder="Insert Important Point here" />
                    </Col>
                    <Col>
                        <Button onClick={props.deleteItem} type="submit" variant="danger" className="deleteBtn">-</Button>
                    </Col>
                </Form.Group>
            </Form>  
            <div className="container">
                <MDEditor
                    value={value}
                    onChange={setValue}
                    commands={[
                        useModelImage,
                        commands.divider,
                        commands.image
                    ]}
                />
            </div>
        </div>
    )
}
