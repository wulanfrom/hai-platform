import React, { useState } from 'react'
import './ImprovementPoint.css'

// bootstrap component
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// CKeditor component
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
// Import translations for the German language.
import 'ckeditor5-custom-build/build/translations/de';

export default function ImprovementPoint(data) {
    // const editorConfiguration = {
    //     toolbar:  ["alignment:left", "alignment:right", "alignment:center", "alignment:justify", "alignment", "blockQuote", "bold", "ckfinder", "code", "codeBlock", "selectAll", "undo", "redo", "exportPdf", "exportWord", "fontColor", "fontFamily", "fontSize", "heading", "horizontalLine", "imageTextAlternative", "imageUpload", "imageInsert", "imageResize:original", "imageResize:25", "imageResize:50", "imageResize:75", "imageResize", "imageStyle:full", "imageStyle:side", "indent", "outdent", "italic", "link", "numberedList", "bulletedList", "mediaEmbed", "strikethrough", "insertTable", "tableColumn", "tableRow", "mergeTableCells", "tableCellProperties", "tableProperties", "underline"],
    //     language: 'en',
    // };
    // const [exp, setExp] = useState(data.explanation); //set the do you agree with the lab to false
    // const [improvement, setImprovement] = useState(data.improvement);

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
            <div className="text-editor">
                
           {/* <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
                    data="<p>Elaborate your improvement points here!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                        // console.log( Array.from( editor.ui.componentFactory.names() ) );
                        // console.log(Editor.builtinPlugins.map( plugin => plugin.pluginName));
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
            </div>
        </div>
    )
}
