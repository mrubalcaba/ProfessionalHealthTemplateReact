import './css/main.scss';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

function App() {
	const size = useWindowSize();

	return (
		<div>
			<Navbar>
				<Hero />
				<Features width={size.width} />
				<Testimonials />
				<Newsletter />
				<Footer />
			</Navbar>
		</div>
	);
}

export default App;
