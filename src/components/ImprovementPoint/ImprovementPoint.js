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
    const [value, setValue] = useState("Please elaborate on your points");
    const [modalShow, setModalShow] = useState(false); //modal show state
    const [selectedImage, updateSelectedImage] = useState([]); // hold the selected images from the modal
    const [progress, setProgress] = useState(0); //upload progress
    const modalRef = useRef();

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
                console.log("inside API");
                console.log(response);

                // Select everything
                console.log("state");
                console.log(state);

                // Replaces the current selection with the image
                
                // if length of response.selectedItems > 0
                const selectedImages = response.selectedImages;
                if (selectedImages.length > 0) {
                    console.log("some items were selected");
                    // for each file
                    selectedImages.forEach((item) => {
                        // get a firebase url
                        console.log("item");
                        console.log(item);
                        const uploadTask = storage.ref(`images/${item.data.name}`).put(item.data);
                        uploadTask.on(
                            "state_changed",
                            snapshot => {},
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

    // const openModal = () => {
    //     setModalShow(true);
    // }

    // asyc function to get images from modal
    async function getSelectedImages() {
        // send some data to t  he modal
        setModalShow(true);
        const res = await getImages({allData: props.allData, initialValue: [], modalShow: modalShow});
        console.log("selected images got in improvement point")
        // console.log(res.status);
        // console.log(res.selectedImages);
        return res;

        //update selected images with the result gotten from the modal
        // updateSelectedImage(res.selectedImages);
        // return res.selectedImages;
    }

    // const showModal = () => {
    //     const modal = modalRef.current;
    //     console.log(modal);
    //     setTimeout(async () => {
    //         try {
    //             // open modal
    //             setModalShow(true);
    //             // wait for modal to close
    //             const result = await modal.show();
    //             console.log("result");
    //             console.log(result);
    //         } catch (err) {
    //             alert("error!");
    //         }
    //     }, 100);
    //     console.log("waiting for modal to close")
    // }

    // const addToEditor = async (arr) => {
    //     //update the selected Image 
    //     // updateSelectedImage(arr);
    //     // return the array
    //     return await arr;
    // }

    console.log("seelcted Image improvement point");
    console.log(selectedImage);

    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formPassword">
                    <Form.Label xs="auto">{props.idx}</Form.Label>
                    <Col xs={11}>
                        <Form.Control type="text" placeholder="Insert Important Point here" />
                    </Col>
                    <Col>
                        <Button onClick={props.deleteItem} type="submit" variant="danger" className="deleteBtn">-</Button>
                    </Col>
                </Form.Group>
            </Form>  
            <div className="container">
                <MDEditor
                    value={value}
                    commands={[
                        useModelImage,
                        commands.divider,
                        commands.image
                    ]}
                />
            </div>
            <div>
                {/* <ModelPicture ref={ modalRef } addToEditor={ addToEditor } allData={ props.allData } show={ modalShow } updateModalShow={setModalShow} /> */}
                {/* <ModelPicture ref={ modalRef } allData={ props.allData } show={ modalShow } updateModalShow={ setModalShow } /> */}
            </div>
        </div>
    )
}
