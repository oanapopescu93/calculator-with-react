import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './components/reducers'

import './components/css/style.css';

const store = createStore(allReducers);
//store.subscribe(() => console.log("aaa", store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>
	, document.getElementById('root')
);
serviceWorker.unregister();




// import { createStore } from 'redux'

// store -> globalized state

// action
// const increment = () => {
	// return{
		// type: 'INCREMENT'
	// }
// }
// const decrement = () => {
	// return{
		// type: 'DECREMENT'
	// }
// }

// reducer
// const counter = (state = 0, action) => {
	// switch(action.type){
		// case "INCREMENT":
			// return state+1
		// case "DECREMENT":
			// return state-1
	// }
// }

// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()));

// dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
