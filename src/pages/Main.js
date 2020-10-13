import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Navigation from '../Component/Navigation'
import {useSelector} from 'react-redux'
import Exploration from './Exploration'
import Visualization from './Visualization'
import Implementation from './Implementation'
import DataSearching from './DataSearching'
import Finish from './Finish'


const Main = () =>{
    const [datasetIndex, setDatasetIndex] = useState(0)
    const loaderActive = useSelector(state => state.loaderActive)

    return (
        <div className="main-application">
            <Navigation/>
            <Switch>
                <Route path="/exploration">{Exploration}</Route>
                <Route path="/datasearching" component={DataSearching}></Route>
                <Route path="/implementation">{Implementation}</Route>
                <Route path="/visualization">{Visualization}</Route>
                <Route path="/finish">{Finish}</Route>
            </Switch>
        </div>
    )
}

export default Main