import './css/main.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import YouFeature from './components/YouFeature';
import Blog from './components/Blog';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [show, showToggle] = useState(false);
    const toggle = () => {
        showToggle(!show);
    }

	//navitem login
	const [login, showLogin] = useState(false);
	const loginPage = () => {
		showLogin(!login);
	}

	return (
		<Router>
			<div>
				<Navbar toggle={toggle} show={show} loginPage={loginPage} login={login}>
					<Route exact={true} path="/" component={() => <Home show={show} />} />
					<Route exact={true} path="/YouFeature" component={YouFeature} />
					<Route exact={true} path="/Blog" component={Blog} />
				</Navbar>
			</div>
		</Router>
	);
}

export default App;
