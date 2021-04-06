import React, { useEffect, useRef, useState }from 'react'

// // React components
// import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import './LabelCard.css'
import axios from 'axios'

export default function LabelCard(props) {
    const data = props.data;
    const dataName = props.name;
    // const dataLabel = props.label;
    const imageRef = useRef();
    const [dataLabel, setDataLabel] = useState(props.label); //set the do you agree with the lab to false
    const [agreeValue, setAgreeValue] = useState(props.agreeValue); //set the do you agree with the lab to false
    var values = {
        id: dataName,
        data: data,
        agreeLabel: agreeValue,
        agreeExp: 0,
        explanation: "",
        LIMEPic: null,
        label: dataLabel,
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
        uploadImage(data).then(res => {
            console.log(res)

            var imageID = res.data.id;
            var imageURL = res.data.image;

            getImageLabel(imageID).then(res => {
                setDataLabel(res.data[0].label)
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // send data everytime the photo is updated
    useEffect(() => {
        console.log('2');

        values = {
            id: dataName,
            // data: data,
            agreeLabel: agreeValue,
            label: dataLabel,
            // agreeExp: 0,
            // explanation: "",
            // LIMEPic: null,
        }
        // send changed data to parent
        props.sendChangedData(values);
        // console.log("radio button changed");
    }, [agreeValue, dataLabel]);

    const radios = [
        { name: 'Yes', value: '1' },
        { name: 'No', value: '0' },
    ];

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        loadImage(data);
    }, []);

    // console.log("labelCard: ", dataLabel);
    // console.log("dataLabel: ",)

    return (
        <div className="card-wrapper">
            <Card className="card-container">
                <Card.Body>
                    <div className="photo-container" ref={ imageRef }></div>
                    <div className="info-body">
                        <div>
                            <div className="label-result">
                                <p className="card-label">Label</p>
                                <h5><Badge className="class-result">{ dataLabel }</Badge></h5>
                            </div>
                            {/* <div id="separator"></div> */}
                            <p className="class-badge-result">Classification Model</p>
                            <h5><Badge pill className="class-model">InceptionV3</Badge></h5>
                        </div>
                        <hr></hr>
                        <div>
                            <Card.Text>Do you Agree with the Label?</Card.Text>
                            <ButtonGroup toggle>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="secondary"
                                        name="radio"
                                        value={radio.value}
                                        checked={ agreeValue === radio.value }
                                        onChange={(e) => setAgreeValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
