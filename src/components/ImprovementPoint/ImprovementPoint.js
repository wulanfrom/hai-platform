// reference code
// https://codesandbox.io/s/react-async-dialog-forked-5rzbi?file=/src/getValue/index.js
import React, { useState, useEffect } from 'react'
// import ReactDOM from "react-dom";
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
// import ModelPicture from '../ModelPicture/ModelPicture'

// function import
import getImages from '../ModelPicture/ModelPicture'

export default function ImprovementPoint(props) {
    var initialValue = {
        id: props.data.id,
        value: props.data.explanation,
        explanation: props.data.improvement,
    }

    const [improvementID, setImprovementID] = useState(initialValue.id)
    const [value, setValue] = useState(initialValue.value);
    const [progress, setProgress] = useState(0); //upload progress
    const [improvementPoint, changePoint] = useState(initialValue.explanation);
    // const modalRef = useRef();

    // send data to improve tab if the value and improvementPoint state changes
    useEffect(() => {
        props.sendDataToTab({
            id: props.data.id,
            explanation: value, 
            improvement: improvementPoint
        })
    }, [value, improvementPoint]);

    // update the improvement point
    const handlePointChange = (e) => {
        changePoint(e.target.value);
    }
    
    const useModelImage: ICommand = {
        name: "Use Uploaded Images",
        keyCommand: "getUploadedImages",
        buttonProps: {"aria-label": "Use Uploaded Images"},
        icon: (
            <svg className="uploadImage" width="16" height="16" viewBox="0 0 40 40">
            </svg>
          ),
        execute: (state: TextState, api: TextApi) => {
            // open the dialog and update the selected image field
            getSelectedImages().then(response => {
                // if length of response.selectedItems > 0
                const selectedImages = response.selectedImages;
                if (selectedImages.length > 0) {
                    // console.log("some items were selected");
                    // for each file
                    /*
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
                                    // console.log(url);
                                    let modifyText = `![](${url})\n`;
                                    api.replaceSelection(modifyText);
                                });
                            }
                        )
                    });
                    */
                   
                    // We already know the image URL

                    for(var i=0;i<selectedImages.length;i++) {
                        let modifyText = `<img src='${"http://server.hyungyu.com:1289/static" + selectedImages[i].imageURL}' width='200px' />\n` + 
                                        `<img src='${selectedImages[i].LIMEURL}' width='200px' />\n`;
                        api.replaceSelection(modifyText);
                    }
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

    function handleDeleteItem() {
        props.deleteItem(props.data.id)
    }

    return (
        <div>
            <div className="point-wrapper">
                <Form>
                    <Form.Group as={Row} controlId="formPassword">
                        <Form.Label column sm={3}> 
                            <h5>{"Limitation " + props.idx + "."} </h5>
                        </Form.Label>
                        <Col sm={8}>
                            {/*
                            <Form.Control onChange={ handlePointChange } value={improvementPoint} type="text" placeholder="Insert Improvement Point here" />
                            */}
                        </Col>
                        <Col sm={1}>
                            <Button onClick={handleDeleteItem} className="deleteBtn">X</Button>
                        </Col>
                    </Form.Group>
                </Form> 
            </div> 
            <div id="md-container">
                
                <MDEditor
                    value={value}
                    onChange={setValue}
                    commands={[
                        commands.bold,
                        commands.italic,
                        commands.strikethrough,
                        commands.hr,
                        commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
                            name: 'title',
                            groupName: 'title',
                            buttonProps: { 'aria-label': 'Insert title'}
                        }),
                        commands.divider,
                        commands.link,
                        commands.quote,
                        commands.code,
                        useModelImage,
                        commands.divider,
                        commands.unorderedListCommand,
                        commands.orderedListCommand,
                        commands.checkedListCommand,
                        commands.divider,
                        commands.codePreview,
                        commands.codeEdit,
                        commands.codeLive,
                        commands.fullscreen,
                    ]}
                />
            </div>
        </div>
    )
}
