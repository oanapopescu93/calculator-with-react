import React, {Component} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addition, subtraction, multiplication, division } from './actions/my_calculations'
import { reset } from './actions/my_headline'

function Header(props){	
	const dispatch = useDispatch();	
	const counter = useSelector(state => state.counter);
	const headline = useSelector(state => state.headline);
	console.log('counter', counter);
	
	var input_value=0;
	
	return(
		<div className="calculator_header">
			<h1>{props.name}</h1>
			<div className="reset_container">
				<button id="reset_button" className="reset_button" onClick={() => {dispatch(reset()); dispatch(multiplication(input_value)); }}>Reset</button>
			</div>
		</div>
	);	
}

export default Header