import sectionReducer from './sectionReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    seciton: sectionReducer,
})

export default allReducers