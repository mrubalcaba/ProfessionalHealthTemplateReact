import './css/main.scss';
import Hero from './components/Hero';
import Home from './components/Home';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import YouFeature from './components/YouFeature';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [show, showToggle] = useState(false);
    const toggle = () => {
        showToggle(!show);
    }

	return (
		<Router>
			<div>
				<Navbar toggle={toggle} show={show}>
					<Route exact={true} path="/" component={() => <Home show={show} />} />
					<Route exact={true} path="/YouFeature" component={YouFeature} />
				</Navbar>
			</div>
		</Router>
	);
}

export default App;
