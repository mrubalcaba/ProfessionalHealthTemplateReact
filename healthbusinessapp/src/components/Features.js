import { useState, useLayoutEffect, useRef } from 'react';
import HomeFeature from './HomeFeature';


const Features = ({ width }) => {
	const [animate, setAnimate] = useState({itemOne: false, itemTwo: false});
	const refOne = useRef(null);
	const refTwo = useRef(null);

	useLayoutEffect(() => {
		const topPos = element => element.getBoundingClientRect().top;
		console.log(refOne.current);
		console.log(refTwo.current);
		const divOnePos = topPos(refOne.current);
		const divTwoPos = topPos(refTwo.current);
		console.log(divOnePos);
		console.log(divTwoPos);

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;
			if(divOnePos * 1.1 < scrollPos){
				document.documentElement.style.setProperty('--position-one', '-80px');
				setAnimate(state => ({...state, itemOne: true}));
			}
			if(divTwoPos * 1.25 < scrollPos){
				document.documentElement.style.setProperty('--position-two', '-80px');
				setAnimate(state => ({...state, itemTwo: true}));
			}
		}
		
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section className="features">
			{animate.itemOne ? <HomeFeature feature={'left-feature'} hidden={false} prop={refOne}></HomeFeature> :
			<HomeFeature hidden={true} prop={refOne}></HomeFeature>}
			{(width <= 1000) ? (
				<div className="features-container right-feature" hidden={true} ref={refTwo}>
					<div className="next-features-img ">
						<img
							className="feature-img feature-group-img"
							src="./../images/group-laughing.jpg"
							alt="Group laughing"
						/>
					</div>
					<div className="left-col col">
						<h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit diam in
							scelerisque efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
							per inceptos himenaeos. Fusce in elit non magna congue varius id eget erat.
						</h4>
						<div className="learn-more">Learn More</div>
					</div>
				</div>
			) : (
				<div className="features-container right-feature" hidden={true} ref={refTwo}>
					<div className="left-col col">
						<h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit diam in
							scelerisque efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
							per inceptos himenaeos. Fusce in elit non magna congue varius id eget erat.
						</h4>
						<div className="learn-more">Learn More</div>
					</div>
					<div className="next-features-img">
						<img
							className="feature-img feature-group-img"
							src="./../images/group-laughing.jpg"
							alt="Group laughing"
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default Features;
