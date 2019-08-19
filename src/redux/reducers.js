import {combineReducers} from "redux"
import formReducer, {moduleName as formModule} from './form'

const rootReducer = combineReducers({
  [formModule]: formReducer
})

export default rootReducer