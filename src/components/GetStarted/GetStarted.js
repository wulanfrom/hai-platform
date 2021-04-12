import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import './GetStarted.css'

// import Banner from '../Banner/Banner'

// redux

// Bootstrap components
import Button from 'react-bootstrap/Button'

function GetStarted() {
    const goToModels = () => {
        return (
            <Redirect to="/upload" />
        )
    }
    return (
        <div style={{margin: "20px"}}>
            <h1 style={{textAlign: "center"}}> <b> Assignment 2. Explaining Model Predictions to Users</b> </h1> 

            <br />
            <h3> <b> Leaning Objectives </b> </h3>

            <p>Explainable AI helps users understand and interpret predictions produced by models. The objective of this assignment is for you to try existing off-the-shelf tools for explanations, think about strengths and weaknesses of the explanations they provide, and design your own user-centered explanations that can address such weaknesses. </p>

            <h3> <b> Background </b> </h3>

            <p>You will work with methods for explaining model predictions in image classification tasks. Such explanations help users resolve questions around what’s happening inside of the model and why. As users explore these explanations, they may come up with additional questions about the model, which possibly requires other kinds of explanations. </p>

            <h3> <b> What should I do? </b> </h3>

            <p>In this assignment, you are asked to (1) explore Google’s What-If Tool, 
                a platform that helps users understand the performance of models, (2) 
                build and run an algorithm based on LIME for presenting which parts of 
                an image contribute to the prediction for better interpretation of 
                classification results, and (3) design a UI that further helps users 
                interpret the results especially when such explanation is not enough. 
                For each of the stages, you are asked to discuss what can be explained 
                with such tools/methods, and limitations of such explanations. </p> 

            <p> This platform helps you easily apply your implementation of generating 
                explanations to images and organize the results so that you can focus more on 
                analyzing the algorithm. After finishing your implementation task, the platform runs
                your code with images that you uploaded in the platform. Also, the platform suggests you 
                categories of images that you have not explored to encourage more diverse exploration. (( Why is it encouraged? ))</p>

            <h3> <b> Instructions </b> </h3>

            <ol>
                <li> Go to <a href='https://pair-code.github.io/what-if-tool/demos/image.html'>What-If Tool demo</a> about a smile classification task. You can explore the dataset, browse the model performance, and experiment with the model by asking what-if questions to the tool. </li>
                <li> Answer questions in <a href=''>Discussion “Stage 1”</a>. The discussion contains a specific task that you need to perform on the What-If tool.</li>
                <li> Go to <a href='https://server.hyungyu.com:8899'>Jupyter notebook</a> that you already used for the assignment #1. We provide a skeleton code that describes an algorithm that explains which parts of an image contribute to the prediction result. You need to fill out some blanks in the code with your implementation to make it work. The account is same, which means that you need to use the password that you changed. </li>
                <li style={{marginBottom:"5px"}}> Follow the following steps in this platform.</li>
                <ol>
                    <span style={{marginLeft: "40px"}}> <i>Analyze LIME algorithm</i> </span>
                    <li className='indented'>Upload images </li>
                    <li className='indented'>Get the classification labels from the model inception v3 </li>
                    <li className='indented'>Get the explanations that your implementation provides </li>
                    <li className='indented'>Annotate whether the explanation makes sense or not </li>
                    <li className='indented' style={{marginBottom:"10px"}}>Browse the summary of results that allow you to go through your annotations </li>

                    <span style={{marginLeft: "40px"}}> <i>Design interactive UI</i> </span>
                    <li className='indented'>Describe limitations of LIME algorithm and your ideas on how to overcome the limitations </li>
                    <li className='indented'>Create prototype with Figma </li>
                    {/* <Button variant="primary" onClick={goToModels}>Start Assignment</Button> */}
                </ol>
                <li seq="5"> Answer questions in <a href=''> Discussion Stage 2 and 3</a>. </li>
            </ol>

            <hr />

            <div style={{ margin: "auto", textAlign: "center" }}>
                Please make sure that you finish your implementation before proceeding.  <br /> <br />
                <Link to="/upload" className="btn btn-primary">Start Activity</Link>
            </div>

            {/* <Banner />
            
            <div className="proceed-wrapper p-4">
                <h2>What Should I Do?</h2>
                <ul className="what-to-do ml-5">
                    <li>
                        <p>Try the platform with several pictures</p>
                        <p>Does the model label them correctly?</p>
                    </li>
                    <li>
                        <p>Apply explainability models to those pictures.</p>
                        <p>Did you find any image for which the algorithm does not give an explanation that is easy to understand for users?</p>
                    </li>
                    <li>
                        <p>Is the explanation sufficient to trust the model predictions?</p>
                        <p>When is it sufficient? When is it not sufficient? </p>
                    </li>
                    <li>
                        <p>For insufficient predictions, what can you do to make the model label it correctly?</p>
                        <p>What kinds of additional information would you include in your explanation?</p>
                    </li>
                </ul>
                <div className="mx-auto">
                    <Button href="/hai-platform/upload" type="button" className="getStarted-btn">Get Started</Button>
                </div>
                <hr></hr>

                <h2 className="mt-4">Explore What Others Found</h2>
                <p>Explore the observations done by other users and compare it to yours.</p>
                <Button href="/hai-platform/explore" className="explore-btn">Explore</Button>

            </div> */}
        </div>
    )
}

export default GetStarted;