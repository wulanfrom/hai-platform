import React, { useState, useEffect } from 'react'
import './LoginPage.css'
import { Redirect } from 'react-router-dom'

// components
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

// redux
import * as actions from '../../redux/actions/index'
import { connect } from 'react-redux';


function LoginPage(props) {
    const [notice, setNotice] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [changePassword, setChangePassword] = useState(false);
    const [errPresented, setErrPresented] = useState(false);

    const [cPassword1, setChangePassword1] = useState("");
    const [cPassword2, setChangePassword2] = useState("");
    const [passwordChangeError, setPasswordChangeError] = useState('');

    function handlePasswordChangeSubmit(e) {
        e.preventDefault();
        if(cPassword1 != cPassword2) {
            setPasswordChangeError("Given passwords are not matched.")
        }
        else {
            postChangePassword().then( res => {
                console.log(res);
                console.log("NICE");

                setNotice("Successfully changed the password.");

                setChangePassword(false);
                setEmail('');
                setPassword('');
                setEmailError('');
                setPasswordError('');
                setChangePassword1('');
                setChangePassword2('');
                setPasswordChangeError('');

            }).catch(err => {
                setPasswordChangeError(err.response.data.error);
            })
        }
    }

    function postChangePassword() {
        return new Promise((resolve, reject) => {
            const url = 'http://server.hyungyu.com:1289/poll/change_password/'; //for signing in
            const data = {
                email: email,
                password: password,
                cPassword1: cPassword1,
                cPassword2: cPassword2
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: data,
                url: url,
            };

            axios(options).then(res => {
                resolve(res)
            })
                .catch(err => {
                    reject(err)
                });
        });

    }

    const isEmpty = (string) => {
        if (string.trim() === '') return true;
        else return false;
    }

    const isEmail = (email) => {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(regEx)) return true;
        else return false;
    };

    const validateEmail = (email) => {
        if (isEmpty(email)) {
            setEmailError("Must not be empty");
            return false;
        }
        else if (!isEmail(email)) {
            setEmailError("Must be a valid email address");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    }

    const validatePassword = (password) => {
        if (isEmpty(password)) {
            setPasswordError("Must not be empty.");
            return false;
        } /*
        else if (password.length < 6 ) {
            setPasswordError("Needs to be longer than 6 characters.");
            return false;
        }*/

        return true;
    }

    const handleSubmit = (e) => {
        setNotice('');

        e.preventDefault();
        // see whether the fields are correctly inputted
        if (validatePassword(password) && validateEmail(email)) {
            // const userData = {
            //     email: email,
            //     password: password,
            //     loggedIn: true,
            // }
            // console.log("the fields are valid");
            props.onAuth(email, password);
        }
    }

    /*
    let errorMessage = null;
    if (props.error) {
        console.log("error: ", props.error.message);
        errorMessage = (
            <p style={{color: 'red'}}>Login failed. Please check your email and password.</p>
        )
    }
    */

    let redirect = null;
    if (props.isAuthenticated) {
        redirect = <Redirect to="/getStarted"/>
    }

    // useEffect(() => {
    //     console.log("redirect changes: ", redirect);
    // }, [redirect]);

    function handleChangePasswordIn() {
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
        setChangePassword(true);

        setChangePassword1('');
        setChangePassword2('');
        setPasswordChangeError('');
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    { redirect }
                        <div className="loginContainer">
                            { props.loading ? 
                            ( <Spinner animation="grow" />)
                            :
                            (<div>
                                <div className='myNotice'> {notice} </div>

                                {changePassword ? 
                                <h1 className="login-title">Change Password</h1>
                                :
                                <h1 className="login-title">Login</h1>
                                }
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>KAIST Email address</Form.Label>
                                        <Form.Control value={email} required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                        <Form.Text className="error-msg">
                                            {emailError}
                                        </Form.Text>
                                    </Form.Group>

                                    {
                                    changePassword ? 
                                            <div>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Original Password</Form.Label>
                                                    <Form.Control value={password} required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                                    <Form.Text className="error-msg">
                                                        {passwordError}
                                                    </Form.Text>
                                                </Form.Group>

                                                < hr />

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Password to Change</Form.Label>
                                                    <Form.Control value={cPassword1} required onChange={(e) => setChangePassword1(e.target.value)} type="password" placeholder="Password" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control value={cPassword2} required onChange={(e) => setChangePassword2(e.target.value)} type="password" placeholder="Password" />
                                                    <Form.Text className="error-msg">
                                                        {passwordChangeError}
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button variant="primary" type='submit' onClick={(e) => handlePasswordChangeSubmit(e)}>
                                                    Confirm
                                                </Button>
                                            </div>
                                            :
                                            <div>                                    
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control value={password} required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                                    <Form.Text className="error-msg">
                                                        {passwordError}
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                                                    Log In
                                                </Button>
                                                <Button variant="primary" type="submit" onClick={(e) => handleChangePasswordIn(e)}>
                                                    Change Password
                                                </Button>
                                            </div>
                                    }
                                </Form>
                                {/*errorMessage*/}
                            </div>)
                            }
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // holds reference to a method
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);