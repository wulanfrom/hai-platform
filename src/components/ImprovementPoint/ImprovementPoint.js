import React, { useState, useRef } from 'react'
import ReactDOM from "react-dom";
import MDEditor, { commands, ICommand, TextState, TextApi } from '@uiw/react-md-editor';
import './ImprovementPoint.css'

// bootstrap component
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// pages
import ModelPicture from '../ModelPicture/ModelPicture'

export default function ImprovementPoint(props) {
    const [value, setValue] = useState("Please elaborate on your points");
    const [modalShow, setModalShow] = useState(false); //modal show state
    const [selectedImage, updateSelectedImage] = useState([]); // hold the selected images from the modal
    const modalRef = useRef();
    
    const useModelImage: ICommand = {
        name: "Use Uploaded Images",
        keyCommand: "getUploadedImages",
        buttonProps: {"aria-label": "Use Uploaded Images"},
        icon: (
            <svg className="uploadImage" width="12" height="12" viewBox="0 0 20 20">
            </svg>
          ),
        execute: (state: TextState, api: TextApi) => {
            // change the modalShow of modal
            setModalShow(true);
            // showModal();

            // wait until the modal is closed
            
            
            // if closed, check the selectedImage list

            //add the images in the selected image list to the text
        }
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

    async function addToEditor(arr) {
        //update the selected Image 
        updateSelectedImage(arr);
    }

    console.log("seelcted Image");
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
                <ModelPicture ref={ modalRef } addToEditor={ addToEditor } allData={ props.allData } show={ modalShow } updateModalShow={setModalShow} />
            </div>
        </div>
    )
}
