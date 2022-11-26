import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/scss/components/SlideBanner.scss";

const SlideBanner = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<div className="main-banner-container">
			<Slider {...settings}>
				<div className="slide-item">
					<h3>1</h3>
				</div>
				<div className="slide-item">
					<h3>2</h3>
				</div>
				<div className="slide-item">
					<h3>3</h3>
				</div>
				<div className="slide-item">
					<h3>4</h3>
				</div>
			</Slider>
		</div>
	);
};

export default SlideBanner;
