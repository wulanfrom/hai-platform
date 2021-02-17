import React, { useState } from 'react'
import './ImproveTab.css'
import FigmaEmbed from 'react-figma-embed';

// pages
import ImprovementPoint from '../ImprovementPoint/ImprovementPoint'

// bootstrap components
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ImproveTab() {
    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    const [figmaURL, setFigmaURL] = useState("");
    const [embedLink, setEmbedLink] = useState("");
    const [improvementList, updateImprovement] = useState([{
        id: generateKey("point"),
        improvement: "",
        explanation: null, 
    }]);

    // constantly gets updated with the text input
    const updateFigmaURL = (e) => {
        setFigmaURL(e.target.value);
    }

    // embed the link to the figma iframe
    const updateEmbedLink = () => {
        setEmbedLink(figmaURL);
    }

    const addImprovement = (e) => {
        var newItem = {
            id: generateKey("point"),
            improvement: "",
            explanation: "",
        }
        updateImprovement(prevArray => [...prevArray, newItem]);
        // console.log(improvementList);

        e.preventDefault();
    }

    const deleteImprovement = (e) => {
        const deletedItemIndex = improvementList.findIndex(item => e.id === item.key);
        if (improvementList.length > 1) {
            improvementList.splice(deletedItemIndex, 1);
            // update unsupportedFiles array
            updateImprovement([...improvementList]);
        }
        // console.log(improvementList);
        e.preventDefault();
    }

    //update the explanation point
    const sendChangedExplanation = (data) => {
        const updatedList = improvementList.map(item => {
            // if they have the same id
            if (item.id == data.id) {
                let point = item;
                point.explanation = data.explanation;
                point.improvement = data.improvement;
            }
            return item
        });

        //send the data to the Give Explanation
        // props.sendExpToGive(updatedList);
    }


    console.log(improvementList);

    return (
        <div className="improvement-wrapper">
            <div>
                <h3>Link with Figma</h3>
                <p>Embed your design so others can see.</p>
                <Form>
                    <Form.Group>
                        <Form.Label>Insert Figma URL Here</Form.Label>
                        <Row>
                            <Col xs={10}>
                                <Form.Control type="text" placeholder="Figma Prototype Link" value={figmaURL} onChange={updateFigmaURL} />
                            </Col>
                            <Col xs={2}>
                                <Button variant="primary" className="embed-button" onClick={updateEmbedLink}>Embed Design</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                <div className="figma-wrapper">
                    <FigmaEmbed url={embedLink} />
                </div>
            </div>
            <div>
                <h3>Improvements</h3>
                <p>List a few representative questions your UI can answer.</p>
                <div>
                    { improvementList.map((item) => <ImprovementPoint deleteItem = {deleteImprovement} key={item.id} data={item}/>) }
                </div>
                <Button variant="primary" onClick={addImprovement}>+ Add Improvement</Button>
            </div>
        </div>
    )
}
