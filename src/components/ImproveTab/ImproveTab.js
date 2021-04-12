import React, { useState, useEffect} from 'react'
import './ImproveTab.css'
import FigmaEmbed from 'react-figma-embed';
import axios from 'axios';
import useInterval from 'react-useinterval'

// pages
import ImprovementPoint from '../ImprovementPoint/ImprovementPoint'

// bootstrap components
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

export default function ImproveTab(props) {
    const DEFAULT_FIGMA_URL='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvFiXZq2n30GVFKjD4KGMj8%2FCS492-Human-AI-Interaction-Assignment-2-Interactive-UI-Example%3Fnode-id%3D4%253A13%26scaling%3Dscale-down%26page-id%3D0%253A1';

    // const generateKey = (pre) => {
    //     return `${ pre }_${ new Date().getTime() }`;
    // }
    // console.log(props.improvementInfo.figmaLink);
    const [embedLink, setEmbedLink] = useState(figmaURL);
    /*
    var initialValue = props.tabInfo.improvements;
    if (initialValue.length === 0) {
        initialValue = [{
            id: generateKey("point"),
            improvement: "",
            explanation: "", 
        }]
    }
    */
    const [latestImprovementList, setLatestImprovementList] = useState([]);
    const [improvementList, updateImprovement] = useState([]);
    const [linkDesc, changeLinkDesc] = useState(false);
    const [figmaURL, setFigmaURL] = useState('');
    // for figma iframe loading
    const [loading, setLoading] = useState(true);
    let spinner = null;
    if (!loading) {
        spinner = (
            <Spinner animation="grow" variant="primary" />
        )
    }


    function checkUpdate() {
        // removal check

        if (latestImprovementList.length !== improvementList.length) {
            alert("CRITICAL ERROR");
            console.log(latestImprovementList);
            console.log(improvementList);
        }

        var flag = false;

        /*
        console.log(latestImprovementList);
        console.log(improvementList);
        */

        for (var i = 0; i < latestImprovementList.length; i++) {
            for (var j = 0; j < improvementList.length; j++) {
                if (latestImprovementList[i].id === improvementList[j].id) {
                    if (latestImprovementList[i].explanation !== improvementList[j].explanation ||
                        latestImprovementList[i].improvement !== improvementList[j].improvement) {
                        update_Improvement(improvementList[j].id, improvementList[j].improvement, improvementList[j].explanation);
                        flag = true;
                    }
                }
            }
        }

        if (flag)
            setLatestImprovementList([...improvementList]);
    }


    useInterval(() => { checkUpdate() }, 5000);

    useEffect( () => {

        getFigmaLink().then(res => {
            console.log(res);

            if(res.data.figmaURL == ''){
                setFigmaURL(DEFAULT_FIGMA_URL)
                setEmbedLink(DEFAULT_FIGMA_URL);
            }
            else{
                setFigmaURL(res.data.figmaURL);
                setEmbedLink(res.data.figmaURL);
            }
        });

        get_Improvement().then(res => {
            console.log(res);

            var myList = [];

            for(var i=0;i<res.data.length;i++)  {
                var item = res.data[i];
                var elem = {};

                elem.id = item.id;
                elem.improvement = item.improvement_title;
                elem.explanation = item.improvement_content;

                myList.push(elem);
            }

            setLatestImprovementList(myList);
            updateImprovement(myList);
        })
    }, [])

    // check if figma link is valid
    const validFigmaURL = (link) => {
        return true;


        var REGEX = /https:\/\/([w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
        return REGEX.test(link);
    }

    // if the figma url is not 
    if (validFigmaURL(figmaURL)) {
        // setLoading(false);
        /*
        axios.get(figmaURL).then(response => {
            console.log("RESPONSE: ",response);
        }).catch(error => {
            console.log("ERROR: ", error);
        })
        */
    }

    // hide the spinner when loading finishes
    // const hideSpinner = () => {
    //     setLoading(false);
    // }

    // constantly gets updated with the text input
    const updateFigmaURL = (e) => {
        setFigmaURL(e.target.value);
    }

    // embed the link to the figma iframe
    // const updateEmbedLink = () => {
    //     setEmbedLink(figmaURL);
    // }

    const addImprovement = (e) => {
        add_Improvement("", "").then(res => {
            var newItem = {
                id: res.data.id,
                improvement: "",
                explanation: "",
            }

            updateImprovement(prevArray => [...prevArray, newItem]);
            setLatestImprovementList([...improvementList, newItem]);
            // console.log(improvementList);

            e.preventDefault();
        })
    }

    const deleteImprovement = (e) => {
        const deletedItemIndex = improvementList.findIndex(item => e === item.id);

        remove_Improvement(improvementList[deletedItemIndex].id).then(res => {
            if (improvementList.length > 1) {
                improvementList.splice(deletedItemIndex, 1);
                // update unsupportedFiles array
                updateImprovement([...improvementList]);
                setLatestImprovementList([...improvementList]);
            }
            // console.log(improvementList);
        });
        
    }

    // update the improvement listt from the improvementPoint
    const sendDataToTab = (sentData) => {
        const newList = improvementList.map((item) => {
            // console.log("sendData id: ", sentData.id);

            if (item.id === sentData.id) {
                const updatedItem = {
                    ...item,
                    explanation: sentData.explanation,
                    improvement: sentData.improvement,
                }
                return updatedItem;
            }
            return item;
        });
        // console.log(newList);

        updateImprovement(newList);
    }

    useEffect(() => {
        if (validFigmaURL(figmaURL)) {
            setLoading(false);
        }
        else {
            setLoading(true)
        }
    }, [figmaURL])
    // update UITab info everytime the improvementList Changes
    useEffect(() => {
        props.updateTab({
            id: props.id,
            improvements: improvementList,
            figmaLink: embedLink,
        });
    }, [improvementList, embedLink]);

    //update the explanation point
    // const sendChangedExplanation = (data) => {
    //     const updatedList = improvementList.map(item => {
    //         // if they have the same id
    //         if (item.id == data.id) {
    //             let point = item;
    //             point.explanation = data.explanation;
    //             point.improvement = data.improvement;
    //         }
    //         return item
    //     });

    //     //send the data to the Give Explanation
    //     // props.sendExpToGive(updatedList);
    // }


    // console.log("improvementLInfo: ", props.improvementInfo);

    function remove_Improvement(improvementID) {
        console.log("REMOVE IMPROVEMENT CALLED");

        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/remove_improvement/'; //for signing in

            const data = {
                id: improvementID
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                data: data,
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function update_Improvement(improvementID, title, content) {
        console.log("UPDATE IMPROVEMENT CALLED");

        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/update_improvement/'; //for signing in

            const data = {
                id: improvementID,
                improvement_title: title,
                improvement_content: content
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                data: data,
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }
    function add_Improvement(title, content) {
        console.log("ADD IMPROVEMENT CALLED");

        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/add_improvement/'; //for signing in

            const data = {
                improvement_title: title,
                improvement_content: content
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                data: data,
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function setFigmaLink(figmaURL) {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/set_figma_link/'; //for signing in

            const data = {
                figmaURL: figmaURL,
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                data: data,
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function get_Improvement() {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/get_improvement/'; //for signing in

            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function getFigmaLink() {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/get_figma_link/'; //for signing in

            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                url: url,
            };

            axios(options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    // check whether the link is valid and embed the right link
    const figmaEmbed = (link) => {
        // const link = e.target.value;
        // if valid, embed
        if (validFigmaURL(link)) {
            // console.log("the figma link is valid");
            
            setFigmaLink(link).then( () => {
                changeLinkDesc(false);
                setEmbedLink(link);
            })
        }

        // if not, make text description appear
        else {
            // console.log("the figma link is NOT valid");
            // make description appear
            changeLinkDesc(true);
        }
    }

    // on mount
    // useEffect(() => {
    //     if (!validFigmaURL(figmaURL)) {
    //         setEmbedLink("https://www.figma.com/proto/STFB2ZhftOHIgCrW4TEaA3/XAIPLatformPlaceholder?node-id=1%3A2&scaling=scale-down");
    //     }
    // }, [])

    return (
        <div className="improvement-wrapper">
            <div>
                <h4 className="improvements-title">Limitation of explanation algorithm</h4>
                <p>List a few limitations with examples of images and explanations that you have explored.</p>
                <p>For each limitation, please write (1) when the LIME algorithm does not work, (2) images and explanations
                that you have tried as a convincing evidence, and (3) your ideas on how to overcome
                the limitations in a UI. </p>
                
                <p> Clicking <svg className="uploadImage" width="20" height="20" viewBox="0 0 40 40"></svg> icon allows you to browse and select images with explanations 

                that you have uploaded. To resize the markdown editor, drag "..." icon on the bottom right of each editor. Click "this icon" to have a full-screen of a editor.</p>

                <hr />

                <div>
                    { improvementList.map((item, idx) => <ImprovementPoint allData={ props.allData } idx={idx + 1} deleteItem = {deleteImprovement} key={item.id} data={item} sendDataToTab={sendDataToTab} />) }
                </div>
                <Button className="add-improvement" onClick={addImprovement}>+ Add A Limitation</Button>
            </div>

            <hr />

            <div>
                <h4 className="link-title">Interactive UI prototype</h4>
                <Form>
                    <Form.Group>
                        <Form.Label>Please insert your Figma URL below. Make sure that your UI should be interactive, meaning your prototype should contain a set of actions that users can perform presented as below. Please refer to the following instructions for getting a sharable link for your Figma prototype. </Form.Label>
                        <ol>
                            <li> Click "present" button <div className='presentBtnImg'></div> at the top right of your canvas.  </li>
                            <li> Click "Share prototype" button <div className='sharePrototypeBtnImg'></div> at the top right of your presentation. </li>
                            <li> Click "Get embed code" </li>
                            <li> Copy "src" property of the tag, which starts with "https://..." </li>
                            <li> Paste the URL below and click "Embed Design". Then you can see your presentation below. </li>
                        </ol>
                        <Row>
                            <Col xs={10}>
                                <Form.Control type="text" placeholder="Figma Prototype Link" value={figmaURL} onChange={updateFigmaURL} />
                                {linkDesc ? <Form.Text id="linkDesc" muted>
                                    Your link must be a valid figma link
                                </Form.Text> : ""}
                            </Col>
                            <Col xs={2}>
                                <Button variant="primary" className="embed-button" onClick={() => figmaEmbed(figmaURL)}>Embed Design</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                <div id="figma-wrapper"> 
                    <FigmaEmbed url={embedLink} />
                    {/* {loading ? spinner : <iframe width="800" height="450" src={figmaURL} allowFullScreen></iframe>} */}
                    
                </div>
            </div>
        </div>
    )
}
