import React, { useState, useEffect } from 'react'
import './UITabs.css'

// Pages
import ImproveTab from '../ImproveTab/ImproveTab'

// react bootstrap components
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {X} from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function UITabs(props) {
    var initialInput = null;
    if (props.improvementData.length === 0) {
        initialInput = [{
            key: 0,
            id: 0,
            improvements: [],
            figmaLink: "",
        }];
    }
    else {
        initialInput = props.improvementData;
    }

    const [tabList, setTabList] = useState(initialInput);

    // current opened tab
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    // add tabs
    const addTab = () => {
        let id = tabList[tabList.length - 1].id + 1;
        setTabList([...tabList, {key: id, id: id}]);
    }

    //delete tabs
    const deleteTab = e => {
        e.stopPropagation();
        console.log("tab deleted");
        // dont delete if there's only one tab left
        if (tabList.length === 1) {
            return;
        }
        
        let tabId = parseInt(e.target.id);
        let tabIDIndex = 0;

        //delete the selected one
        let tabs = tabList.filter((value, index) => {
            if (value.id === tabId) {
                tabIDIndex = index;
            }
            return value.id !== tabId;
        })

        // when deleting, shift focus of current tab
        let curValue = parseInt(tabValue);
        if (curValue === tabId) {
            if (tabIDIndex === 0) {
                curValue = tabList[tabIDIndex + 1].id
            }
            else {
                curValue = tabList[tabIDIndex - 1].id;
            }
        }
        setTabValue(curValue);
        setTabList(tabs);
    }

    // update the info in the tab
    const updateTabInfo = (sentData) => {
        const newTabList = tabList.map((item) => {
            // console.log("sendData id: ", sentData.id);
            if (item.id === sentData.id) {
                const updatedItem = {
                    ...item,
                    improvements: sentData.improvements,
                    figmaLink: sentData.figmaLink,
                }
                return updatedItem;
            }
            return item;
        });
        setTabList(newTabList);
    }

    // give the information to the improve tab
    useEffect(() => {
        props.sendToImprove(tabList);
    }, [tabList]);

    // console.log("tablist: ", tabList);

    return (
        <div>
            <Container fluid className="tabWrapper">
                <h3 className="improve-title">Improve the Model with Your Design</h3>
                <p>Embed your design and point out the improvements you made.</p>
                <Row>
                    <Col xs={12}>
                        <Tabs defaultActiveKey={tabValue} onChange={handleTabChange}>
                            {tabList.map(tab => (
                                <Tab key={tab.key.toString()} eventKey={tab.key.toString()} 
                                title={<span>UI_{tab.id} <X onClick={deleteTab} id={tab.id}/> </span>} className="uiTab">
                                    <ImproveTab updateTab={updateTabInfo} tabInfo={tabList[tab.id]} id={tab.id} allData={ props.allData } />
                                </Tab>
                            ))}
                        </Tabs>
                    </Col>
                    {/* <Col xs={1}>
                        <Button variant="outline-secondary" onClick={addTab}>+</Button>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}
