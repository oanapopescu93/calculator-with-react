import calculatorReducer from "./calculator"
import headlineReducer from "./headline"
import { combineReducers } from "redux"

const allReducers = combineReducers({
	counter: calculatorReducer,
	headline: headlineReducer
})

export default allReducers;