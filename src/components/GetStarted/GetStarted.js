import React from 'react'
import './GetStarted.css'

// import Banner from '../Banner/Banner'

// redux

// Bootstrap components
// import Button from 'react-bootstrap/Button'

function GetStarted() {
    return (
        <div>
            <h1>(( Description here ))</h1> 

            <ol>
                <li>Go to jupyter notebook and finish the LIME implemtnation </li>

                <li>Move to the next stage </li>

                <ol>
                    <li className='indented'>Upload images </li>
                    <li className='indented'>   Get the labels from the model inception v3 </li>
                    <li className='indented'> Get the explanation that your implementation gives. </li>
                    <li className='indented'> Analyze when the explanation is not helpful</li>
                    <li className='indented'>Create prototype with Figma</li>
                </ol>
            </ol>
            
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