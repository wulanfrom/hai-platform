import React, { useEffect, useRef, useState }from 'react'

// // React components
// import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'

import './LabelCard.css'
import axios from 'axios'

export default function LabelCard(props) {
    console.log(JSON.parse(JSON.stringify(props)));

    const data = props.data;
    const dataName = props.name;
    const errorFlag = props.errorFlag;
    const loading = props.loading;
    // const dataLabel = props.label;

    const imageRef = useRef();
    const [imageID, setImageID] = useState(props.imageID); //set the do you agree with the lab to false
    const [imageURL, setImageURL] = useState(props.imageURL);//set the do you agree with the lab to false
    const [dataLabel, setDataLabel] = useState(props.label); //set the do you agree with the lab to false
    const [agreeValue, setAgreeValue] = useState(props.agreeValue); //set the do you agree with the lab to false
    const [isUploaded, setIsUploaded] = useState(props.isUploaded);

    var values = {
        id: dataName,
        data: data,
        agreeLabel: agreeValue,
        agreeExp: 0,
        explanation: "",
        LIMEPic: null,
        label: dataLabel,
        imageID: -1,
        imageURL: ''
    }


    // add images to the cards
    const loadImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            if (imageRef) {
                imageRef.current.style.backgroundImage = `url(${e.target.result})`;
            }
            else {
                console.log("image hasnt loaded yet");
            }
        }
    }

    function uploadImage(img) {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/upload_image/'; //for signing in

            let form_data = new FormData();
            form_data.append('image', img, img.name);

            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                },
            };

            axios.post(url, form_data, options)
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    function getImageLabel(imageID) {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/get_image_label/'; //for signing in
            const data = {
                image_id: imageID,
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
                    console.log(response);

                    resolve(response)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }

    useEffect(() => {
        if (!isUploaded) {
            uploadImage(data).then(res => {
                console.log(res)

                var imageID = res.data.id;
                setImageURL("http://server.hyungyu.com:1289/static" + res.data.image);

                getImageLabel(imageID).then(res => {
                    // loading label
                    setDataLabel(res.data[0].label)
                    // document.querySelectorAll(".class-result").forEach(a => a.style.display = "block");

                    setImageID(imageID)
                })
                    .catch(err => {
                        console.log(err)
                    })
            })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            if (dataLabel == '') {
                console.log(JSON.parse(JSON.stringify(props)));

                var imageID = props.imageID;
                setImageURL(imageURL);

                getImageLabel(imageID).then(res => {
                    // loading label
                    setDataLabel(res.data[0].label);
                    // document.querySelectorAll(".class-result").forEach(a => a.style.display = "block");
                })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }, [])

    // send data everytime the photo is updated
    useEffect(() => {
        values = {
            id: dataName,
            imageID: imageID,
            // data: data,
            agreeLabel: agreeValue,
            label: dataLabel,
            // agreeExp: 0,
            // explanation: "",
            // LIMEPic: null,
            imageURL: imageURL,
            isUploaded: isUploaded
        }
        // send changed data to parent
        props.sendChangedData(values);
        // console.log("radio button changed");
    }, [agreeValue, dataLabel, imageID, imageURL, isUploaded]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    function handleSetAgreeValue(val) {
        if(val == '1') {
            updateUserLabelAnnotation(imageID, true)
        }
        else {
            updateUserLabelAnnotation(imageID, false)
        }
        
        setAgreeValue(val);
    }

    function updateUserLabelAnnotation(imageID, flag) {
        const url = 'http://server.hyungyu.com:1289/poll/update_label_annotation/'; //for signing in
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

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        loadImage(data);
    }, []);

    // console.log("labelCard: ", dataLabel);
    // console.log("dataLabel: ",)

    console.log(errorFlag);
    return (
        <div className="card-wrapper">
            <Card className="card-container">
                <Card.Body>
                    <div className="photo-container" ref={ imageRef }></div>
                    <div className="info-body">
                        <div>
                            <div className="label-result">
                                <p className="card-label">Label: </p>
                                {loading ? 
                                    <Spinner animation="grow" variant="primary" /> :
                                    <h5><Badge className="class-result">{dataLabel}</Badge></h5>
                                }
                            </div>
                            {/* <div id="separator"></div> */}
                            {/*
                            <p className="class-badge-result">Classification Model</p>
                            <h5><Badge pill className="class-model">InceptionV3</Badge></h5>
                            */}
                        </div>
                        <hr></hr>
                        <div>
                            <Card.Text>Is the label correct?</Card.Text>
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="secondary"
                                        name="radio"
                                        value={radio.value}
                                        checked={ agreeValue === radio.value }
                                        onChange={(e) => handleSetAgreeValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                            {
                                errorFlag ? 
                                <div className='error'> Please answer the question </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
