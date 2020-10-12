import sectionReducer from './sectionReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    section: sectionReducer,
})

export default allReducers