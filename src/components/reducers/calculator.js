const calculatorReducer = (state = 0, action) => {
	switch(action.type){
		case "addition":
			return state + action.value;
		case "subtraction":
			return state - action.value;
		case "multiplication":
			return state * action.value;
		case "division":
			return state / action.value;	
		default:
			return state;
	}
}

export default calculatorReducer;