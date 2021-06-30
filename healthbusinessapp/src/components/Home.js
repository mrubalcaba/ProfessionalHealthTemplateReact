import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Logo from './Logo';
import Session from './Session';
import img from '../images/office-space.jpg'
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

const Home = ({show}) => {
    const size = useWindowSize();
	return(
		// <div>
		// 	{show ? <Dropdown/> : 
			<div>
				<Hero/>
				<Features width={size.width}/>
				<Logo/>
				<Testimonials/>
				<Session img={img}/>
				<Newsletter/>
				<Footer/>
			</div>
 		// 	}
        // </div>
	)

}

export default Home
