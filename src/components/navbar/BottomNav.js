import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/components/BottomNav.scss";

const BottomNav = () => {
	return (
		<div className="bottom-nav-container">
			<div className="bottom-nav-links">
				<Link to="/">홈</Link>
				<Link to="/feed">피드</Link>
				<Link to="/myroadmap">마이로드맵</Link>
			</div>
		</div>
	);
};

export default BottomNav;
