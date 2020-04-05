const headlineReducer = (state = "", action) => {
	switch(action.type){
		case "show":
			if(state != ""){
				return state + ' ' + action.operation + ' ' + ' ' + action.input;		
			} else {
				return state + action.input;		
			}
		case "reset":
			return ""
		default:
			return state;
	}
}

export default headlineReducer;