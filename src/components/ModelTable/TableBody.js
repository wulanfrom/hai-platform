import React, { useRef, useState, useEffect } from 'react'

import './TableBody.css'

// bootstrap components
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import axios from 'axios'

export default function TableBody(props) {
    const data = props.data;
    const imageRef = useRef();
    const expRef = useRef();
    const loading = props.loading;
    const errorFlag = props.errorFlag;

    const [expAgree, setExpAgree] = useState(data.agreeExp); //set the do you agree with the lab to false
    const [explanation, setExplanation] = useState(data.explanation);
    const [percentage, setPercentage] = useState(0);

    let percent = 0;
    var values = {
        id: data.id,
        agreeExp: expAgree,
        explanation: explanation,
        // LIMEPic: data.data,
    }

    // add images to the table
    const loadImage = (file, imageRef) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            imageRef.current.style.backgroundImage = `url(${e.target.result})`;
            // console.log(imageRef.current.style.display);
            imageRef.current.style.display = "block";
            console.log(imageRef.current.style.display);
        }
    }

    function getImageObject(url) {
        return new Promise((resolve, reject) => {
            async function createFile(url){
                let response = await fetch(url);
                let data = await response.blob();
                let metadata = {
                  type: 'image/jpeg'
                };
                let file = new File([data], "test.jpg", metadata);
                // ... do something with the file or return it

                resolve(file)
              }

              createFile(url)
        })
    }


    function getLimeResult(imageID) {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/get_image_explanation/'; //for signing in

            const data = {
                image_id: imageID,
            }

            // const config = {
            //     onUploadProgress: function(progressEvent) {
            //       var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            //       setPercentage(percentCompleted);
            //     }
            //   }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json', 
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
                data: data,
                url: url,
                // onUploadProgress: function(progressEvent) {
                //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                //     setPercentage(percentCompleted);
                //   }
            };

            axios(options)
                .then(response => {
                    // setLoading(false);
                    // for loading
                    // setPercentage(percent);
                    // // () => {
                    // setTimeout(() => {
                    //     setPercentage(0)
                    //     }, 1000);
                        
                    // }
                    resolve(response);
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    // Similar to componentDidMount and componentDidUpdate:
     useEffect(() => {
         if (data.LIMEPic == null) {
             // Update the document title using the browser API
             loadImage(data.data, imageRef);

             getLimeResult(data.imageID).then(res => {
                 getImageObject(res.data.explanation_url).then(res2 => {
                     loadImage(res2, expRef);

                     props.applyLimeModel({
                         id: data.id,
                         LIMEPic: res2,
                         LIMEURL: res.data.explanation_url
                     });
                 })
             })
         }
         else {
             loadImage(data.LIMEPic, expRef);
         }
    }, []);


    // update the data's explanation
    const updateExplanation = (e) => {
        setExplanation(e.target.value);
    }

    // send data to LimeTable whenever the expAgree and explanation changes.
    useEffect(() => {
        values = {
            id: data.id,
            agreeExp: expAgree,
            explanation: explanation,
        }

        // send changed data to parent
        props.sendChangedExplanation(values);
        // console.log("radio button changed");
    }, [expAgree, explanation]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    function checkExpError() {
        return (data.errorStages.includes(2) && data.LIMEPic == null) ? true : false;
    }

    function checkLabelError() {
        return (data.errorStages.includes(2) && data.agreeExp == -1 ) ? true : false;
    }

    function updateUserExplanationAnnotation(imageID, flag) {
        const url = 'http://server.hyungyu.com:1289/poll/update_explanation_annotation/'; //for signing in
        const data = {
            image_id: imageID,
            user_annotation: flag
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
            .catch(err => {
                alert(err)
            });
    }

    function handleExpAnnotation(val) {
        if(val == '1') updateUserExplanationAnnotation(data.imageID, true)
        else updateUserExplanationAnnotation(data.imageID, false)

        setExpAgree(val)
    }

    return (
        // <div>
        <tr>
            <td>
                <div>
                    {/* image */}
                    <div className="image-wrapper">
                        <div id="image-container" ref={ imageRef }></div>
                    </div>
                    {/* image name 
                    <p>{ data.id }</p>*/}

                </div>
            </td>
            <td>
                {/* Put lime picture here */}
                <div className="exp-wrapper">
                    {/* { percentage && <ProgressBar now={percentage} label={`${percentage}%`} /> } */}
                    { loading ? <div> <Spinner animation="grow" variant="primary" /> <br /> We're now generating an explanation in real-time. It may take a minute. </div> :
                     <div className="exp-container" ref={expRef}></div>
                    }
                    {
                        checkExpError() ? 
                        <div className='error'> Please wait for the explanation. </div>
                        :
                        ''
                    }
                </div>  
            </td>
            <td>
                {loading ? '' :
                    <div>
                        <div className="labelName">
                            <p>Label</p>
                            {/* <p>{ data.label }</p> */}
                            <h5><Badge className="class-result">{data.label}</Badge></h5>
                        </div>
                        <div className="agreeLabel" style={{marginTop: "15px"}}>
                            <p> Is the explanation helpful to understand why the model produces the label?</p>
                            <ButtonGroup className="yesNo" toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="secondary"
                                        name="radio"
                                        value={radio.value}
                                        checked={expAgree === radio.value}
                                        onChange={(e) => handleExpAnnotation(e.currentTarget.value)}
                                        className="expRadioBtn"
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                        {
                            checkLabelError() ?
                                <div className='error'> Please answer the question above. </div>
                                :
                                ''
                        }
                        <div style={{marginTop: "15px"}}>
                            <Form.Group controlId="explanationTextArea">
                                <Form.Label className="expLabel">
                                    <p>Please state additional information that might be helpful to understand (or trust) the explanation, if you have any.</p>
                                </Form.Label>
                                {/* whenever it changes, update the globaldata in master upload */}
                                <Form.Control as="textarea" value={explanation} rows={3} onChange={updateExplanation} />
                            </Form.Group>
                        </div>
                    </div>
                }
            </td>
        </tr>
        // </div>
    )
}