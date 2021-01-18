import React from 'react'
import Banner from '../Banner/Banner'

// Bootstrap components
import Button from 'react-bootstrap/Button'

export default function GetStarted() {
    return (
        <div>
            <Banner />
            
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
                    <Button href="/hai-platform/applyModels" type="button" className="getStarted-btn">Get Started</Button>
                </div>
                <hr></hr>

                <h2 className="mt-4">Explore What Others Found</h2>
                <p>Explore the observations done by other users and compare it to yours.</p>
                <Button href="/hai-platform/explore" className="explore-btn">Explore</Button>

            </div>
        </div>
    )
}
