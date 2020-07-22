import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/universal/Footer';
import Header from './components/universal/Header';

import { createStore } from 'redux';
import { reducer } from './reducers';

//create store
export const store = createStore(reducer);

const App = () => {
	return (
		<div>
			<Header />
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
	);
};

export default App;
