import React, { useState } from 'react'
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

export default function UITabs() {
    // list of all tabs
    const [tabList, setTabList] = useState([
        {
            key: 0,
            id: 0
        }
    ]);

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
            if (value.id == tabId) {
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

    return (
        <div>
            <Container fluid className="tabWrapper">
                <Row>
                    <Col xs={11}>
                        <Tabs defaultActiveKey={tabValue} onChange={handleTabChange}>
                            {tabList.map(tab => (
                                <Tab key={tab.key.toString()} eventKey={tab.key.toString()} 
                                title={<span>UI_{tab.id} <X onClick={deleteTab} id={tab.id}/> </span>} className="uiTab">
                                    <ImproveTab />
                                </Tab>
                            ))}
                        </Tabs>
                    </Col>
                    <Col xs={1}>
                        <Button variant="outline-secondary" onClick={addTab}>+</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
