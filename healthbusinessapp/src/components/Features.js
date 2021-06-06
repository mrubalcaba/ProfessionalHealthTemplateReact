// import {isElementInViewport} from 'isElementInViewport';
import { useEffect } from 'react';

const Features = ({ width }) => {

	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
		  (rect.top <= 0
			&& rect.bottom >= 0)
		  ||
		  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight))
		  ||
		  (rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
		);
	}

	useEffect(() => {
		function onScrollAni(){
			let scroll = window.requestAnimationFrame || 
				function(callback){ window.setTimeout(callback, 1000/60)};
			let elementsToShow = document.querySelectorAll('.show-on-scroll');

			elementsToShow.forEach(function(el){
			if(isElementInViewport(el)){
				el.classList.add('is-visible');
			} else{
				el.classList.remove('is-visible');
			}
			});
		
			scroll(onScrollAni)
			}
			onScrollAni();
	})

	return (
		<section className="features">
			<div className="container features-container left-feature show-on-scroll">
				<div className="marketing-img">
					<img
						className="feature-img feature-women-img"
						src="./../images/women-in-nature.jpg"
						alt="Women in nature"
					/>
				</div>
				<div className="right-col col">
					<h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
					<h4>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit diam in scelerisque
						efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos. Fusce in elit non magna congue varius id eget erat.
					</h4>
					<div className="learn-more">Learn More</div>
				</div>
			</div>
			{width <= 1000 ? (
				<div className="container features-container show-on-scroll">
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
				<div className="container features-container right-feature show-on-scroll">
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
