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

export default function ImprovementPoint(data) {
    const [value, setValue] = useState("Please elaborate on your points");
    const [modalShow, setModalShow] = useState(false); //modal show state

    const useModelImage: ICommand = {
        name: "Use Uploaded Images",
        keyCommand: "getUploadedImages",
        buttonProps: {"aria-label": "Use Uploaded Images"},
        icon: (
            <svg class="uploadImage" width="12" height="12" viewBox="0 0 20 20">
            </svg>
          ),
        execute: (state: TextState, api: TextApi) => {
            // change the modalShow of modal
            // modalAppear();
            setModalShow(true);
        }
    }
    

    return (
        <div>
            <Form>
                <Form.Group as={Row} controlId="formPassword">
                    <Form.Label xs="auto">{data.idx}</Form.Label>
                    <Col xs={11}>
                        <Form.Control type="text" placeholder="Insert Important Point here" />
                    </Col>
                    <Col>
                        <Button onClick={data.deleteItem} type="submit" variant="danger" className="deleteBtn">-</Button>
                    </Col>
                </Form.Group>
            </Form>  
            <div className="container">
                <MDEditor
                    value="**Hello world!!!**"
                    commands={[
                    useModelImage,
                    commands.divider
                    ]}
                />
            </div>
            <div>
                <ModelPicture show={modalShow} updateModalShow={setModalShow} />
            </div>
        </div>
    )
}
