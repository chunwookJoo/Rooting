import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/scss/components/SlideBanner.scss";
import { SlideBannerItem } from "./SlideBannerItem";

const SlideBanner = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
	};

	return (
		<div className="main-banner-container">
			<Slider {...settings}>
				{SlideBannerItem.map((item, index) => {
					return (
						<div key={index} className="slide-item">
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default SlideBanner;
