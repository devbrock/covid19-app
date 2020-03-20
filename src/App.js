import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GlobalStats from './components/GlobalStats';
import About from './components/pages/About';
import Countries from './components/pages/Countries';
import Country from './components/pages/Country';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route exact path="/">
					<GlobalStats />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/countries">
					<Countries />
				</Route>
				<Route exact path="/country/:country" component={Country} />
			</div>
		</Router>
	);
}

export default App;
