import { useState, useLayoutEffect, useRef } from 'react';

const Features = ({ width }) => {
	const [animate, setAnimate] = useState({itemOne: false, itemTwo: false});


	return (
		<section className="features">
			<div className="features-container left-feature">
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
				<div className="features-container right-feature">
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
				<div className="features-container right-feature">
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
