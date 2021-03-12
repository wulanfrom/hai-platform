import React, { useState, useEffect } from 'react'
import './ImproveTab.css'
import FigmaEmbed from 'react-figma-embed';

// pages
import ImprovementPoint from '../ImprovementPoint/ImprovementPoint'

// bootstrap components
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ImproveTab(props) {
    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    const [figmaURL, setFigmaURL] = useState(props.tabInfo.figmaLink);
    // console.log(props.improvementInfo.figmaLink);
    const [embedLink, setEmbedLink] = useState(figmaURL);
    var initialValue = props.tabInfo.improvements;
    if (initialValue.length == 0) {
        initialValue = [{
            id: generateKey("point"),
            improvement: "",
            explanation: "", 
        }]
    }
    const [improvementList, updateImprovement] = useState(initialValue);

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

    // update the improvement listt from the improvementPoint
    const sendDataToTab = (sentData) => {
        const newList = improvementList.map((item) => {
            console.log("sendData id: ", sentData.id);
            if (item.id == sentData.id) {
                const updatedItem = {
                    ...item,
                    explanation: sentData.explanation,
                    improvement: sentData.improvement,
                }
                return updatedItem;
            }
            return item;
        });
        updateImprovement(newList);
    }

    // update UITab info everytime the improvementList Changes
    useEffect(() => {
        props.updateTab({
            id: props.id,
            improvements: improvementList,
            figmaLink: embedLink,
        });
    }, [improvementList, embedLink]);

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


    // console.log("improvementLInfo: ", props.improvementInfo);

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
                    { improvementList.map((item, idx) => <ImprovementPoint allData={ props.allData } idx={idx + 1} deleteItem = {deleteImprovement} key={item.id} data={item} sendDataToTab={sendDataToTab} />) }
                </div>
                <Button variant="primary" onClick={addImprovement}>+ Add Improvement</Button>
            </div>
        </div>
    )
}
