import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import {setSection} from '../actions'
import '../styles/Navigation.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

function Introduction(){

    const dispatch = useDispatch()

    return (
        <div className="App">
            <Navbar className='intro-navbar'>
                <Navbar.Brand id="navbar-brand">Assignment 1.</Navbar.Brand>
                <div className='tutorial-button'>
                    <OverlayTrigger
                    key={'left'}
                    placement={'left'}
                    overlay={
                        <Tooltip id={`tooltip-${'left'}`}>
                        Click here for help
                        </Tooltip>
                    }
                    >
                        <div style={{cursor: "pointer"}}>
                            <AiOutlineQuestionCircle size={24} color="#fff"/>
                        </div>
                    </OverlayTrigger>
                </div>
            </Navbar>

            <div className="introduction-page">
                <h1 className="text-center"> <b>Assignment 2. Explainability in AI and Its Visualization</b><br />  (Due: Nov. 11:59PM)</h1>
                <p> Abusive language detection is commonly used in social media context such as facebook and twitter, in order to filter out post that are deemed abusive. However, many papers pointed out that hate speech detection technology, such as perspective API, are biased toward flagging more tweets that use AAE (African-American English) dialect than that use SAE (Standard American English). </p>
                <p> In this assignment, students are asked to explore the datasets, implement how to measure a bias, and mitigate the bias. We provide three datasets, each of which consists of 20000+ tweets. We are going to train a machine learning model called Logistic Regression to classify whether a tweet is abusive such as hateful, abusive, or not (i.e. normal tweet). With the trained model, we are going to check whether the model gives a biased prediction with respect to the dialects (AAE and SAE) using a whole different tweet dataset, which has not been used in the training phase. <br></br></p>
                <p> This platform supports two interactive activities: (1) exploring the scenario by visually going through datasets, prediction results, and bias and (2) inspecting and implementing codes via Jupyter Notebook. Students are asked to first explore the scneario, go to the codes to understand details of computations, and implement taks given. You can click '?' icon on the top right for more information. Don't worry too much about coding. We provide all the codes throughout the machine learning pipeline, except for your tasks in this assignment. <br /> </p>
                <p> Students need to have an account to use Jupyter Notebook. We already created an account for each student. The default ID/PW is your student ID. Please change your password via linux terminal on Jupyter Notebook. <br /> </p>
                <p> Students need to submit two things: (1) The codes and (2) discussion. Students do not need to explicitly submit the codes as the server keeps track of your codes. The discussion needs to be submitted on KLMS. We highly encourage you to put resources on the Jupyter Notebook such as codes, figures, and statistical results on the discussion so that your discussion can be supported with a reasonable evidence. The discussion items are posted <a href='' style={{color: 'blue'}}>here</a>. <br /> </p>
                <p> Please note that the objective of this assignment is not to optimize for reducing bias, but to explore possible ways of measuring and mitigating bias. Therefore, students do not need to worry too much about figuring out "better ways of measuring/mitigating bias". The objective of this assignment is to explore possible ways of measuring/mitigating such bias, think about its pros and cons, and discuss its social impact. <br /> </p>
                <p> You are the user of this platform, which means you are always right! Please let us know if you have any question or suggestion about the platform. We are going to iterate this platform so that we keep improving students' learning experience. Hope you enjoy this assignment!<br /> </p>
                
                

                <div className="text-center">
                    <button className='btn btn-green start-btn'> <a href='/hai-platform/#/exploration' onClick={() => dispatch(setSection(1))}>Start Activity </a></button>
                </div>
               
            </div>
        </div>
    )
}

export default Introduction;
