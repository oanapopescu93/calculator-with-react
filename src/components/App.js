import React from 'react';
import Header from './header'

import { useSelector, useDispatch } from 'react-redux'
import { addition, subtraction, multiplication, division } from './actions/my_calculations'
import { show } from './actions/my_headline'

function App() {	
	const dispatch = useDispatch();	
	
	const counter = useSelector(state => state.counter);
	const headline = useSelector(state => state.headline);
	//console.log('counter', counter);
	var input_value = 1;	
	
	function get_value(value){
		//console.log('value', value);
		input_value = parseFloat(value);		
		if(isNaN(input_value)){
			alert('The value is not a number');
			document.getElementById('input_value').value = ''
		}
	}
	
	return (
		<div className="calculator_container">
			<Header name ="Calculator"></Header>
			<div className="calculator">
				<h2>{headline}</h2>
				<h1>Result: <span>{counter}</span></h1>
				
				<input id="input_value" className="input_value" type="text" onChange={(e) => {get_value(e.target.value);}}/>
				
				<div className="math_operation">
					<button id="addition_button" className="math_button" onClick={() => {dispatch(show(input_value, "+")); if(document.getElementById('input_value').value != ''){dispatch(addition(input_value));}; document.getElementById('input_value').value = ''}}>+</button>
				</div>
				
				<div className="math_operation">
					<button id="subtraction_button" className="math_button" onClick={() => {dispatch(show(input_value, "-")); if(document.getElementById('input_value').value != ''){dispatch(subtraction(input_value));}; document.getElementById('input_value').value = ''}}>-</button>
				</div>
				
				<div className="math_operation">
					<button id="multiplication_button" className="math_button" onClick={() => {dispatch(show(input_value, "x")); if(document.getElementById('input_value').value != ''){dispatch(multiplication(input_value));}; document.getElementById('input_value').value = ''}}>X</button>
				</div>
				
				<div className="math_operation">
					<button id="division_button" className="math_button" onClick={() => {dispatch(show(input_value, "/")); if(document.getElementById('input_value').value != ''){dispatch(division(input_value));}; document.getElementById('input_value').value = ''}}>/</button>
				</div>	
			</div>
		</div>
	);
}

export default App;
